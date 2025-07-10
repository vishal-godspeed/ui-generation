import React from 'react';

const Hero6: React.FC = () => {
  return (
    <section className="w-full px-8 md:px-16 py-24 flex flex-col md:flex-row items-stretch justify-between gap-x-20 rounded-2xl shadow-md mt-8 hero-section">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug hero-title">
          We engage positive communication<br />of recipients with your brand.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed hero-subtitle">
          Collaborative workspaces for prospects, customers, investors, and partners.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full">
          <img 
            src="/images/image3.png" 
            alt="Hero Illustration" 
            className="w-32 h-32 rounded-xl shadow-md mb-6 object-cover" 
          />
          <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center w-full justify-center">
            <a 
              href="#" 
              className="bg-orange-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-700 transition shadow-sm hero-cta w-full sm:w-auto text-center"
            >
              Start free trial
            </a>
            <a 
              href="#" 
              className="flex items-center bg-white text-orange-600 font-semibold px-5 py-2 rounded-md border border-orange-600 hover:bg-orange-50 transition shadow-sm hero-link w-full sm:w-auto text-center"
              style={{ textDecoration: 'none' }}
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero6;