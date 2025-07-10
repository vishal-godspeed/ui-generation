import React from "react";

interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  error,
  id,
  className = "",
}) => {
  const inputId = id || `text-input-${label?.replace(/\s+/g, "-").toLowerCase() || Math.random()}`;
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-800 bg-white/80 placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400 transition dark:bg-gray-700 dark:text-white dark:border-gray-600 ${error ? 'border-red-500' : ''} disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextInput;
