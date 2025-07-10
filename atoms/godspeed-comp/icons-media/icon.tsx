import React from "react";

interface IconProps {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
};

const Icon: React.FC<IconProps> = ({ icon, size = "md", color = "text-gray-500", label, className = "" }) => (
  <span
    className={`inline-flex items-center justify-center ${sizeMap[size]} ${color} ${className}`}
    role={label ? "img" : undefined}
    aria-label={label}
  >
    {icon}
  </span>
);

export default Icon;
