import React from "react";

interface BreadcrumbItemProps {
  label: string;
  href?: string;
  active?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label, href, active = false, icon, className = "" }) => {
  const baseClass =
    "inline-flex items-center text-sm font-medium transition-colors" +
    (active
      ? " text-primary-600 dark:text-primary-400 cursor-default"
      : " text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400");
  return (
    <li className={`flex items-center ${className}`} aria-current={active ? "page" : undefined}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {href && !active ? (
        <a href={href} className={baseClass} tabIndex={0} aria-label={label}>
          {label}
        </a>
      ) : (
        <span className={baseClass}>{label}</span>
      )}
    </li>
  );
};

export default BreadcrumbItem;
