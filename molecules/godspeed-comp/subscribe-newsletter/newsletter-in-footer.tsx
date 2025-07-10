import React, { useState } from 'react';

interface NewsletterInFooterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterInFooter: React.FC<NewsletterInFooterProps> = ({
  title = 'Subscribe to our newsletter',
  description = 'Get updates and news straight to your inbox.',
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
    <div className="min-h-screen flex flex-col justify-end bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <footer className="w-full bg-gray-900/90 backdrop-blur-md border-t border-gray-700 py-10 px-4 flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1 text-center">{title}</h2>
          <p className="text-gray-300 text-sm mb-4 text-center">{description}</p>
          <form className="w-full flex flex-col sm:flex-row items-center gap-3" onSubmit={handleSubmit}>
            <input 
              type="email" 
              required 
              placeholder={placeholder} 
              className="flex-1 rounded-full px-5 py-3 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white placeholder-gray-400 transition"
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
      </footer>
    </div>
  );
};

export default NewsletterInFooter;