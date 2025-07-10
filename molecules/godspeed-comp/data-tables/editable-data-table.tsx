import React, { useState } from 'react';

interface TableRow {
  id: string;
  col1: string;
  col2: string;
  isEditing: boolean;
  isNew?: boolean;
}

interface Category {
  id: string;
  name: string;
}

const EditableDataTable: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Sample categories
  const categories: Category[] = [
    { id: 'all', name: 'All' },
    { id: 'category1', name: 'Category 1' },
    { id: 'category2', name: 'Category 2' },
    { id: 'category3', name: 'Category 3' }
  ];
  
  // Initial table data
  const [rows, setRows] = useState<TableRow[]>([
    { id: '1', col1: 'Row 1, Col 1', col2: 'Row 1, Col 2', isEditing: false },
    { id: '2', col1: 'Row 2, Col 1', col2: 'Row 2, Col 2', isEditing: false }
  ]);
  
  // State for tracking edited values
  const [editedValues, setEditedValues] = useState<{ [key: string]: { col1: string; col2: string } }>({});
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };
  
  const handleInputChange = (rowId: string, field: 'col1' | 'col2', value: string) => {
    // Update the edited values
    setEditedValues(prev => ({
      ...prev,
      [rowId]: {
        ...prev[rowId],
        [field]: value
      }
    }));
  };
  
  const startEditing = (rowId: string) => {
    // Set the row to editing mode
    setRows(rows.map(row => 
      row.id === rowId 
        ? { ...row, isEditing: true } 
        : row
    ));
    
    // Initialize edited values with current values
    setEditedValues(prev => ({
      ...prev,
      [rowId]: {
        col1: rows.find(row => row.id === rowId)?.col1 || '',
        col2: rows.find(row => row.id === rowId)?.col2 || ''
      }
    }));
  };
  
  const saveRow = (rowId: string) => {
    // Update the row with edited values
    setRows(rows.map(row => 
      row.id === rowId 
        ? { 
            ...row, 
            col1: editedValues[rowId]?.col1 || row.col1,
            col2: editedValues[rowId]?.col2 || row.col2,
            isEditing: false,
            isNew: false
          } 
        : row
    ));
    
    // Clear edited values for this row
    const newEditedValues = { ...editedValues };
    delete newEditedValues[rowId];
    setEditedValues(newEditedValues);
  };
  
  const deleteRow = (rowId: string) => {
    // Remove the row
    setRows(rows.filter(row => row.id !== rowId));
    
    // Clear edited values for this row if any
    const newEditedValues = { ...editedValues };
    delete newEditedValues[rowId];
    setEditedValues(newEditedValues);
  };
  
  const addNewRow = () => {
    const newRowId = `new-${Date.now()}`;
    const newRow: TableRow = {
      id: newRowId,
      col1: '',
      col2: '',
      isEditing: true,
      isNew: true
    };
    
    setRows([...rows, newRow]);
    
    // Initialize edited values for the new row
    setEditedValues(prev => ({
      ...prev,
      [newRowId]: {
        col1: '',
        col2: ''
      }
    }));
  };

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
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="w-full md:w-auto">
              <button 
                onClick={addNewRow}
                className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 font-medium"
              >
                Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Header 1</th>
                  <th className="px-4 py-3">Header 2</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">
                      <input 
                        type="text" 
                        value={row.isEditing ? (editedValues[row.id]?.col1 || '') : row.col1} 
                        onChange={(e) => handleInputChange(row.id, 'col1', e.target.value)}
                        disabled={!row.isEditing}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 disabled:dark:bg-gray-800" 
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input 
                        type="text" 
                        value={row.isEditing ? (editedValues[row.id]?.col2 || '') : row.col2} 
                        onChange={(e) => handleInputChange(row.id, 'col2', e.target.value)}
                        disabled={!row.isEditing}
                        className="w-full border border-gray-300 rounded-lg px-2 py-1 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:bg-gray-100 disabled:dark:bg-gray-800" 
                      />
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      {row.isEditing ? (
                        <button 
                          onClick={() => saveRow(row.id)}
                          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 font-medium"
                        >
                          Save
                        </button>
                      ) : (
                        <button 
                          onClick={() => startEditing(row.id)}
                          className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 font-medium"
                        >
                          Edit
                        </button>
                      )}
                      <button 
                        onClick={() => deleteRow(row.id)}
                        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr className="border-b dark:border-gray-700">
                    <td colSpan={3} className="px-4 py-3 text-center">
                      No data available. Click "Add Row" to add data.
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

export default EditableDataTable;