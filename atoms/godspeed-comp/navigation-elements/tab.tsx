import React from "react";

interface TabProps {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Tab: React.FC<TabProps> = ({ label, active = false, icon, onClick, className = "" }) => {
  const baseClass =
    "inline-flex items-center px-4 py-2 text-sm font-medium rounded-t-md transition-colors focus:outline-none" +
    (active
      ? " bg-white text-primary-600 shadow-md border-b-2 border-primary-600 dark:bg-gray-900 dark:text-primary-400"
      : " text-gray-500 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-primary-400");
  return (
    <button
      type="button"
      className={`${baseClass} ${className}`}
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Tab;
