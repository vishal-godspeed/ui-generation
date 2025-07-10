import React, { useState } from 'react';

interface PricingPlan {
  name: string;
  prices: {
    monthly: number;
    annual: number;
  };
  features: {
    category: string;
    items: Array<{
      text: string;
      boosted?: boolean;
    }>;
  }[];
}

const FeatureListPricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Lite',
      prices: { monthly: 9, annual: 6.3 },
      features: [
        {
          category: 'Formula Generators',
          items: [
            { text: 'Unlimited generations' },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        },
        {
          category: 'Data Analyzer',
          items: [
            { text: '250 messages' },
            { text: '50MB file upload limit' },
            { text: 'Data connectors access' },
            { text: 'Query one file in a single chat' }
          ]
        },
        {
          category: 'AI in Spreadsheets',
          items: [
            { text: '500 automations' },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        }
      ]
    },
    {
      name: 'Pro',
      prices: { monthly: 15, annual: 10.5 },
      features: [
        {
          category: 'Formula Generators',
          items: [
            { text: 'Unlimited generations' },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        },
        {
          category: 'Data Analyzer',
          items: [
            { text: 'Unlimited messages', boosted: true },
            { text: '100MB file upload limit', boosted: true },
            { text: 'Data connectors access' },
            { text: 'Query multiple files in a single chat', boosted: true }
          ]
        },
        {
          category: 'AI in Spreadsheets',
          items: [
            { text: '500 automations', boosted: true },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        }
      ]
    },
    {
      name: 'Premium',
      prices: { monthly: 30, annual: 21 },
      features: [
        {
          category: 'Formula Generators',
          items: [
            { text: 'Unlimited generations' },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        },
        {
          category: 'Data Analyzer',
          items: [
            { text: 'Unlimited messages', boosted: true },
            { text: '150MB file upload limit', boosted: true },
            { text: 'Data connectors access' },
            { text: 'Query multiple files in a single chat', boosted: true }
          ]
        },
        {
          category: 'AI in Spreadsheets',
          items: [
            { text: '20,000 automations', boosted: true },
            { text: 'Access to add-ins in Excel & Google Sheets' }
          ]
        }
      ]
    }
  ];

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual);
  };

  return (
    <div className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-primary-500 font-semibold tracking-widest mb-2">PRICING</div>
          <h2 className="text-4xl font-bold font-heading mb-4">Choose the plan that fits your needs</h2>
          <div className="inline-flex bg-white rounded-lg shadow p-1">
            <button 
              className={`px-6 py-2 rounded-lg font-medium ${
                !isAnnual ? 'text-primary-500 bg-white' : 'text-gray-600 bg-gray-100'
              }`}
              onClick={() => handleToggle(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-lg font-medium ${
                isAnnual ? 'text-primary-500 bg-white' : 'text-gray-600 bg-gray-100'
              }`}
              onClick={() => handleToggle(true)}
            >
              Annually <span className="ml-2 text-xs text-success-600 font-semibold">Save 30%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-white rounded-2xl shadow-lg p-8 flex flex-col border transition-all duration-300 ${
                hoveredCard === index 
                  ? 'border-primary-500 shadow-2xl scale-105 z-10' 
                  : 'border-gray-200'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4">
                <div className="text-lg font-semibold mb-2">{plan.name}</div>
                <div className="text-3xl font-bold mb-2">
                  ${isAnnual ? plan.prices.annual : plan.prices.monthly}
                  <span className="text-base font-medium">/mo</span>
                </div>
              </div>
              
              <button 
                className={`btn w-full mb-4 ${
                  index === 1 
                    ? '' 
                    : 'border border-primary-500 text-primary-500 bg-white hover:bg-primary-100'
                }`}
              >
                Buy Plan
              </button>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <img src="/images/visa.svg" alt="Visa" className="h-6"/>
                <img src="/images/mastercard.svg" alt="Mastercard" className="h-6"/>
                <img src="/images/gpay.svg" alt="GPay" className="h-6"/>
                <img src="/images/paypal.svg" alt="PayPal" className="h-6"/>
                <img src="/images/applepay.svg" alt="Apple Pay" className="h-6"/>
              </div>
              
              {plan.features.map((featureCategory, catIndex) => (
                <div key={catIndex} className={catIndex < plan.features.length - 1 ? 'mb-4' : ''}>
                  <div className="font-semibold mb-2">{featureCategory.category}</div>
                  <ul className="space-y-2 text-sm">
                    {featureCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="text-success-600 mr-2">&#10003;</span> 
                        {item.text}
                        {item.boosted && (
                          <span className="ml-2 text-xs text-primary-500 font-semibold bg-primary-100 px-2 py-0.5 rounded">
                            Boosted
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureListPricing;