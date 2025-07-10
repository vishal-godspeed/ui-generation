import React from "react";

interface ListItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, icon, badge, className = "" }) => (
  <li className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition ${className}`}>
    {icon && <span className="text-primary-500">{icon}</span>}
    <span className="flex-1 text-gray-900 dark:text-white">{children}</span>
    {badge && <span className="ml-auto">{badge}</span>}
  </li>
);

export default ListItem;
