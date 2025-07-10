import React, { useState } from 'react';

interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationDynamicProps {
  initialNotifications?: Notification[];
  onMarkAllRead?: () => void;
  onMarkAsRead?: (id: string) => void;
}

const NotificationDynamic: React.FC<NotificationDynamicProps> = ({
  initialNotifications = [
    {
      id: '1',
      message: 'New comment on your post',
      time: '2 min ago',
      read: false
    },
    {
      id: '2',
      message: 'Your profile was updated',
      time: '10 min ago',
      read: true
    },
    {
      id: '3',
      message: 'New follower: Jane Doe',
      time: '1 hour ago',
      read: false
    }
  ],
  onMarkAllRead,
  onMarkAsRead
}) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const handleMarkAllRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true
    }));
    setNotifications(updatedNotifications);
    
    if (onMarkAllRead) {
      onMarkAllRead();
    }
  };

  const handleMarkAsRead = (id: string) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id 
        ? { ...notification, read: true } 
        : notification
    );
    setNotifications(updatedNotifications);
    
    if (onMarkAsRead) {
      onMarkAsRead(id);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <span className="font-semibold text-lg">Notifications</span>
        <button 
          onClick={handleMarkAllRead}
          className="text-blue-500 hover:underline text-sm"
        >
          Mark all as read
        </button>
      </div>
      <ul id="notificationList" className="divide-y divide-gray-200">
        {notifications.map(notification => (
          <li 
            key={notification.id} 
            className={`flex items-start p-4 ${!notification.read ? 'bg-blue-50' : ''}`}
          >
            <span 
              className={`inline-block w-3 h-3 ${
                notification.read ? 'bg-gray-300' : 'bg-blue-500'
              } rounded-full mt-2 mr-3`}
            />
            <div className="flex-1">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <span className="text-xs text-gray-400">{notification.time}</span>
            </div>
            <button 
              className="ml-2 text-gray-400 hover:text-gray-700" 
              title="Mark as read"
              onClick={() => handleMarkAsRead(notification.id)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationDynamic;