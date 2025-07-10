import React, { useState, useEffect } from 'react';

interface TableRow {
  col1: string;
  col2: string;
  col3: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
}

const TableWithSearch: React.FC = () => {
  // Sample data
  const allData: TableRow[] = [
    { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', col3: 'Row 1, Col 3', category: 'Category 1' },
    { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', col3: 'Row 2, Col 3', category: 'Category 2' },
    { col1: 'Row 3, Col 1', col2: 'Row 3, Col 2', col3: 'Row 3, Col 3', category: 'Category 1' },
    { col1: 'Row 4, Col 1', col2: 'Row 4, Col 2', col3: 'Row 4, Col 3', category: 'Category 3' },
    { col1: 'Row 5, Col 1', col2: 'Row 5, Col 2', col3: 'Row 5, Col 3', category: 'Category 2' },
    { col1: 'Row 6, Col 1', col2: 'Row 6, Col 2', col3: 'Row 6, Col 3', category: 'Category 3' },
  ];

  // Categories
  const categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' },
    { id: 'category3', name: 'Category 3' },
  ];

  // State
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredData, setFilteredData] = useState<TableRow[]>(allData);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle category select change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Filter data based on search term and selected category
  useEffect(() => {
    const filtered = allData.filter(row => {
      // Check if row matches search term
      const matchesSearch = 
        row.col1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.col2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.col3.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Check if row matches selected category
      const matchesCategory = 
        selectedCategory === 'all' || 
        row.category.replace(/\s+/g, '').toLowerCase() === selectedCategory.toLowerCase();
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredData(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search-input" className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="search-input" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="category-select" className="sr-only">Category</label>
                <select 
                  id="category-select" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Header 1</th>
                  <th className="px-4 py-3">Header 2</th>
                  <th className="px-4 py-3">Header 3</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{row.col1}</td>
                    <td className="px-4 py-3">{row.col2}</td>
                    <td className="px-4 py-3">{row.col3}</td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr className="border-b dark:border-gray-700">
                    <td colSpan={3} className="px-4 py-3 text-center">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableWithSearch;