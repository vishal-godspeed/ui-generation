import React, { useState } from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
}

interface TabData {
  name: string;
  features: FeatureItem[];
}

const FeaturesTabs: React.FC = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState<number>(0);

  // Tab data
  const tabs: TabData[] = [
    {
      name: "Productivity",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
          ),
          title: "Task Automation",
          description: "Automate repetitive tasks and save valuable time.",
          bgColorClass: "bg-primary-100",
          textColorClass: "text-primary-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7"/>
            </svg>
          ),
          title: "Smart Scheduling",
          description: "Plan and organize your work with intelligent tools.",
          bgColorClass: "bg-success-100",
          textColorClass: "text-success-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 16h-1v-4h-1m1-4h.01"/>
            </svg>
          ),
          title: "Analytics Dashboard",
          description: "Visualize your progress and performance at a glance.",
          bgColorClass: "bg-info-100",
          textColorClass: "text-info-600"
        }
      ]
    },
    {
      name: "Collaboration",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 12l2 2 4-4"/>
            </svg>
          ),
          title: "Team Chat",
          description: "Communicate instantly with your team in real time.",
          bgColorClass: "bg-secondary-100",
          textColorClass: "text-secondary-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          ),
          title: "File Sharing",
          description: "Share documents and files securely with your team.",
          bgColorClass: "bg-warning-100",
          textColorClass: "text-warning-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7"/>
            </svg>
          ),
          title: "Collaborative Notes",
          description: "Work together on notes and ideas in real time.",
          bgColorClass: "bg-success-100",
          textColorClass: "text-success-600"
        }
      ]
    },
    {
      name: "Security",
      features: [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ),
          title: "Data Encryption",
          description: "All your data is encrypted for maximum security.",
          bgColorClass: "bg-error-100",
          textColorClass: "text-error-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4"/>
            </svg>
          ),
          title: "Access Control",
          description: "Manage who can view and edit your information.",
          bgColorClass: "bg-primary-100",
          textColorClass: "text-primary-600"
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 16h-1v-4h-1m1-4h.01"/>
            </svg>
          ),
          title: "Audit Logs",
          description: "Track all activity for compliance and peace of mind.",
          bgColorClass: "bg-info-100",
          textColorClass: "text-info-600"
        }
      ]
    }
  ];

  // Handle tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <section className="w-full max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Explore Our Features</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Switch between tabs to discover the full range of features our platform offers.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-md font-semibold text-gray-700 bg-white shadow transition ${
                activeTab === index ? 'bg-blue-50 text-blue-600' : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Tab Contents */}
        <div>
          {tabs.map((tab, tabIndex) => (
            <div
              key={tabIndex}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8 ${
                activeTab === tabIndex ? 'block' : 'hidden'
              }`}
            >
              {tab.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6">
                  <div className={`${feature.bgColorClass} ${feature.textColorClass} rounded-full p-4 mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 mb-2">{feature.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturesTabs;