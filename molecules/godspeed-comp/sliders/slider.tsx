import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

interface SlideItem {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Slider: React.FC = () => {
  const slides: SlideItem[] = [
    { id: 0, image: '/images/simg1.jpg', title: 'Ulli Top', price: 145.00 },
    { id: 1, image: '/images/simg2.jpg', title: 'Hao Earrings', price: 25.00 },
    { id: 2, image: '/images/simg3.webp', title: 'Diam Gauri Dress', price: 185.00 },
    { id: 3, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80', title: 'Kiu Earrings', price: 135.00 },
    { id: 4, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', title: 'Lina Dress', price: 210.00 },
    { id: 5, image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80', title: 'Mira Top', price: 99.00 },
    { id: 6, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', title: 'Rhea Earrings', price: 55.00 },
    { id: 7, image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80', title: 'Zara Dress', price: 175.00 },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="w-full min-h-screen max-w-full mx-auto bg-[#f7f5f2] flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 text-xs text-black">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-widest">S O R</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>
            <select className="bg-transparent outline-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <a href="#" className="hover:underline">My Account</a>
            <button>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3z"/>
              </svg>
            </button>
          </div>
        </header>
        
        {/* Title */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">New Arrivals</h1>
          <p className="text-gray-500 text-base">We aren't traditional, but we honor traditions</p>
        </div>
        
        {/* Swiper Slider */}
        <div className="flex-1 flex flex-col items-center justify-start w-full px-2 sm:px-4 md:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="max-w-xs sm:max-w-sm md:max-w-md">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-56 sm:h-72 md:h-80 object-cover object-center"
                    />
                    <div className="p-4">
                      <div className="font-medium">{slide.title}</div>
                      <div className="text-gray-500 text-sm">${slide.price.toFixed(2)}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: auto;
          margin: 0 15px;
        }
        
        .swiper-slide img {
          display: block;
          width: 100%;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          background-color: white;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
          color: #333;
        }
        
        .swiper-pagination-bullet {
          background-color: #333;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Slider;