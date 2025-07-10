import React from "react";

interface FormLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({ children, htmlFor, required = false, className = "" }) => (
  <label htmlFor={htmlFor} className={`block text-gray-700 font-medium mb-1 ${className}`}>
    {children}
    {required && <span className="text-error-600 ml-1">*</span>}
  </label>
);

export default FormLabel;
