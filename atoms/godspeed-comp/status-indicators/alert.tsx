import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type AlertType = "success" | "error" | "info" | "warning";

const typeMap: Record<AlertType, string> = {
  success: "bg-green-50 text-green-800 border-green-200",
  error: "bg-red-50 text-red-800 border-red-200",
  info: "bg-blue-50 text-blue-800 border-blue-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
};

const iconMap: Record<AlertType, JSX.Element> = {
  success: (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ),
  error: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  info: (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
  ),
  warning: (
    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

interface AlertProps {
  type?: AlertType;
  message: string;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({ type = "info", message, onClose, className = "" }) => (
  <div className={`flex items-start gap-3 border-l-4 rounded-md p-4 ${typeMap[type]} ${className}`}> 
    <span className="mt-0.5">{iconMap[type]}</span>
    <div className="flex-1 text-sm font-medium">{message}</div>
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        aria-label="Close alert"
      >
        <XMarkIcon className="w-4 h-4 text-gray-400 hover:text-gray-700" />
      </button>
    )}
  </div>
);

export default Alert;
