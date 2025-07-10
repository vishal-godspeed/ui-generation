import React from "react";

interface FieldWrapperProps {
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, helper, error, children, className = "" }) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    {label && <label className="block text-gray-700 font-medium mb-1">{label}</label>}
    {children}
    {helper && !error && <span className="text-xs text-gray-400 mt-1">{helper}</span>}
    {error && <span className="text-xs text-error-600 mt-1">{error}</span>}
  </div>
);

export default FieldWrapper;
