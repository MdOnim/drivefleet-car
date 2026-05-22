

import { CardRoot } from '@heroui/react';
import React from 'react';
import CarCard from './CarCard';


const HomePageCar = async () => {
    const res = await fetch('http://localhost:5000/cars');
    const cars = await res.json();

   




    return (
<div className="container mx-auto py-8">

    <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cars.slice(0, 8).map((car) => (
        <CarCard car={car} key={car._id}></CarCard>
      ))}
    </div>
  
</div>
    );
};

export default HomePageCar;