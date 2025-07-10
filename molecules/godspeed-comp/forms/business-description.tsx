import React, { useState } from 'react';

interface BusinessDescriptionFormData {
  description: string;
  sector: string;
}

const BusinessDescription: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<BusinessDescriptionFormData>({
    description: '',
    sector: ''
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
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
        <h2 className="text-2xl font-semibold text-gray-800">Business Description</h2>
        <p className="text-gray-500 text-sm">
          Provide a detailed description of your business and select your sector.
        </p>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-gray-700 font-medium mb-1">
              Detailed business description
            </span>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={5} 
              placeholder="Describe your business, its mission, and what makes it unique..." 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          
          <label className="block">
            <span className="block text-gray-700 font-medium mb-1">
              Business sector
            </span>
            <select 
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select sector</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </label>
          
          <button 
            type="submit" 
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Save & Continue
            <span className="material-icons text-white text-base">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessDescription;