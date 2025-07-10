import React, { useState, useEffect, useRef } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  price: string;
}

interface Brand {
  id: string;
  name: string;
  count: number;
  checked: boolean;
}

const DataTableDynamic: React.FC = () => {
  // Sample product data
  const initialProducts: Product[] = [
    { id: '1', name: 'Apple iMac 27"', category: 'PC', brand: 'Apple', description: '300', price: '$2999' },
    { id: '2', name: 'Apple iMac 20"', category: 'PC', brand: 'Apple', description: '200', price: '$1499' },
    { id: '3', name: 'Apple iPhone 14', category: 'Phone', brand: 'Apple', description: '1237', price: '$999' },
    { id: '4', name: 'Apple iPad Air', category: 'Tablet', brand: 'Apple', description: '4578', price: '$1199' },
    { id: '5', name: 'Xbox Series S', category: 'Gaming/Console', brand: 'Microsoft', description: '56', price: '$299' },
    { id: '6', name: 'PlayStation 5', category: 'Gaming/Console', brand: 'Sony', description: '78', price: '$799' },
    { id: '7', name: 'Xbox Series X', category: 'Gaming/Console', brand: 'Microsoft', description: '200', price: '$699' },
    { id: '8', name: 'Apple Watch SE', category: 'Watch', brand: 'Apple', description: '657', price: '$399' },
    { id: '9', name: 'NIKON D850', category: 'Photo', brand: 'Nikon', description: '465', price: '$599' },
    { id: '10', name: 'Monitor BenQ EX2710Q', category: 'TV/Monitor', brand: 'BenQ', description: '354', price: '$499' },
  ];

  // State for products and filtering
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // State for brand filters
  const [brands, setBrands] = useState<Brand[]>([
    { id: 'apple', name: 'Apple', count: 56, checked: false },
    { id: 'microsoft', name: 'Microsoft', count: 16, checked: false },
    { id: 'razor', name: 'Razor', count: 49, checked: false },
    { id: 'nikon', name: 'Nikon', count: 12, checked: false },
    { id: 'benq', name: 'BenQ', count: 74, checked: false },
  ]);

  // Refs for dropdowns
  const actionsDropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  const productDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Toggle dropdown visibility
  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle brand filter change
  const handleBrandFilterChange = (brandId: string) => {
    setBrands(brands.map(brand => 
      brand.id === brandId ? { ...brand, checked: !brand.checked } : brand
    ));
  };

  // Filter products based on search term and brand filters
  useEffect(() => {
    const selectedBrands = brands.filter(brand => brand.checked).map(brand => brand.name);
    
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.price.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      
      return matchesSearch && matchesBrand;
    });
    
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, brands, products]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown === 'actions' && 
        actionsDropdownRef.current && 
        !actionsDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      
      if (
        activeDropdown === 'filter' && 
        filterDropdownRef.current && 
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      
      // Check product dropdowns
      Object.keys(productDropdownRefs.current).forEach(key => {
        if (
          activeDropdown === key && 
          productDropdownRefs.current[key] && 
          !productDropdownRefs.current[key]?.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="simple-search" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Search" 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <button 
                type="button" 
                className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add product
              </button>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <div className="relative">
                  <button 
                    id="actionsDropdownButton" 
                    onClick={() => toggleDropdown('actions')}
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
                    type="button"
                  >
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                    Actions
                  </button>
                  <div 
                    ref={actionsDropdownRef}
                    className={`${activeDropdown === 'actions' ? 'block' : 'hidden'} absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    id="filterDropdownButton" 
                    onClick={() => toggleDropdown('filter')}
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filter
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div 
                    ref={filterDropdownRef}
                    className={`${activeDropdown === 'filter' ? 'block' : 'hidden'} absolute z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700`}
                  >
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                    <ul className="space-y-2 text-sm">
                      {brands.map(brand => (
                        <li key={brand.id} className="flex items-center">
                          <input 
                            id={brand.id} 
                            type="checkbox" 
                            checked={brand.checked}
                            onChange={() => handleBrandFilterChange(brand.id)}
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label htmlFor={brand.id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                            {brand.name} ({brand.count})
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Product name</th>
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                  <th scope="col" className="px-4 py-3">Price</th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product) => (
                  <tr key={product.id} className="border-b dark:border-gray-700">
                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {product.name}
                    </th>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">{product.brand}</td>
                    <td className="px-4 py-3">{product.description}</td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3 flex items-center justify-end">
                      <div className="relative">
                        <button 
                          onClick={() => toggleDropdown(`product-${product.id}`)}
                          className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" 
                          type="button"
                        >
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </button>
                        <div 
                          ref={el => productDropdownRefs.current[`product-${product.id}`] = el}
                          className={`${activeDropdown === `product-${product.id}` ? 'block' : 'hidden'} absolute right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                        >
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                            </li>
                            <li>
                              <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
                {currentItems.length === 0 && (
                  <tr className="border-b dark:border-gray-700">
                    <td colSpan={6} className="px-4 py-3 text-center">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing
              <span className="font-semibold text-gray-900 dark:text-white"> {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)} </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white"> {filteredProducts.length} </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show first page, last page, current page, and pages around current
                let pageNum = i + 1;
                if (totalPages > 5) {
                  if (currentPage <= 3) {
                    // Near the start
                    if (i === 3) pageNum = totalPages;
                    if (i === 2 && currentPage !== 3) pageNum = -1; // Ellipsis
                  } else if (currentPage >= totalPages - 2) {
                    // Near the end
                    if (i === 1) pageNum = -1; // Ellipsis
                    if (i === 0) pageNum = 1;
                    if (i >= 2) pageNum = totalPages - (4 - i);
                  } else {
                    // Middle
                    if (i === 0) pageNum = 1;
                    if (i === 1) pageNum = -1; // Ellipsis
                    if (i === 2) pageNum = currentPage;
                    if (i === 3) pageNum = -1; // Ellipsis
                    if (i === 4) pageNum = totalPages;
                  }
                }
                
                if (pageNum === -1) {
                  return (
                    <li key={`ellipsis-${i}`}>
                      <span className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                        ...
                      </span>
                    </li>
                  );
                }
                
                return (
                  <li key={pageNum}>
                    <button
                      onClick={() => paginate(pageNum)}
                      className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${
                        currentPage === pageNum
                          ? 'text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default DataTableDynamic;