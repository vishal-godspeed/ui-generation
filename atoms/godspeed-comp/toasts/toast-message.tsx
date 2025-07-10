import React from "react";
import ToastIcon, { ToastType } from "./toast-icon";

interface ToastMessageProps {
  message: string;
  type?: ToastType;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  className?: string;
}

const typeBgMap = {
  success: "bg-green-50 border-green-200",
  error: "bg-red-50 border-red-200",
  info: "bg-blue-50 border-blue-200",
  warning: "bg-yellow-50 border-yellow-200",
};

const ToastMessage: React.FC<ToastMessageProps> = ({
  message,
  type = "info",
  icon,
  actionLabel,
  onAction,
  onClose,
  className = "",
}) => (
  <div
    className={`flex items-start gap-3 px-4 py-3 rounded-xl border shadow-lg max-w-sm w-full ${typeBgMap[type]} ${className}`}
    role="alert"
    aria-live="polite"
  >
    <div className="pt-0.5">{icon ?? <ToastIcon type={type} />}</div>
    <div className="flex-1 text-sm text-gray-900">{message}</div>
    {actionLabel && (
      <button
        onClick={onAction}
        className="ml-2 px-3 py-1 rounded-lg bg-primary-500 text-white text-xs font-semibold hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
      >
        {actionLabel}
      </button>
    )}
    {onClose && (
      <button
        onClick={onClose}
        className="ml-2 text-gray-400 hover:text-gray-700 focus:outline-none"
        aria-label="Close notification"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    )}
  </div>
);

export default ToastMessage;
