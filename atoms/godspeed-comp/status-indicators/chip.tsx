import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import type { BadgeColor } from "./badge";

const colorMap: Record<BadgeColor, string> = {
  success: "bg-green-100 text-green-700",
  error: "bg-red-100 text-red-700",
  warning: "bg-yellow-100 text-yellow-700",
  info: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
  primary: "bg-primary-100 text-primary-700",
  secondary: "bg-secondary-100 text-secondary-700",
};

interface ChipProps {
  label: string;
  color?: BadgeColor;
  onClose?: () => void;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ label, color = "gray", onClose, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]} ${className}`}>
    {label}
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        className="ml-2 p-0.5 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label="Remove"
      >
        <XMarkIcon className="w-4 h-4 text-gray-400 hover:text-gray-700" />
      </button>
    )}
  </span>
);

export default Chip;
