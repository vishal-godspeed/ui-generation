import React, { useState } from 'react';

interface SidebarCollapsibleProps {
  darkMode?: boolean;
}

const SidebarCollapsible: React.FC<SidebarCollapsibleProps> = ({ darkMode = true }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div 
      id="sidebar" 
      className={`flex flex-col h-screen ${
        collapsed ? 'w-20' : 'w-72'
      } ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900 border-r border-gray-200'
      } rounded-2xl shadow-lg p-4 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-8 mt-2">
        <div className="bg-blue-500 rounded-xl p-2">
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        {!collapsed && (
          <span className="font-bold text-lg sidebar-label">Kretya Studio</span>
        )}
        <button 
          onClick={toggleSidebar}
          className={`${collapsed ? 'mx-auto' : 'ml-auto'} p-2 rounded ${
            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          }`}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <a 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              } transition`}
            >
              <span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
              </span>
              {!collapsed && <span className="sidebar-label">Home</span>}
            </a>
          </li>
          
          <li>
            <a 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              } relative`}
            >
              <span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M3 17a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              {!collapsed && (
                <>
                  <span className="sidebar-label">Activity</span>
                  <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full sidebar-label">
                    10
                  </span>
                </>
              )}
              {collapsed && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
                  10
                </span>
              )}
            </a>
          </li>
          
          <li>
            <a 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              } transition`}
            >
              <span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2"/>
                  <rect x="2" y="2" width="7" height="7" rx="2"/>
                </svg>
              </span>
              {!collapsed && <span className="sidebar-label">Task</span>}
            </a>
          </li>
          
          <li>
            <a 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              } transition`}
            >
              <span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M5.5 21a7.5 7.5 0 0 1 13 0"/>
                </svg>
              </span>
              {!collapsed && <span className="sidebar-label">Users</span>}
            </a>
          </li>
          
          <li>
            <a 
              href="#" 
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              } transition relative`}
            >
              <span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"/>
                  <path d="M6 22h12"/>
                </svg>
              </span>
              {!collapsed && (
                <>
                  <span className="sidebar-label">Notification</span>
                  <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full sidebar-label">
                    21
                  </span>
                </>
              )}
              {collapsed && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1.5 py-0.5 rounded-full">
                  21
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="mt-6 flex items-center justify-between gap-2">
        {!collapsed && (
          <div className={`flex gap-1 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          } rounded-lg p-1 sidebar-label`}>
            <button className={`px-3 py-1 rounded-lg ${
              darkMode 
                ? 'text-gray-400 hover:bg-gray-700' 
                : 'text-gray-500 hover:bg-gray-200'
            }`}>
              Light
            </button>
            <button className={`px-3 py-1 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              Dark
            </button>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="avatar" 
            className={`w-9 h-9 rounded-full border-2 ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          />
          {!collapsed && (
            <>
              <div className="text-xs sidebar-label">
                <div className="font-semibold">Asal Design</div>
                <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                  asal@design.com
                </div>
              </div>
              <svg 
                className={`w-5 h-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                } ml-1 sidebar-label`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path d="M17 16l4-4m0 0l-4-4m4 4H7"/>
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarCollapsible;