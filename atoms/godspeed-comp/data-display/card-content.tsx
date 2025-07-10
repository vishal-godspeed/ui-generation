import React from "react";

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
  <div className={`text-gray-700 dark:text-gray-300 text-base ${className}`}>{children}</div>
);

export default CardContent;
