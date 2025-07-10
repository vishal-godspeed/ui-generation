import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = "",
}) => {
  const checkboxId = id || `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <label htmlFor={checkboxId} className="text-sm font-medium text-gray-900 dark:text-gray-100 select-none">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
