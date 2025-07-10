import React, { useState } from 'react';

interface NavLink {
  text: string;
  href: string;
}

const Header6: React.FC = () => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links
  const navLinks: NavLink[] = [
    { text: 'Product', href: '#' },
    { text: 'Pricing', href: '#' },
    { text: 'Templates', href: '#' },
    { text: 'Library', href: '#' }
  ];

  return (
    <header className="w-full bg-white rounded-2xl shadow-md px-8 py-4 flex items-center justify-between mt-4 relative">
      <div className="flex items-center">
        <div className="mr-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#EEF2FF"/>
            <path d="M20 10L28 30H12L20 10Z" fill="#4F46E5"/>
          </svg>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="text-gray-800 font-medium hover:text-indigo-600 transition"
          >
            {link.text}
          </a>
        ))}
      </nav>
      
      {/* Hamburger Button (Mobile Only) */}
      <button 
        className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        aria-label="Open menu"
        onClick={toggleMobileMenu}
        aria-expanded={isMobileMenuOpen}
      >
        <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Mobile Menu Dropdown */}
      <div 
        className={`mobile-menu absolute top-[calc(100%-1rem)] left-0 w-full bg-white rounded-b-2xl shadow-md z-20 ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } flex-col items-center py-4 md:hidden`}
      >
        <nav className="flex flex-col space-y-4 w-full items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-800 font-medium hover:text-indigo-600 transition"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header6;