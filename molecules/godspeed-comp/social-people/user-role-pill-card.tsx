import React from "react";

interface UserRolePillCardProps {
  avatar: string;
  name: string;
  type: string;
  role: string;
  actions?: React.ReactNode;
  className?: string;
}

const UserRolePillCard: React.FC<UserRolePillCardProps> = ({
  avatar,
  name,
  type,
  role,
  actions,
  className = "",
}) => (
  <div className={`flex items-center bg-white rounded-xl shadow p-3 gap-3 ${className}`}>
    <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-primary-400" />
    <div className="flex-1 min-w-0">
      <div className="font-semibold text-gray-900 truncate">{name}</div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>{type}</span>
        <span className="inline-block bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full font-medium">{role}</span>
      </div>
    </div>
    {actions && <div className="flex gap-1">{actions}</div>}
  </div>
);

export default UserRolePillCard; 