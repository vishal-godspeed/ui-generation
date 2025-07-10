import React, { useState } from 'react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  customImage?: string;
  customTitle?: string;
  customFeatures?: string[];
  customFormTitle?: React.ReactNode;
}

const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  customImage = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80',
  customTitle = "Let's create your account.",
  customFeatures = [
    'Register in minutes',
    'Easy setup, friendly support',
    'No contract, cancel anytime',
    'Sell in-store and on mobile'
  ],
  customFormTitle = <>Start your free <span className="text-green-600 font-bold">30 day trial</span> now.</>
}) => {
  const [formData, setFormData] = useState({
    storeName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    // After successful submission, you might want to close the modal
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#e6f6f2] rounded-2xl shadow-lg w-full max-w-2xl p-0 flex flex-col md:flex-row gap-0" id="trial-modal">
        {/* Left: Visual & Features */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-white rounded-l-2xl">
          <img 
            src={customImage} 
            alt="Register" 
            className="rounded-xl w-40 h-40 object-cover mb-4" 
            data-trial-image
          />
          <div className="text-gray-800 text-lg font-semibold mb-2" data-trial-title>
            {customTitle}
          </div>
          <ul className="text-gray-600 text-sm space-y-2" data-trial-features>
            {customFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right: Form */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="text-gray-700 text-base font-semibold mb-2" data-trial-form-title>
            {customFormTitle}
          </div>
          <form className="w-full flex flex-col gap-3" data-trial-form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="Store name" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone" 
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400" 
            />
            <button 
              type="submit" 
              className="w-full mt-2 py-3 rounded-xl bg-[#FFB300] hover:bg-yellow-400 text-white font-semibold text-lg transition"
            >
              START SELLING
            </button>
          </form>
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrialModal;