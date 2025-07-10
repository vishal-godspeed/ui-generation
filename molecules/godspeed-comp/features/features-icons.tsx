import React from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
}

const FeaturesIcons: React.FC = () => {
  // Feature items data
  const features: FeatureItem[] = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4"/>
        </svg>
      ),
      title: "Seamless Sync",
      description: "Keep your data up-to-date across all devices automatically.",
      bgColorClass: "bg-primary-100",
      textColorClass: "text-primary-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7"/>
        </svg>
      ),
      title: "Instant Analytics",
      description: "Get real-time insights to make smarter business decisions.",
      bgColorClass: "bg-success-100",
      textColorClass: "text-success-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 16h-1v-4h-1m1-4h.01"/>
        </svg>
      ),
      title: "Live Support",
      description: "Our team is available 24/7 to help you with any issues.",
      bgColorClass: "bg-info-100",
      textColorClass: "text-info-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Flexible Plans",
      description: "Choose a plan that fits your needs and scale as you grow.",
      bgColorClass: "bg-warning-100",
      textColorClass: "text-warning-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      ),
      title: "Trusted Security",
      description: "Your information is safe with our advanced security protocols.",
      bgColorClass: "bg-secondary-100",
      textColorClass: "text-secondary-600"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
      ),
      title: "No Contracts",
      description: "Enjoy the freedom of a contract-free experience.",
      bgColorClass: "bg-error-100",
      textColorClass: "text-error-600"
    }
  ];

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Why Choose Us?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform is packed with features designed to help you succeed, each represented by a unique icon for quick recognition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${feature.bgColorClass} ${feature.textColorClass} rounded-full p-6 mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesIcons;