import React from "react";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastIconProps {
  type?: ToastType;
  size?: number;
  className?: string;
}

const iconMap = {
  success: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01" /></svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
};

const colorMap = {
  success: "text-green-500 bg-green-100",
  error: "text-red-500 bg-red-100",
  info: "text-blue-500 bg-blue-100",
  warning: "text-yellow-500 bg-yellow-100",
};

const ToastIcon: React.FC<ToastIconProps> = ({ type = "info", size = 24, className = "" }) => (
  <span
    className={`inline-flex items-center justify-center rounded-full ${colorMap[type]} ${className}`}
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    {iconMap[type]}
  </span>
);

export default ToastIcon;
