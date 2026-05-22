"use client"
import React from 'react';
import { Car, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Banner() {

  const carSlides = [
    {
      url: "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1632&auto=format&fit=crop",
      alt: "Dream Car 1"
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1632&auto=format&fit=crop",
      alt: "Dream Car 2"
    },
    {
      url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1632&auto=format&fit=crop",
      alt: "Dream Car 3"
    }
  ];

  return (
    <section className="relative min-h-[100vh] w-full text-white flex items-center overflow-hidden px-6 md:px-16 py-12 group">
      

      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
          }}
          loop={true}
          className="w-full h-full"
        >
          {carSlides.map((slide, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <img 
                  className='w-full h-full object-cover'
                  src={slide.url} 
                  alt={slide.alt} 
                />
    
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 md:from-black/90 md:via-black/60 md:to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <button className="prev-btn absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-gray-700 text-white hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronLeft size={24} />
        </button>
        <button className="next-btn absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-gray-700 text-white hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <ChevronRight size={24} />
        </button>
      </div>


      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
   
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Drive Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500">
              Dream Car
            </span>{' '}
            Today
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
            Luxury, comfort and performance all in one platform. Book the perfect car for every journey.
          </p>


          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] text-sm md:text-base">
              Explore Cars
            </button>
            <button className="px-6 py-3 bg-transparent border border-gray-400 hover:border-white text-white font-medium rounded-lg transition-all text-sm md:text-base backdrop-blur-sm">
              Become a Host
            </button>
          </div>
        </div>

        <div className="flex justify-start lg:justify-end w-full lg:mt-32">
          <div className="w-full max-w-[480px] bg-gray-950/70 backdrop-blur-md border border-gray-800/80 rounded-xl p-4 grid grid-cols-3 gap-2 shadow-2xl">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center p-2 border-r border-gray-800/80 last:border-none">
              <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                <Car size={16} />
                <span className="font-bold text-sm md:text-base text-white">500+</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 whitespace-nowrap">Cars Available</p>
            </div>


            <div className="flex flex-col items-center justify-center text-center p-2 border-r border-gray-800/80 last:border-none">
              <div className="flex items-center gap-1.5 text-yellow-500 mb-1">
                <Users size={16} />
                <span className="font-bold text-sm md:text-base text-white">10K+</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 whitespace-nowrap">Happy Customers</p>
            </div>


            <div className="flex flex-col items-center justify-center text-center p-2 last:border-none">
              <div className="flex items-center gap-1.5 text-cyan-400 mb-1">
                <Star size={16} className="fill-cyan-400" />
                <span className="font-bold text-sm md:text-base text-white">4.9</span>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 whitespace-nowrap">Rating</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

