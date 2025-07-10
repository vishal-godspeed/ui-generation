import React from "react";

interface LabelPillProps {
  label: string;
  color?: string;
  icon?: React.ReactNode;
  className?: string;
}

const LabelPill: React.FC<LabelPillProps> = ({ label, color = "bg-gray-200 text-gray-700", icon, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${color} ${className}`}>
    {icon && <span className="mr-1.5">{icon}</span>}
    {label}
  </span>
);

export default LabelPill; 