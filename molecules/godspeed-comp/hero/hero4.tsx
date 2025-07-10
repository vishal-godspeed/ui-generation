import React from 'react';

const Hero4: React.FC = () => {
  return (
    <section className="w-full px-8 md:px-16 py-24 flex flex-col md:flex-row items-center justify-between gap-x-20 rounded-2xl shadow-md mt-8 hero-section">
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img 
          src="/images/image3.png" 
          alt="Hero Illustration" 
          className="w-full max-w-xl rounded-xl shadow-md" 
        />
      </div>
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug hero-title">
          We engage positive communication<br />of recipients with your brand.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed hero-subtitle">
          Collaborative workspaces for prospects, customers, investors, and partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 items-start sm:items-center">
          <a 
            href="#" 
            className="bg-orange-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-orange-700 transition shadow-sm hero-cta"
          >
            Start free trial
          </a>
          <a 
            href="#" 
            className="flex items-center bg-white text-orange-600 font-semibold px-5 py-2 rounded-md border border-orange-600 hover:bg-orange-50 transition shadow-sm hero-link"
            style={{ textDecoration: 'none' }}
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero4;