import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 py-4 bg-white rounded-2xl shadow-md gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="bg-blue-500 rounded-xl p-2">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <span className="font-bold text-lg">Kretya Studio</span>
      </div>
      {/* Search */}
      <div className="w-full md:flex-1 mx-0 md:mx-8 order-3 md:order-none">
        <div className="relative w-full max-w-md hidden sm:block">
          <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none" />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
        </div>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-end">
        {/* Notification */}
        <button className="relative">
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/><path d="M6 22h12"/></svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 py-0.5 rounded-full text-white">21</span>
        </button>
        {/* Theme Toggle */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button className="px-3 py-1 rounded-lg text-gray-400 hover:bg-gray-200">Light</button>
          <button className="px-3 py-1 rounded-lg bg-gray-200 text-gray-700">Dark</button>
        </div>
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-gray-200" />
          <div className="text-xs">
            <div className="font-semibold">Asal Design</div>
            <div className="text-gray-400">asal@design.com</div>
          </div>
          <svg className="w-5 h-5 text-gray-400 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;