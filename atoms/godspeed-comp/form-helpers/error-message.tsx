import React from "react";

interface ErrorMessageProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children, icon, className = "" }) => (
  <span className={`flex items-center gap-1 text-xs text-error-600 mt-1 ${className}`} role="alert">
    {icon ?? (
      <svg className="w-4 h-4 text-error-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    )}
    {children}
  </span>
);

export default ErrorMessage;
