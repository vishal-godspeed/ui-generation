import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  category: string;
  rating: number;
  joinDate: string;
  location: string;
  hours: string;
  price: string;
  priceUnit: string;
  imageSrc: string;
  onBooking?: () => void;
  onToggleFavorite?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  category,
  rating,
  joinDate,
  location,
  hours,
  price,
  priceUnit,
  imageSrc,
  onBooking = () => console.log('Booking clicked'),
  onToggleFavorite = () => console.log('Favorite toggled')
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Tall Card */}
        <div className="flex-1 flex">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col w-full h-full min-h-[500px] justify-between">
            <div className="relative h-56 md:h-72 w-full">
              <img src={imageSrc} alt={title} className="object-cover object-center w-full h-full" />
              <button 
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md"
                onClick={onToggleFavorite}
                aria-label="Toggle favorite"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-gray-900 leading-tight whitespace-nowrap">
                    {title} <span className="text-base font-normal text-gray-500">({subtitle})</span>
                  </h2>
                  <div className="text-gray-400 text-base mt-1 mb-2 whitespace-nowrap">{category}</div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-lg">{rating}</span>
                  <span className="text-gray-400 text-sm">/5</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-gray-600 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Joined {joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                  </svg>
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <span>{hours}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-gray-500 text-sm">
                  Start from <span className="text-black font-bold text-lg">{price} {priceUnit}</span>
                </div>
                <button 
                  className="px-8 py-2 rounded-full text-lg font-bold transition bg-[#FF7A2F] hover:bg-[#e8661a] text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A2F] focus:ring-opacity-50"
                  onClick={onBooking}
                >
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Two stacked cards (horizontal style) */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Horizontal Card Component (reused) */}
          <HorizontalServiceCard 
            title={title}
            subtitle={subtitle}
            category={category}
            rating={rating}
            joinDate={joinDate}
            location={location}
            hours={hours}
            price={price}
            priceUnit={priceUnit}
            imageSrc={imageSrc}
            onBooking={onBooking}
            onToggleFavorite={onToggleFavorite}
          />
          
          {/* Second Horizontal Card (could be different data in a real app) */}
          <HorizontalServiceCard 
            title={title}
            subtitle={subtitle}
            category={category}
            rating={rating}
            joinDate={joinDate}
            location={location}
            hours={hours}
            price={price}
            priceUnit={priceUnit}
            imageSrc={imageSrc}
            onBooking={onBooking}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

// Horizontal Card Component (extracted for reuse)
const HorizontalServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  category,
  rating,
  joinDate,
  location,
  hours,
  price,
  priceUnit,
  imageSrc,
  onBooking,
  onToggleFavorite
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row h-full min-h-[180px] items-center p-4 relative">
      <div className="relative h-32 w-40 flex-shrink-0 rounded-xl overflow-hidden">
        <img src={imageSrc} alt={title} className="object-cover object-center w-full h-full" />
        <button 
          className="absolute top-2 right-2 bg-white/80 rounded-full p-2 shadow-md"
          onClick={onToggleFavorite}
          aria-label="Toggle favorite"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col flex-1 justify-between pl-6 h-full">
        <div className="flex items-start justify-between w-full pr-36">
          <div>
            <h2 className="text-xl font-heading font-semibold text-gray-900 whitespace-nowrap">
              {title} <span className="text-base font-normal text-gray-500">({subtitle})</span>
            </h2>
            <div className="text-gray-400 text-base mb-1 whitespace-nowrap">{category}</div>
            <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg> 
                {joinDate}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 12.414a4 4 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" />
                </svg> 
                {location}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" />
                </svg> 
                {hours}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1 mb-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
              <span className="text-gray-700 font-medium text-lg">{rating}</span>
              <span className="text-gray-400 text-sm">/5</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col items-end">
          <div className="text-gray-500 text-xs mb-1">
            Start from <span className="text-black font-bold text-base">{price} {priceUnit}</span>
          </div>
          <button 
            className="px-5 py-1.5 rounded-full text-base font-bold transition bg-[#FF7A2F] hover:bg-[#e8661a] text-white shadow focus:outline-none focus:ring-2 focus:ring-[#FF7A2F] focus:ring-opacity-50 whitespace-nowrap"
            onClick={onBooking}
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Example usage component with default data
const ServiceCardExample: React.FC = () => {
  const serviceData = {
    title: "House Painting",
    subtitle: "Eco",
    category: "Design . Maintenance",
    rating: 4.6,
    joinDate: "Apr 21, 2024",
    location: "London",
    hours: "Sun-Fri 9:30 AM – 11 PM",
    price: "7",
    priceUnit: "$/H",
    imageSrc: "/images/img11.png"
  };

  return <ServiceCard {...serviceData} />;
};

export default ServiceCardExample;