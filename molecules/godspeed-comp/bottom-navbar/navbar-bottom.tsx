import React from "react";

const navItems = [
  {
    label: "Home",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <path d="M3 10.75L12 4l9 6.75V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.75z" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#EAF3FF"/>
        <path d="M9 22V12h6v10" stroke="#4F8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: true,
  },
  {
    label: "Quiz",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2" fill="#F5F5F5"/>
        <path d="M12 8v4" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="16" r="1" fill="#888"/>
        <path d="M15 9l-3 3-3-3" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    active: false,
  },
  {
    label: "Know More",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2" fill="#F5F5F5"/>
        <circle cx="12" cy="16" r="1" fill="#888"/>
        <path d="M12 8v4" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    active: false,
  },
  {
    label: "Profile",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2" fill="#F5F5F5"/>
        <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    active: false,
  },
];

const NavbarBottom: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-md rounded-2xl mx-2 mb-2 p-2 flex justify-around items-center max-w-xl mx-auto" style={{boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
      {navItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center flex-1">
          <div>
            {item.icon}
          </div>
          <span className={`mt-1 text-sm font-medium ${item.active ? 'text-blue-500' : 'text-gray-500'}`}>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

export default NavbarBottom; 