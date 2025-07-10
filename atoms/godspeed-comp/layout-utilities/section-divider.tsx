import React from "react";

interface SectionDividerProps {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ label, icon, className = "" }) => (
  <div className={`flex items-center w-full my-6 ${className}`} role="separator">
    <div className="flex-grow border-t border-gray-200" />
    {label && (
      <span className="mx-4 text-gray-500 text-sm flex items-center gap-1">
        {icon}
        {label}
      </span>
    )}
    <div className="flex-grow border-t border-gray-200" />
  </div>
);

export default SectionDivider; 