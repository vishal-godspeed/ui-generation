import React from "react";

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
  name: string;
  value: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  className = "",
}) => {
  const radioId = id || `radio-${name}-${value}`;
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <label htmlFor={radioId} className="text-sm font-medium text-gray-900 dark:text-gray-100 select-none">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
