import React from "react";

type LoaderSize = "sm" | "md" | "lg";
type LoaderColor = "primary" | "success" | "error" | "info" | "warning" | "gray";

const sizeMap: Record<LoaderSize, string> = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-10 h-10 border-4",
};

const colorMap: Record<LoaderColor, string> = {
  primary: "border-primary-500 border-t-transparent",
  success: "border-green-500 border-t-transparent",
  error: "border-red-500 border-t-transparent",
  info: "border-blue-500 border-t-transparent",
  warning: "border-yellow-500 border-t-transparent",
  gray: "border-gray-400 border-t-transparent",
};

interface LoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = "md", color = "primary", className = "" }) => (
  <span
    className={`inline-block animate-spin rounded-full border-solid ${sizeMap[size]} ${colorMap[color]} ${className}`}
    role="status"
    aria-label="Loading"
  />
);

export default Loader;
