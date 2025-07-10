import React from "react";

interface HelperTextProps {
  children: React.ReactNode;
  color?: "default" | "success" | "info" | "warning";
  className?: string;
}

const colorMap = {
  default: "text-gray-400",
  success: "text-green-600",
  info: "text-blue-600",
  warning: "text-yellow-600",
};

const HelperText: React.FC<HelperTextProps> = ({ children, color = "default", className = "" }) => (
  <span className={`text-xs mt-1 ${colorMap[color]} ${className}`}>{children}</span>
);

export default HelperText;
