import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  id,
  className = "",
}) => {
  const switchId = id || `toggle-switch-${label?.replace(/\s+/g, "-").toLowerCase() || Math.random()}`;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${checked ? 'bg-primary-600' : 'bg-gray-300'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`}
        />
      </button>
      {label && (
        <label htmlFor={switchId} className="text-sm font-medium text-gray-900 dark:text-gray-100 select-none cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

export default ToggleSwitch;
