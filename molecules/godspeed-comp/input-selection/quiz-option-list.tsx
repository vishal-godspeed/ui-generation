import React from "react";

interface QuizOptionListProps {
  options: string[];
  selected?: number;
  onSelect?: (index: number) => void;
  className?: string;
}

const QuizOptionList: React.FC<QuizOptionListProps> = ({ options, selected, onSelect, className = "" }) => (
  <div className={`flex flex-col gap-3 ${className}`} role="listbox">
    {options.map((option, idx) => (
      <button
        key={option}
        type="button"
        className={`w-full border rounded-xl px-4 py-2 text-base text-gray-800 transition focus:outline-none focus:ring-2 focus:ring-primary-400 ${selected === idx ? "border-primary-500 bg-primary-50" : "border-gray-300 bg-white hover:bg-gray-50"}`}
        aria-selected={selected === idx}
        onClick={() => onSelect && onSelect(idx)}
        role="option"
      >
        {option}
      </button>
    ))}
  </div>
);

export default QuizOptionList; 