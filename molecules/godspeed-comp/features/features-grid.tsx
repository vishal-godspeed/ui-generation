import React from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
}

const FeaturesGrid: React.FC = () => {
  // Feature items data
  const features: FeatureItem[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4"/>
        </svg>
      ),
      title: "Easy Integration",
      description: "Connect with your favorite tools and platforms in just a few clicks.",
      bgColorClass: "bg-primary-100",
      textColorClass: "text-primary-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      ),
      title: "Reliable Security",
      description: "Your data is protected with industry-leading security measures.",
      bgColorClass: "bg-secondary-100",
      textColorClass: "text-secondary-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7"/>
        </svg>
      ),
      title: "Fast Performance",
      description: "Experience lightning-fast load times and smooth interactions.",
      bgColorClass: "bg-success-100",
      textColorClass: "text-success-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M13 16h-1v-4h-1m1-4h.01"/>
        </svg>
      ),
      title: "24/7 Support",
      description: "Get help whenever you need it from our expert team.",
      bgColorClass: "bg-info-100",
      textColorClass: "text-info-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Customizable",
      description: "Easily tailor features to fit your unique business needs.",
      bgColorClass: "bg-warning-100",
      textColorClass: "text-warning-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
      ),
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises or extra charges.",
      bgColorClass: "bg-error-100",
      textColorClass: "text-error-600"
    }
  ];

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Our Features</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the powerful features that help you build, launch, and grow your business with ease.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
              <div className={`${feature.bgColorClass} ${feature.textColorClass} rounded-full p-4 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesGrid;