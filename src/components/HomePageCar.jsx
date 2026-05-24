

import { CardRoot } from '@heroui/react';
import React from 'react';
import CarCard from './CarCard';


const HomePageCar = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars`);
    const cars = await res.json();

    return (
<div className="container mx-auto py-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wider text-center px-2">
  Available Cars
</h2>

<p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-6 md:mb-10 px-4">
  Find and book your perfect car for any journey
</p>

    <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
      {cars.slice(0, 8).map((car) => (
        <CarCard car={car} key={car._id}></CarCard>
      ))}
    </div>
  
</div>
    );
};

export default HomePageCar;