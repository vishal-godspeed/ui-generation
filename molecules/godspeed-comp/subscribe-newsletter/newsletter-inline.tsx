import React, { useState } from 'react';

interface NewsletterInlineProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterInline: React.FC<NewsletterInlineProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates in your inbox.',
  placeholder = 'Your email address',
  buttonText = 'Subscribe',
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
      <div className="relative w-full max-w-2xl mx-auto p-4 sm:p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center">{title}</h2>
        <p className="text-base text-gray-800 mb-4 text-center">{description}</p>
        <form className="w-full flex flex-col sm:flex-row items-center gap-3" onSubmit={handleSubmit}>
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
            } text-white font-semibold px-6 py-3 transition-all duration-200 w-full sm:w-auto`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterInline;