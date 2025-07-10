import React from "react";

interface PaginationDotProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const PaginationDot: React.FC<PaginationDotProps> = ({ active = false, onClick, className = "" }) => (
  <button
    type="button"
    aria-label="Go to slide"
    onClick={onClick}
    className={`w-3 h-3 rounded-full transition-colors duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-primary-400 ${
      active ? "bg-primary-500" : "bg-gray-300 hover:bg-primary-200"
    } ${className}`}
  />
);

export default PaginationDot;
