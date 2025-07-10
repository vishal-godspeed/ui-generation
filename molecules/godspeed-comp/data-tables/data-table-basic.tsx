import React, { useState } from 'react';

interface TableRow {
  col1: string;
  col2: string;
  col3: string;
}

interface Category {
  id: string;
  name: string;
}

const DataTableBasic: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample data
  const categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' },
    { id: 'category3', name: 'Category 3' }
  ];
  
  const tableData: TableRow[] = [
    { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', col3: 'Row 1, Col 3' },
    { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', col3: 'Row 2, Col 3' }
  ];
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  
  // In a real application, you would filter the data based on the selected category
  // For this example, we'll just display all data
  const filteredData = tableData;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="category-select" className="sr-only">Category</label>
                <select 
                  id="category-select" 
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  {categories.map((category) => (
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
                      No data available
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

export default DataTableBasic;