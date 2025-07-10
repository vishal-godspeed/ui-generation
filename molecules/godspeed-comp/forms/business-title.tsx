import React, { useState } from 'react';

interface BusinessTitleFormData {
  title: string;
  description: string;
}

const BusinessTitle: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<BusinessTitleFormData>({
    title: '',
    description: ''
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 md:p-10 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-gray-800">Business Title</h2>
        <p className="text-gray-500 text-sm">
          Enter the official name and a short description of your business.
        </p>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-gray-700 font-medium mb-1">
              Your business title
            </span>
            <input 
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g. Acme Corporation" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </label>
          
          <label className="block">
            <span className="block text-gray-700 font-medium mb-1">
              Short description
            </span>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={2} 
              placeholder="Briefly describe your business" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          
          <button 
            type="submit" 
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Next
            <span className="material-icons text-white text-base">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessTitle;