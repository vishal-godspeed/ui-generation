import React from "react";

interface TableRowProps {
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}

const TableRow: React.FC<TableRowProps> = ({ children, highlight = false, className = "" }) => (
  <tr className={`${highlight ? "bg-primary-50 dark:bg-primary-900" : ""} border-b dark:border-gray-700 transition-colors ${className}`}>
    {children}
  </tr>
);

export default TableRow;
