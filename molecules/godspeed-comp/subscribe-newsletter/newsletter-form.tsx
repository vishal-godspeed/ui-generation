import React, { useState } from 'react';

interface NewsletterFormProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  note?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  title = 'Subscribe Newsletter',
  description = 'You will never miss our podcasts, latest news etc. Our newsletter is once a week, every Thursday.',
  placeholder = 'user@yoursite.com',
  buttonText = 'Subscribe',
  note = 'We promise not to spam you!',
  onSubscribe = (email) => console.log(`Subscribed with email: ${email}`)
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubscribe(email);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/60 via-blue-300/60 to-purple-300/60 opacity-80 blur-md -z-10"></div>
      <div className="relative w-full max-w-md mx-auto p-6 sm:p-10 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 flex flex-col items-center">
        {/* Envelope Icon */}
        <div className="mb-6 mt-2">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="16" fill="#FFE6E0"/>
            <g>
              <rect x="14" y="22" width="36" height="24" rx="4" fill="#FF5C8D"/>
              <path d="M18 26l14 12 14-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="32" cy="32" r="6" fill="#fff"/>
              <path d="M32 36c2.21 0 4-1.79 4-4a4 4 0 10-8 0c0 2.21 1.79 4 4 4z" fill="#FF5C8D"/>
            </g>
          </svg>
        </div>
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">{title}</h2>
        
        {/* Description */}
        <p className="text-base text-gray-800 mb-6 text-center leading-relaxed">{description}</p>
        
        {/* Input and Button */}
        <form className="w-full flex flex-col sm:flex-row items-center gap-4 mb-4" onSubmit={handleSubmit}>
          <input 
            type="email" 
            required 
            placeholder={placeholder} 
            className="flex-1 rounded-full px-5 py-3 bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-800 placeholder-gray-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className={`rounded-full ${
              isSubmitting 
                ? 'bg-pink-300' 
                : 'bg-pink-400 hover:bg-pink-500'
            } text-white font-semibold px-5 py-3 transition-all duration-200 w-full sm:w-auto`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </button>
        </form>
        
        {/* Note */}
        <p className="text-gray-400 text-sm text-center">{note}</p>
      </div>
    </div>
  );
};

export default NewsletterForm;