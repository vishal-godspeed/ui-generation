import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  details: string;
  category: string;
}

interface ReadProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  onEdit?: (product: Product) => void;
  onPreview?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

const ReadProductModal: React.FC<ReadProductModalProps> = ({
  isOpen,
  onClose,
  product,
  onEdit = () => {},
  onPreview = () => {},
  onDelete = () => {}
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="readProductModal" 
      tabIndex={-1} 
      aria-hidden="true" 
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
        {/* Modal content */}
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
            <div className="text-lg text-gray-900 md:text-xl dark:text-white">
              <h3 className="font-semibold">
                {product.name}
              </h3>
              <p className="font-bold">
                {product.price}
              </p>
            </div>
            <div>
              <button 
                type="button" 
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" 
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg 
                  aria-hidden="true" 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          </div>
          
          <dl>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{product.details}</dd>
            <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Category</dt>
            <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{product.category}</dd>
          </dl>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button 
                type="button" 
                className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => onEdit(product)}
              >
                <svg 
                  aria-hidden="true" 
                  className="mr-1 -ml-1 w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path 
                    fillRule="evenodd" 
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" 
                    clipRule="evenodd"
                  />
                </svg>
                Edit
              </button>               
              <button 
                type="button" 
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => onPreview(product)}
              >
                Preview
              </button>
            </div>              
            <button 
              type="button" 
              className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={() => onDelete(product)}
            >
              <svg 
                aria-hidden="true" 
                className="w-5 h-5 mr-1.5 -ml-1" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" 
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadProductModal;