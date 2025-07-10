import React, { useState } from 'react';

interface SidebarProps {
  darkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode = false }) => {
  const [mini, setMini] = useState(false);
  const [dropdownPages, setDropdownPages] = useState(false);
  const [dropdownSales, setDropdownSales] = useState(false);
  const [dropdownAuth, setDropdownAuth] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setMini(!mini);
  };

  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        onClick={toggleMobileSidebar}
        type="button" 
        className={`inline-flex items-center p-2 mt-2 ml-3 text-sm ${
          darkMode ? 'text-gray-400 hover:bg-gray-700 focus:ring-gray-600' : 'text-gray-500 hover:bg-gray-100 focus:ring-gray-200'
        } rounded-lg sm:hidden focus:outline-none focus:ring-2`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-40 ${mini ? 'w-20' : 'w-64'} h-screen transition-transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`} 
        aria-label="Sidenav"
      >
        <div className={`overflow-y-auto py-5 px-3 h-full ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r`}>
          {/* Toggle mini sidebar button */}
          <div className="flex justify-end mb-4">
            <button 
              onClick={toggleSidebar}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {mini ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
                </svg>
              )}
            </button>
          </div>
          
          <ul className="space-y-2">
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                } group`}
              >
                <svg 
                  aria-hidden="true" 
                  className={`w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                {!mini && <span className="ml-3">Overview</span>}
              </a>
            </li>
            
            <li>
              <button 
                type="button" 
                className={`flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-75 group ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                }`} 
                onClick={() => setDropdownPages(!dropdownPages)}
              >
                <svg 
                  aria-hidden="true" 
                  className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
                </svg>
                {!mini && (
                  <>
                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Pages</span>
                    <svg 
                      className={`w-6 h-6 transition-transform ${dropdownPages ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </>
                )}
              </button>
              {(!mini || (mini && dropdownPages)) && (
                <ul className={`${dropdownPages ? 'block' : 'hidden'} py-2 space-y-2`}>
                  <li>
                    <a 
                      href="#" 
                      className={`flex items-center p-2 ${mini ? '' : 'pl-11'} w-full text-base font-normal rounded-lg transition duration-75 group ${
                        darkMode 
                          ? 'text-white hover:bg-gray-700' 
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {mini ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      ) : (
                        "Settings"
                      )}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={`flex items-center p-2 ${mini ? '' : 'pl-11'} w-full text-base font-normal rounded-lg transition duration-75 group ${
                        darkMode 
                          ? 'text-white hover:bg-gray-700' 
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {mini ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        </svg>
                      ) : (
                        "Kanban"
                      )}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className={`flex items-center p-2 ${mini ? '' : 'pl-11'} w-full text-base font-normal rounded-lg transition duration-75 group ${
                        darkMode 
                          ? 'text-white hover:bg-gray-700' 
                          : 'text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {mini ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      ) : (
                        "Calendar"
                      )}
                    </a>
                  </li>
                </ul>
              )}
            </li>
            
            {/* Messages with notification badge */}
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 text-base font-normal rounded-lg ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                } group`}
              >
                <svg 
                  aria-hidden="true" 
                  className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                  <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                {!mini && (
                  <>
                    <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
                    <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                      6
                    </span>
                  </>
                )}
                {mini && (
                  <span className="absolute top-0 right-0 inline-flex justify-center items-center w-4 h-4 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                    6
                  </span>
                )}
              </a>
            </li>
          </ul>
          
          {/* Bottom section */}
          <ul className={`pt-5 mt-5 space-y-2 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 text-base font-normal rounded-lg transition duration-75 ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                } group`}
              >
                <svg 
                  aria-hidden="true" 
                  className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                {!mini && <span className="ml-3">Docs</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 text-base font-normal rounded-lg transition duration-75 ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                } group`}
              >
                <svg 
                  aria-hidden="true" 
                  className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
                {!mini && <span className="ml-3">Components</span>}
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className={`flex items-center p-2 text-base font-normal rounded-lg transition duration-75 ${
                  darkMode 
                    ? 'text-white hover:bg-gray-700' 
                    : 'text-gray-900 hover:bg-gray-100'
                } group`}
              >
                <svg 
                  aria-hidden="true" 
                  className={`flex-shrink-0 w-6 h-6 transition duration-75 ${
                    darkMode 
                      ? 'text-gray-400 group-hover:text-white' 
                      : 'text-gray-400 group-hover:text-gray-900'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path>
                </svg>
                {!mini && <span className="ml-3">Help</span>}
              </a>
            </li>
          </ul>
        </div>
        
        {/* Bottom footer */}
        <div className={`hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } z-20 border-r`}>
          <a 
            href="#" 
            className={`inline-flex justify-center p-2 rounded cursor-pointer ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-600' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg 
              aria-hidden="true" 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className={`inline-flex justify-center p-2 rounded cursor-pointer ${
              darkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-600' 
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <svg 
              aria-hidden="true" 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;