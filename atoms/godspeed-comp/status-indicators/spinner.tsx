import React from "react";

type SpinnerSize = "sm" | "md" | "lg";
type SpinnerColor = "primary" | "success" | "error" | "info" | "warning" | "gray";

const sizeMap: Record<SpinnerSize, string> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-10 h-10",
};

const colorMap: Record<SpinnerColor, string> = {
  primary: "text-primary-500",
  success: "text-green-500",
  error: "text-red-500",
  info: "text-blue-500",
  warning: "text-yellow-500",
  gray: "text-gray-400",
};

interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = "md", color = "primary", className = "" }) => (
  <svg
    className={`animate-spin ${sizeMap[size]} ${colorMap[color]} ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    role="status"
    aria-label="Loading"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

export default Spinner;
