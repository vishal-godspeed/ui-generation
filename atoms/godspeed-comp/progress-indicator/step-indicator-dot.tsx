import React from "react";

interface StepIndicatorDotProps {
  active?: boolean;
  size?: number;
  color?: string;
  className?: string;
}

const StepIndicatorDot: React.FC<StepIndicatorDotProps> = ({
  active = false,
  size = 12,
  color = "bg-primary-500",
  className = "",
}) => (
  <span
    className={`inline-block rounded-full transition-colors duration-200 ${active ? color : "bg-gray-300"} ${className}`}
    style={{ width: size, height: size }}
    aria-label={active ? "Current step" : "Step"}
  />
);

export default StepIndicatorDot; 