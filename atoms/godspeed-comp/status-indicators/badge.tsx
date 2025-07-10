import React from "react";

export type BadgeColor =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "gray"
  | "primary"
  | "secondary";

const colorMap: Record<BadgeColor, string> = {
  success: "bg-green-100 text-green-700",
  error: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  info: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

interface BadgeProps {
  label: string;
  color?: BadgeColor;
  dot?: boolean;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, color = "gray", dot = false, className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[color]} ${className}`}
  >
    {dot && <span className={`w-2 h-2 mr-1 rounded-full ${colorMap[color].split(" ")[1]}`} />}
    {label}
  </span>
);

export default Badge;
