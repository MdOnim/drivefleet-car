import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { EditModal } from "./EditModal";
import { DeleteAlert } from "./DeleteAlert";


const AddedCarCard = ({ car }) => {
  console.log(car,);


const { availabilitystatus, carname, cartype, description, imageurl, pickuplocation, rentprice, seatcapacity, bookingcount, _id} = car;



  return (
  <div className="w-full bg-[#0b1119] border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xl hover:border-gray-700 transition-colors">
      <div className="flex items-center gap-4 flex-1">
        
        <div className="w-24 h-20 sm:w-36 sm:h-24 flex-shrink-0 overflow-hidden rounded-xl bg-[#0d1520] border border-gray-800">
          <img
            src={imageurl}
            alt={carname}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-cyan-400 uppercase tracking-wide truncate">
            {carname}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            {pickuplocation}
            <span className="block sm:inline sm:ml-2 text-teal-400 font-semibold">
              ${rentprice}/day
            </span>
          </p>

          <p className={`text-sm mt-2 font-medium shrink-0 ${availabilitystatus === "available" ? "text-emerald-400" : "text-rose-400"}`}>
              {availabilitystatus === "available" ? "Available" : "Unavailable"}
            </p>
        </div>

      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto border-t border-gray-800 pt-3 sm:pt-0 sm:border-0">
      
        <EditModal car={car} />

        <DeleteAlert car={car} />

        
      </div>
    </div>
  );
};

export default AddedCarCard;
