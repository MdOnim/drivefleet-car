"use client";

import { MapPin } from "lucide-react";

const CarCard = ({ car }) => {
  const { availabilitystatus, carname, cartype, description, imageurl, pickuplocation, rentprice, seatcapacity, _id } = car;

  return (

    <div className="group w-full h-full bg-[#0b1119] border border-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col">
      <div className="relative p-3 overflow-hidden shrink-0">
        <img
          className="w-full h-52 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
          src={imageurl}
          alt={carname}
        />
        <span className="absolute top-5 left-5 bg-cyan-950/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {cartype}
        </span>
      </div>

      
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
             
              <h2 className="text-white text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
                {carname}
              </h2>
              <div className="flex items-end gap-1 mt-2">
                <span className="text-cyan-400 text-2xl font-extrabold tracking-tight">
                  ${rentprice}
                </span>
                <span className="text-gray-400 text-sm mb-1">
                  /day
                </span>
              </div>
            </div>
            <p className={`text-sm mt-2 font-medium shrink-0 ${availabilitystatus === "available" ? "text-emerald-400" : "text-rose-400"}`}>
              {availabilitystatus === "available" ? "Available" : "Unavailable"}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-5 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="line-clamp-1">{pickuplocation}</span>
          </div>
        </div>

    
        <button className="w-full mt-6 border border-cyan-500/30 text-cyan-400 py-3 rounded-2xl font-semibold bg-cyan-950/20 hover:bg-cyan-500 hover:text-slate-950 active:scale-98 transition-all duration-150 cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;