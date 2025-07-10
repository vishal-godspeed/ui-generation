import React from 'react';

const Hero7: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center rounded-2xl shadow-md mt-8 overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://www.w3schools.com/howto/rain.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
      ></video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 py-24 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug hero-title">
          We engage positive communication<br />of recipients with your brand.
        </h1>
        <p className="text-lg leading-relaxed hero-subtitle mt-4 mb-8 max-w-2xl mx-auto">
          Collaborative workspaces for prospects, customers, investors, and partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center">
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

export default Hero7;