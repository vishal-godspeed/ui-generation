import React from "react";

interface KPIValueProps {
  value: string | number;
  label: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

const trendMap = {
  up: "text-green-500",
  down: "text-red-500",
  neutral: "text-gray-400",
};

const trendIcon = {
  up: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
  ),
  down: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
  ),
  neutral: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
  ),
};

const KPIValue: React.FC<KPIValueProps> = ({ value, label, trend = "neutral", icon, className = "" }) => (
  <div className={`flex flex-col items-start gap-1 ${className}`}>
    <div className="flex items-center gap-2">
      {icon && <span className="text-primary-500">{icon}</span>}
      <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
      <span className={`ml-1 flex items-center ${trendMap[trend]}`}>{trendIcon[trend]}</span>
    </div>
    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</span>
  </div>
);

export default KPIValue;
