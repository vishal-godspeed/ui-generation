import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqAccordion: React.FC = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data
  const faqItems: FaqItem[] = [
    {
      question: "What is your platform about?",
      answer: "Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact our support team via the contact form or email us directly at support@example.com."
    },
    {
      question: "Can I use the platform for free?",
      answer: "Yes, we offer a free plan with limited features. You can upgrade anytime for more functionality."
    }
  ];

  // Toggle accordion item
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen">
      <section className="min-h-screen w-full flex items-center justify-center px-2 sm:px-6 md:px-12 bg-[#F6F7FB]">
        <div className="w-full max-w-2xl bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 rounded-2xl shadow-lg p-2 sm:p-10 flex items-center justify-center">
          <div className="bg-white/80 rounded-2xl p-6 sm:p-10 shadow-md relative overflow-hidden w-full">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
                Our platform is built to help you work smarter, not harder. It adapts to your needs and supports your goals. Make the most of every feature.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button 
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                  >
                    {item.question}
                    <svg 
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div 
                    className={`px-6 pb-4 text-gray-700 ${openIndex === index ? 'block' : 'hidden'}`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqAccordion;