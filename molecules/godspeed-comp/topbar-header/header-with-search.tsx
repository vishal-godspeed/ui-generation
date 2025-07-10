import React from 'react';

const HeaderWithSearch = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white rounded-2xl shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 rounded-xl p-2">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
        </div>
        <span className="font-bold text-lg">Kretya Studio</span>
      </div>
      {/* Search */}
      <div className="flex-1 mx-8">
        <div className="relative w-full max-w-md">
          <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none" />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
        </div>
      </div>
      {/* User Profile */}
      <div className="flex items-center gap-2 min-w-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-gray-200 flex-shrink-0" />
        <div className="text-xs min-w-0">
          <div className="font-semibold truncate">Asal Design</div>
          <div className="text-gray-400 truncate">asal@design.com</div>
        </div>
        <svg className="w-5 h-5 text-gray-400 ml-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/></svg>
      </div>
    </div>
  );
};

export default HeaderWithSearch;