import React, { useState } from 'react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  billingPeriod: string;
  price: number;
  features: PlanFeature[];
  ctaText: string;
  highlighted?: boolean;
}

const PricingBasic: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans: PricingPlan[] = [
    {
      name: 'Beginner Plan',
      billingPeriod: 'Billed Monthly',
      price: 100,
      features: [
        { text: 'Group Classes (1 per week)', included: true },
        { text: 'Nutrition Coaching (basic tips)', included: true },
        { text: 'Gym Access (Only Limited)', included: true },
        { text: 'Personal Training Sessions', included: false },
        { text: 'Recovery Zone Access', included: false }
      ],
      ctaText: 'I am Getting Started'
    },
    {
      name: 'Pro Plan',
      billingPeriod: 'Billed Monthly',
      price: 300,
      features: [
        { text: 'Group Classes (1 per week)', included: true },
        { text: 'Nutrition Coaching (basic tips)', included: true },
        { text: 'Gym Access', included: true },
        { text: 'Personal Training Sessions', included: true },
        { text: 'Recovery Zone Access', included: true }
      ],
      ctaText: 'Let\'s Train Like a Pro',
      highlighted: true
    },
    {
      name: 'Intermediate Plan',
      billingPeriod: 'Billed Monthly',
      price: 230,
      features: [
        { text: 'Group Classes (1 per week)', included: true },
        { text: 'Nutrition Coaching (basic tips)', included: true },
        { text: 'Gym Access (Only Limited)', included: true },
        { text: 'Personal Training Sessions', included: true },
        { text: 'Recovery Zone Access', included: false }
      ],
      ctaText: 'Ready To Go Harder'
    }
  ];

  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full mx-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 shadow-2xl">
        <div className="mb-10">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Let's Find the Plan That Works for You</h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Whether you're easing into fitness or pushing for peak performance, we've got a membership that fits your goals, time, and lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-50 border-2 border-yellow-400 shadow-2xl'
                  : `bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 shadow-xl transition-all duration-300 ${
                      hoveredPlan === index 
                        ? 'bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-50 border-yellow-400 shadow-2xl text-black'
                        : ''
                    } group`
              } p-8 flex flex-col`}
              style={plan.highlighted ? { boxShadow: '0 0 60px 0 rgba(255, 215, 80, 0.15)' } : {}}
              onMouseEnter={() => !plan.highlighted && setHoveredPlan(index)}
              onMouseLeave={() => !plan.highlighted && setHoveredPlan(null)}
            >
              <h3 className={`text-xl font-semibold ${
                plan.highlighted 
                  ? 'text-black' 
                  : `text-white ${hoveredPlan === index ? 'group-hover:text-black' : ''} transition-colors duration-300`
              } mb-1`}>
                {plan.name}
              </h3>
              
              <span className={`text-sm ${
                plan.highlighted 
                  ? 'text-gray-700' 
                  : `text-gray-400 ${hoveredPlan === index ? 'group-hover:text-gray-700' : ''} transition-colors duration-300`
              } mb-4`}>
                {plan.billingPeriod}
              </span>
              
              <div className={`text-3xl font-bold ${
                plan.highlighted 
                  ? 'text-black' 
                  : `text-white ${hoveredPlan === index ? 'group-hover:text-black' : ''} transition-colors duration-300`
              } mb-2`}>
                ${plan.price} 
                <span className={`text-base font-normal ${
                  plan.highlighted 
                    ? 'text-gray-700' 
                    : `text-gray-400 ${hoveredPlan === index ? 'group-hover:text-gray-700' : ''} transition-colors duration-300`
                }`}>
                  /Month
                </span>
              </div>
              
              <ul className={`${
                plan.highlighted 
                  ? 'text-gray-900' 
                  : `text-gray-200 ${hoveredPlan === index ? 'group-hover:text-gray-900' : ''} transition-colors duration-300`
              } space-y-2 mb-6 mt-4`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className={`${
                      feature.included 
                        ? plan.highlighted 
                          ? 'text-green-600' 
                          : `text-green-500 ${hoveredPlan === index ? 'group-hover:text-green-600' : ''} transition-colors duration-300`
                        : plan.highlighted 
                          ? 'text-red-600' 
                          : `text-red-500 ${hoveredPlan === index ? 'group-hover:text-green-600' : ''} transition-colors duration-300`
                    } mr-2`}>
                      {feature.included ? '✓' : '✗'}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <button className={`btn ${
                plan.highlighted 
                  ? 'bg-secondary-500 hover:bg-secondary-700 text-white' 
                  : `bg-muted-500 ${hoveredPlan === index ? 'group-hover:bg-secondary-500 group-hover:text-white' : ''} hover:bg-secondary-700 transition-all duration-300`
              } mt-auto`}>
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingBasic;