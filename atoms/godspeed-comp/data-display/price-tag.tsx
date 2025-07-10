import React from "react";

interface PriceTagProps {
  value: number | string;
  currency?: string;
  label?: string;
  className?: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ value, currency = "$", label, className = "" }) => (
  <div className={`inline-flex items-baseline gap-1 px-3 py-1 rounded-lg bg-primary-50 text-primary-700 font-bold text-lg dark:bg-primary-900 dark:text-primary-200 ${className}`}>
    <span className="text-base font-medium">{currency}</span>
    <span className="text-2xl font-bold">{value}</span>
    {label && <span className="ml-2 text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>}
  </div>
);

export default PriceTag;
