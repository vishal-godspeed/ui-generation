import React from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqCards: React.FC = () => {
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
    },
    {
      question: "Is my data secure?",
      answer: "We take data security seriously and use industry-standard measures to protect your information."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our support team is available 24/7 to assist you with any questions or issues."
    }
  ];

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
            
            <div className="flex flex-col gap-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqCards;