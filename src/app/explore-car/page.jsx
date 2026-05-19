import CarCard from '@/components/CarCard';
import { CardRoot } from '@heroui/react';
import React from 'react';

const ExploreCarPage = async () => {
    const res = await fetch('http://localhost:5000/cars');
    const cars = await res.json();
    console.log(cars);
   




    return (
        <div className="container mx-auto py-8 ">
            <h1>This is explore car page </h1>

            <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4 " >
              {
                cars.map(car=> <CarCard car={car} key={car._id} ></CarCard> )
              }
            </div>
        </div>
    );
};

export default ExploreCarPage;