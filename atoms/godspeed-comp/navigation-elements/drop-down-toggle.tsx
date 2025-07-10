import React from "react";

interface DropDownToggleProps {
  label: string;
  open?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const DropDownToggle: React.FC<DropDownToggleProps> = ({ label, open = false, icon, onClick, className = "" }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${open ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "text-gray-700 hover:bg-gray-100 hover:text-primary-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-300"} ${className}`}
      aria-expanded={open}
      aria-haspopup="menu"
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      <svg className={`ml-2 w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

export default DropDownToggle;
