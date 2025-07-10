import React from "react";

interface MediaListCardProps {
  image: string;
  title: string;
  description: string;
  duration?: string;
  actions?: React.ReactNode;
  className?: string;
}

const MediaListCard: React.FC<MediaListCardProps> = ({
  image,
  title,
  description,
  duration,
  actions,
  className = "",
}) => (
  <div className={`flex gap-3 items-center bg-white rounded-xl shadow p-3 ${className}`}>
    <img src={image} alt={title} className="w-16 h-16 rounded-lg object-cover" />
    <div className="flex-1 min-w-0">
      <div className="font-semibold text-gray-900 truncate">{title}</div>
      <div className="text-xs text-gray-500 truncate">{description}</div>
      {duration && <div className="text-xs text-gray-400 mt-1">{duration}</div>}
    </div>
    {actions && <div className="flex gap-1">{actions}</div>}
  </div>
);

export default MediaListCard; 