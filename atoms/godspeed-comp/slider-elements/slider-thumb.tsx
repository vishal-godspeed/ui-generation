import React from "react";

interface SliderThumbProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

const SliderThumb: React.FC<SliderThumbProps> = ({ size = "md", color = "bg-primary-500", className = "", children }) => (
  <div
    className={`rounded-full shadow ${sizeMap[size]} ${color} border-2 border-white focus:outline-none focus:ring-2 focus:ring-primary-400 transition ${className}`}
    tabIndex={0}
    role="slider"
    aria-valuenow={0}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    {children}
  </div>
);

export default SliderThumb;
