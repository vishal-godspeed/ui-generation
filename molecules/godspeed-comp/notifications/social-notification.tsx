import React from 'react';

interface SocialNotificationProps {
  variant?: 'light' | 'dark';
  title?: string;
  userName?: string;
  userAvatar?: string;
  isOnline?: boolean;
  action?: string;
  comment?: string;
  time?: string;
  onClose?: () => void;
}

const SocialNotification: React.FC<SocialNotificationProps> = ({
  variant = 'light',
  title = 'New Notification',
  userName = 'John Doe',
  userAvatar = 'https://i.pravatar.cc/300',
  isOnline = true,
  action = 'reacted to your comment:',
  comment = '"This is the comment..."',
  time = 'a few seconds ago',
  onClose = () => {}
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className="w-full h-auto relative">
      <div 
        className={`${
          isDark 
            ? 'bg-gray-900 text-white' 
            : 'bg-white'
        } px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-0.5 transition duration-100 ease-linear`}
      >
        <div className="w-full flex items-center justify-between">
          <span className={`font-medium text-sm ${isDark ? '' : 'text-gray-400'}`}>
            {title}
          </span>
          <button 
            onClick={onClose}
            className={`-mr-1 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-600'
            } h-5 w-5 rounded-full flex justify-center items-center`}
          >
            <svg 
              className="h-2 w-2 fill-current items-center" 
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
          </button>
        </div>
        <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
          <div className="relative flex flex-shrink-0 items-end">
            <img 
              className="h-16 w-16 rounded-full" 
              src={userAvatar} 
              alt={userName}
            />    
            {isOnline && (
              <span 
                className={`absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 ${
                  isDark ? 'border-gray-900' : 'border-white'
                }`}
              />
            )}
          </div>
          <div className={`ml-${isDark ? '3.5' : '3'}`}>
            <span className="font-semibold tracking-tight text-xs">{userName}</span>
            <span className="text-xs leading-none opacity-50">{action}</span>
            <p className="text-xs leading-4 pt-2 italic opacity-70">{comment}</p>
            <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialNotification;