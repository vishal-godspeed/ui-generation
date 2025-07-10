import React from 'react';

const FooterMinimal: React.FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 min-h-screen flex flex-col justify-end">
      <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 py-6 px-4 rounded-t-2xl shadow-lg">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-gray-900 text-2xl font-semibold mb-2">Xultions.</span>
          <p className="text-gray-700 text-sm">&copy; {currentYear} Xultions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterMinimal;