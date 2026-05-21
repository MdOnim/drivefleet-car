import { Calendar, MapPin } from "lucide-react";
import React from "react";

const BookingCard = ({ booking }) => {
  
  console.log(booking);
  const { carname, imageurl, pickuplocation, bookingDate } = booking;
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 my-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-5 bg-[#0b1119] rounded-2xl border border-gray-800 shadow-2xl">
       
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-[#0d1520] border border-gray-800/50 flex-shrink-0">
              <img
                src={imageurl}
                alt={carname}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-1 min-w-0">
              <h3 className="text-base sm:text-lg font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide truncate">
                {carname}
              </h3>

              <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
                <span className="truncate">{pickuplocation}</span>
              </div>

              <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                <Calendar size={14} className="text-cyan-400 flex-shrink-0" />
                <span className="truncate">{bookingDate}</span>
              </div>
            </div>
          </div>

          <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center gap-1 sm:gap-0.5 border-t sm:border-t-0 border-gray-800/60 pt-3 sm:pt-0">
            <div className="text-lg sm:text-xl font-black text-cyan-400 tracking-tight">
              $110
            </div>

            <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium mt-0.5">
              per day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
