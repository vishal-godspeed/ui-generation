import React, { useState, useEffect } from 'react';

interface NewsItem {
  title: string;
  time: string;
}

interface NewsFeedWidgetProps {
  darkMode?: boolean;
}

const NewsFeedWidget: React.FC<NewsFeedWidgetProps> = ({ darkMode = false }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    { title: 'Apple launches new product line, stock surges', time: '2 min ago' },
    { title: 'Tesla reports record quarterly earnings', time: '5 min ago' },
    { title: 'Google announces AI breakthrough', time: '10 min ago' },
    { title: 'Amazon expands into new markets', time: '15 min ago' },
    { title: 'Microsoft acquires gaming company', time: '20 min ago' }
  ]);

  // Function to add a new news item
  const addNewsItem = () => {
    const now = new Date();
    const newItem = {
      title: 'Breaking News: Market Update ' + now.toLocaleTimeString(),
      time: 'Just now'
    };
    
    setNewsItems(prevItems => {
      const updatedItems = [newItem, ...prevItems];
      // Keep only the latest 6 items
      if (updatedItems.length > 6) {
        return updatedItems.slice(0, 6);
      }
      return updatedItems;
    });
  };

  // Add a new news item every 7 seconds
  useEffect(() => {
    const intervalId = setInterval(addNewsItem, 7000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={`bg-white ${darkMode ? 'dark:bg-gray-800' : ''} rounded-2xl shadow-xl p-8 max-w-lg w-full mx-auto transition-colors duration-300`}>
      <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        News Feed
      </h3>
      <ul className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} text-sm`}>
        {newsItems.map((item, index) => (
          <li key={index} className="py-2 flex items-center justify-between">
            <div>
              <a href="#" className={`font-medium hover:underline ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                {item.title}
              </a>
              <div className="text-xs text-gray-500">
                {item.time}
              </div>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-blue-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsFeedWidget;