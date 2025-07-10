import React from "react";

interface CardTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, icon, className = "" }) => (
  <div className={`flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-2 ${className}`}>
    {icon && <span className="text-primary-500">{icon}</span>}
    <span>{children}</span>
  </div>
);

export default CardTitle;
