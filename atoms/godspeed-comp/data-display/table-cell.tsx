import React from "react";

interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  highlight?: boolean;
  className?: string;
}

const alignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const TableCell: React.FC<TableCellProps> = ({ children, align = "left", highlight = false, className = "" }) => (
  <td className={`px-4 py-2 ${alignMap[align]} ${highlight ? "bg-primary-50 dark:bg-primary-900" : ""} text-gray-900 dark:text-white ${className}`}>
    {children}
  </td>
);

export default TableCell;
