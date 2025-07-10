import React, { useState } from 'react';

interface FaqQuestion {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  questions: FaqQuestion[];
}

const FaqCategories: React.FC = () => {
  // FAQ data from script2.js
  const faqData: FaqCategory[] = [
    {
      category: 'General Questions',
      questions: [
        {
          q: 'Presented own highly to in offers surprise of ear chair?',
          a: 'Create text automations and flows based on custom prebuild audiences. Capture abandon carts. You cannot spend 2 months',
        },
        {
          q: 'The even a the man, used to and surprised that at incentive?',
          a: 'Our platform adapts to your workflow and helps you achieve more with less effort.',
        },
        {
          q: 'Dishonourable mellower and we their visuals theoretically produce?',
          a: 'Yes, you can customize the visuals to match your brand guidelines and preferences.',
        },
        {
          q: 'For structure seeing to a room as his right in?',
          a: 'Our flexible structure allows you to organize your workspace as you see fit.',
        },
        {
          q: 'The clear my a of from the reey time how new times because that?',
          a: 'You can track changes and updates in real time, ensuring you never miss important information.',
        },
      ],
    },
    {
      category: 'Support team',
      questions: [
        {
          q: 'How do I contact the support team?',
          a: 'You can reach our support team via email or live chat 24/7.',
        },
        {
          q: 'What is the response time?',
          a: 'Our average response time is under 2 hours during business days.',
        },
      ],
    },
    {
      category: 'Miscellaneous',
      questions: [
        {
          q: 'Can I use the platform for free?',
          a: 'Yes, we offer a free trial for all new users.',
        },
        {
          q: 'Is my data secure?',
          a: 'We use industry-standard encryption and security practices to protect your data.',
        },
      ],
    },
    {
      category: 'Donsectetur',
      questions: [
        {
          q: 'What integrations are available?',
          a: 'We support integrations with popular tools like Slack, Zapier, and more.',
        },
      ],
    },
    {
      category: 'Gabitasse',
      questions: [
        {
          q: 'How do I upgrade my plan?',
          a: 'Go to your account settings and select the plan you wish to upgrade to.',
        },
      ],
    },
  ];

  // State for active category and open question
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Handle category click
  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
    setOpenQuestion(null);
  };

  // Handle question click
  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <section className="min-h-screen w-full flex items-center justify-center px-2 sm:px-6 md:px-12 bg-[#F6F7FB]">
        <div className="w-full max-w-6xl bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 rounded-2xl shadow-lg p-2 sm:p-10 flex items-center justify-center">
          <div className="bg-white/80 rounded-2xl p-6 sm:p-10 shadow-md relative overflow-hidden w-full">
            {/* Decorative dots */}
            <span className="absolute top-4 left-4 w-5 h-5 bg-pink-400 rounded-full opacity-80 -z-10"></span>
            <span className="absolute top-4 right-4 w-5 h-5 bg-blue-300 rounded-full opacity-80 -z-10"></span>
            <span className="absolute bottom-4 left-1/2 w-5 h-5 bg-indigo-400 rounded-full opacity-80 -z-10" style={{ transform: 'translateX(-50%)' }}></span>
            <span className="absolute bottom-10 right-10 w-5 h-5 bg-orange-600 rounded-full opacity-80 -z-10"></span>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
                Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals. Make the most of every feature.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
              {/* Left: Categories */}
              <div className="flex flex-col gap-4 min-w-[160px] md:w-[340px]">
                {faqData.map((category, index) => (
                  <button
                    key={index}
                    className={`font-semibold rounded-md px-4 py-3 text-left transition-all ${
                      activeCategory === index
                        ? 'bg-white shadow-md text-gray-900'
                        : 'bg-white/80 text-gray-400'
                    }`}
                    onClick={() => handleCategoryClick(index)}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
              
              {/* Right: Questions */}
              <div className="flex-1">
                <div className="flex flex-col gap-4">
                  {faqData[activeCategory].questions.map((question, index) => (
                    <div key={index}>
                      {openQuestion === index ? (
                        <div className="bg-white rounded-xl shadow-md p-4 mb-2">
                          <div className="flex justify-between items-start">
                            <div className="font-semibold text-gray-900 text-base">{question.q}</div>
                            <button
                              className="ml-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                              onClick={() => setOpenQuestion(null)}
                            >
                              &times;
                            </button>
                          </div>
                          <div className="text-gray-700 text-sm mt-2">{question.a}</div>
                        </div>
                      ) : (
                        <button
                          className="w-full bg-white/80 rounded-xl shadow-sm p-4 flex justify-between items-center text-left transition-all group hover:bg-white"
                          onClick={() => handleQuestionClick(index)}
                        >
                          <span className="font-medium text-gray-900">{question.q}</span>
                          <span className="text-2xl text-gray-400 group-hover:text-gray-700 transition">+</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqCategories;