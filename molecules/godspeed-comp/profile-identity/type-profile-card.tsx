import React from "react";

interface TypeProfileCardProps {
  type: string;
  description: string;
  image: string;
  actions?: React.ReactNode;
  className?: string;
}

const TypeProfileCard: React.FC<TypeProfileCardProps> = ({
  type,
  description,
  image,
  actions,
  className = "",
}) => (
  <div className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center ${className}`}>
    <img src={image} alt={type} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-gradient-to-tr from-purple-400 via-pink-400 to-yellow-400" />
    <h3 className="text-xl font-bold mb-2">{type}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    {actions && <div className="flex gap-2 justify-center">{actions}</div>}
  </div>
);

export default TypeProfileCard; 