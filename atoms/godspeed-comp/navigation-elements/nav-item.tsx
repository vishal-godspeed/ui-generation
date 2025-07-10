import React from "react";

interface NavItemProps {
  label: string;
  href?: string;
  active?: boolean;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, active = false, icon, badge, className = "" }) => {
  const baseClass =
    "flex items-center px-4 py-2 text-base font-medium rounded-lg transition-colors" +
    (active
      ? " bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
      : " text-gray-700 hover:bg-gray-100 hover:text-primary-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-300");
  return (
    <li className={className}>
      {href ? (
        <a href={href} className={baseClass} aria-current={active ? "page" : undefined}>
          {icon && <span className="mr-2">{icon}</span>}
          <span>{label}</span>
          {badge && <span className="ml-auto">{badge}</span>}
        </a>
      ) : (
        <span className={baseClass} aria-current={active ? "page" : undefined}>
          {icon && <span className="mr-2">{icon}</span>}
          <span>{label}</span>
          {badge && <span className="ml-auto">{badge}</span>}
        </span>
      )}
    </li>
  );
};

export default NavItem;
