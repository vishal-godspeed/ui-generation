import React from "react";

interface TextAreaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  id?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  rows = 4,
  disabled = false,
  error,
  id,
  className = "",
}) => {
  const textAreaId = id || `textarea-${label?.replace(/\s+/g, "-").toLowerCase() || Math.random()}`;
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={textAreaId} className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <textarea
        id={textAreaId}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 bg-white/80 placeholder-gray-400 font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none dark:bg-gray-700 dark:text-white dark:border-gray-600 ${error ? 'border-red-500' : ''} disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
