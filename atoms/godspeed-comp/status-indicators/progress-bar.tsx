import React from "react";

type ProgressBarColor = "primary" | "success" | "error" | "info" | "warning" | "gray";

const colorMap: Record<ProgressBarColor, string> = {
  primary: "bg-primary-500",
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
  gray: "bg-gray-400",
};

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: ProgressBarColor;
  label?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max = 100, color = "primary", label, className = "" }) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full ${className}`}>
      {label && <div className="mb-1 text-xs font-medium text-gray-700 flex justify-between"><span>{label}</span><span>{Math.round(percent)}%</span></div>}
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${colorMap[color]}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
