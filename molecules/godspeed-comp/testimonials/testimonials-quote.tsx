import React from 'react';

interface TestimonialsQuoteProps {
  quote?: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
  rating?: number;
}

const TestimonialsQuote: React.FC<TestimonialsQuoteProps> = ({
  quote = "Xultions is a platform designed to help you build beautiful landing pages with ease, using modern UI components and best practices.",
  author = {
    name: "Alex Carter",
    role: "Product Designer, Xultions",
    avatar: "/images/image4.jpeg"
  },
  rating = 5
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40">
      <section className="w-full max-w-2xl mx-auto px-4 py-24 flex flex-col items-center justify-center">
        <div className="rounded-2xl shadow-lg p-10 border border-white/20 bg-gradient-to-br from-indigo-400/60 via-blue-300/60 to-purple-300/60 backdrop-blur-md flex flex-col items-center text-center">
          <div className="flex items-center mb-4 justify-center">
            <span className="flex text-yellow-400 text-2xl">
              {Array.from({ length: rating }).map((_, index) => (
                <span key={index}>★</span>
              ))}
            </span>
          </div>
          <blockquote className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 leading-relaxed">
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center mt-4">
            <img 
              src={author.avatar} 
              alt={author.name} 
              className="w-14 h-14 rounded-full border-2 border-white shadow mr-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/56';
              }}
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-lg">{author.name}</div>
              <div className="text-gray-700 text-sm">{author.role}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsQuote;