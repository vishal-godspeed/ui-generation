import React from 'react';

interface NotificationItem {
  id: string;
  message: string;
  time: string;
  type: 'info' | 'success' | 'error';
}

interface NotificationPreviewProps {
  notifications?: NotificationItem[];
  title?: string;
}

const NotificationPreview: React.FC<NotificationPreviewProps> = ({
  notifications = [
    {
      id: '1',
      message: 'System update available',
      time: 'Just now',
      type: 'info'
    },
    {
      id: '2',
      message: 'Backup completed successfully',
      time: '5 min ago',
      type: 'success'
    },
    {
      id: '3',
      message: 'Error: Unable to sync files',
      time: '10 min ago',
      type: 'error'
    }
  ],
  title = 'Preview Notifications'
}) => {
  const getIcon = (type: 'info' | 'success' | 'error') => {
    switch (type) {
      case 'info':
        return (
          <svg 
            className="w-6 h-6 text-blue-500 mr-3" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 12v2.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        );
      case 'success':
        return (
          <svg 
            className="w-6 h-6 text-green-500 mr-3" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case 'error':
        return (
          <svg 
            className="w-6 h-6 text-red-500 mr-3" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center p-4 border-b">
        <span className="font-semibold text-lg">{title}</span>
      </div>
      <ul className="divide-y divide-gray-200">
        {notifications.map(notification => (
          <li key={notification.id} className="flex items-center p-4">
            {getIcon(notification.type)}
            <div className="flex-1">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-400">{notification.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPreview;