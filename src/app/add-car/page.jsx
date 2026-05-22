"use client";

import { 
  Car, 
  DollarSign, 
  Layers, 
  Image as ImageIcon, 
  Users, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  ChevronDown 
} from "lucide-react";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";







const AddCarPage = () => {

  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries());

    const sessionRes = await authClient.getSession();
    const userData = sessionRes?.data || sessionRes; 
    const id = userData?.user?.id;

    


    if (!id) {
      toast.error("User session not found! Please re-login.");
      return;
    }


   

      const carFormdata = {
      carname: rawData.carname, 
      rentprice: Number(rawData.rentprice) || 0, 
      cartype: rawData.cartype, 
      seatcapacity: Number(rawData.seatcapacity) || 0, 
      imageurl: rawData.imageurl, 
      userId: id, 
      pickuplocation: rawData.pickuplocation, 
      description: rawData.description,
      availabilitystatus: rawData.availabilitystatus,
      bookingCount: 0,
      createdAt: new Date().toISOString()
    };

   const res = await fetch('http://localhost:5000/cars',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(carFormdata)
    })

    const data = await res.json();
    console.log(data);
  }







  return (
    <div className="min-h-screen bg-[#0d1520] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-[#0b1119] border border-gray-800 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide">
            Add Car
          </h1>
          <p className="text-gray-400 mt-2">
            Add a new car to your listing with detailed specifications.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onsubmit} className="space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Car Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Car Name
              </label>
              <div className="relative flex items-center">
                <Car className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  required
                  name="carname" 
                  placeholder="Enter car name (e.g., Tesla Model S)"
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Daily Rent Price */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Daily Rent Price
              </label>
              <div className="relative flex items-center">
                <DollarSign className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                  type="number"
                  required
                  name="rentprice" 
                  placeholder="Enter daily rent price in USD"
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Car Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Car Type
              </label>
              <div className="relative flex items-center">
                <Layers className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <select 
                  name="cartype" 
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-10 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 appearance-none cursor-pointer"
                >
                  <option className="bg-[#0b1119]" value="">Select car type</option>
                  <option className="bg-[#0b1119]" value="suv">SUV</option>
                  <option className="bg-[#0b1119]" value="sedan">Sedan</option>
                  <option className="bg-[#0b1119]" value="luxury">Luxury</option>
                  <option className="bg-[#0b1119]" value="hatchback">Hatchback</option>
                </select>
                <ChevronDown className="absolute right-4 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL
              </label>
              <div className="relative flex items-center">
                <ImageIcon className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  required
                  name="imageurl" 
                  placeholder="https://example.com/car-image.jpg"
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seat Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Seat Capacity
              </label>
              <div className="relative flex items-center">
                <Users className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                  type="number"
                  required
                  name="seatcapacity"
                  placeholder="Enter seat capacity (e.g., 4 or 7)"
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Pickup Location
              </label>
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <input
                  type="text"
                  required
                  name="pickuplocation" 
                  placeholder="Enter pickup city or location"
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <div className="relative flex items-start">
                <FileText className="absolute left-4 top-3.5 text-gray-500 w-5 h-5 pointer-events-none" />
                <textarea
                  rows="4"
                  name="description" 
                  required
                  placeholder="Write a short description about features, condition, etc."
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 resize-none placeholder:text-gray-600"
                ></textarea>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Availability Status
              </label>
              <div className="relative flex items-center">
                <CheckCircle2 className="absolute left-4 text-gray-500 w-5 h-5 pointer-events-none" />
                <select 
                  name="availabilitystatus" 
                  required
                  className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-10 py-3 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition duration-300 appearance-none cursor-pointer"
                >
                  <option className="bg-[#0b1119]" value="">Select status</option>
                  <option className="bg-[#0b1119]" value="available">Available</option>
                  <option className="bg-[#0b1119]" value="unavailable">Unavailable</option>
                </select>
                <ChevronDown className="absolute right-4 text-gray-500 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold py-4 rounded-xl transition duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:opacity-90 active:scale-[0.99]"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCarPage;