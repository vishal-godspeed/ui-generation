import React, { useState } from 'react';

interface BusinessAddressFormData {
  country: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipcode: string;
  sameAsBusiness: boolean;
}

const BusinessAddress: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<BusinessAddressFormData>({
    country: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    sameAsBusiness: true
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      sameAsBusiness: e.target.checked
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
        <h2 className="text-2xl font-semibold text-gray-800">About your business</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <span className="block text-gray-700 font-medium mb-1">Business address</span>
            <span className="block text-xs text-gray-400 mb-1">Helpful description</span>
            <div className="flex flex-col gap-2 mt-1">
              <select 
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
                {/* Add more countries as needed */}
              </select>
              
              <input 
                type="text" 
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                placeholder="Address line 1" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              
              <input 
                type="text" 
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                placeholder="Address line 2" 
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              
              <div className="flex flex-col md:flex-row gap-2">
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City" 
                  className="min-w-0 basis-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                
                <input 
                  type="text" 
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State" 
                  className="min-w-0 basis-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                
                <input 
                  type="text" 
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  placeholder="Zipcode" 
                  className="min-w-0 basis-1/3 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <input 
              type="checkbox" 
              id="same-address" 
              checked={formData.sameAsBusiness}
              onChange={handleCheckboxChange}
              className="accent-blue-600" 
            />
            <label htmlFor="same-address" className="text-gray-700">Same as business address</label>
            <span className="block text-xs text-gray-400 ml-2">Helpful description</span>
          </div>
          
          <button 
            type="submit" 
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Continue
            <span className="material-icons text-white text-base">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusinessAddress;