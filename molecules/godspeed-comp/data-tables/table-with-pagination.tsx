import React, { useState, useEffect } from 'react';

interface TableRow {
  col1: string;
  col2: string;
  col3: string;
}

const TableWithPagination: React.FC = () => {
  // Sample data - in a real app, this might come from an API
  const allData: TableRow[] = [
    { col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', col3: 'Row 1, Col 3' },
    { col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', col3: 'Row 2, Col 3' },
    { col1: 'Row 3, Col 1', col2: 'Row 3, Col 2', col3: 'Row 3, Col 3' },
    { col1: 'Row 4, Col 1', col2: 'Row 4, Col 2', col3: 'Row 4, Col 3' },
    { col1: 'Row 5, Col 1', col2: 'Row 5, Col 2', col3: 'Row 5, Col 3' },
    { col1: 'Row 6, Col 1', col2: 'Row 6, Col 2', col3: 'Row 6, Col 3' },
    { col1: 'Row 7, Col 1', col2: 'Row 7, Col 2', col3: 'Row 7, Col 3' },
    { col1: 'Row 8, Col 1', col2: 'Row 8, Col 2', col3: 'Row 8, Col 3' },
    { col1: 'Row 9, Col 1', col2: 'Row 9, Col 2', col3: 'Row 9, Col 3' },
    { col1: 'Row 10, Col 1', col2: 'Row 10, Col 2', col3: 'Row 10, Col 3' },
    { col1: 'Row 11, Col 1', col2: 'Row 11, Col 2', col3: 'Row 11, Col 3' },
    { col1: 'Row 12, Col 1', col2: 'Row 12, Col 2', col3: 'Row 12, Col 3' },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);
  const [displayData, setDisplayData] = useState<TableRow[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Calculate pagination
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setDisplayData(allData.slice(indexOfFirstItem, indexOfLastItem));
    setTotalPages(Math.ceil(allData.length / itemsPerPage));
  }, [currentPage, itemsPerPage]);

  // Handle page navigation
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page buttons
  const renderPageButtons = () => {
    const buttons: React.ReactNode[] = [];
    
    // For simplicity, we'll show up to 5 page buttons
    const maxButtons = Math.min(5, totalPages);
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);
    
    // Adjust startPage if we're near the end
    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-4 py-2 rounded-lg border ${
            i === currentPage
              ? 'border-blue-500 bg-blue-100 text-blue-700 font-semibold'
              : 'border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100 font-medium'
          }`}
        >
          {i}
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
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
                {displayData.map((row, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{row.col1}</td>
                    <td className="px-4 py-3">{row.col2}</td>
                    <td className="px-4 py-3">{row.col3}</td>
                  </tr>
                ))}
                {displayData.length === 0 && (
                  <tr className="border-b dark:border-gray-700">
                    <td colSpan={3} className="px-4 py-3 text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          <div className="flex justify-between items-center mt-4 p-4">
            <button 
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border border-gray-300 ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              } font-medium`}
            >
              Previous
            </button>
            
            <div className="flex gap-1">
              {renderPageButtons()}
            </div>
            
            <button 
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border border-gray-300 ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              } font-medium`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableWithPagination;