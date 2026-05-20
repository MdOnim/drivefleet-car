import React from 'react';
import { ArrowLeft, Users, Car, MapPin, CheckCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/cars/${id}`);
    const cars = await res.json();
    
   
    const { 
        availabilitystatus, 
        carname, 
        cartype, 
        description, 
        imageurl, 
        pickuplocation, 
        rentprice, 
        seatcapacity, 
        bookingcount, 
        _id 
    } = cars;

    return (
        <div className="min-h-screen bg-[#0d1520] text-zinc-100 font-sans antialiased p-4 md:p-8">
       
            <div className="max-w-6xl mx-auto mb-6">
                <Link 
                    href="/explore-car" 
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all bg-[#0b1119] px-4 py-2 rounded-xl border border-gray-800"
                >
                    <ArrowLeft size={16} />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>

           
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"> 
                <div className="space-y-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 bg-[#0b1119] shadow-2xl">
                        <img 
                            src={imageurl} 
                            alt={carname}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:opacity-90 active:scale-[0.99]">
                        Book Now
                    </button>
                </div>
                <div className="space-y-6 lg:pl-6 bg-[#0b1119] border border-gray-800 p-6 rounded-2xl shadow-2xl">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide">
                                {carname}
                            </h1>
                        
                            <div className="mt-3 inline-block bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase px-3 py-1 rounded-md">
                                {cartype}
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-black text-cyan-400 tracking-tight">${rentprice}</span>
                            <span className="text-zinc-500 text-xs block font-medium uppercase mt-0.5">/day</span>
                        </div>
                    </div>
                    <hr className="border-gray-800" />
                    <div className="space-y-2">
                        <div className="flex justify-between items-center py-3 border-b border-gray-800/60">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Users size={18} className="text-cyan-400" />
                                <span className="text-sm">Seat Capacity</span>
                            </div>
                        
                            <span className="text-zinc-200 font-medium text-sm">{seatcapacity} Person</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800/60">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Car size={18} className="text-cyan-400" />
                                <span className="text-sm">Car Type</span>
                            </div>
                            <span className="text-zinc-200 font-medium text-sm">{cartype}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800/60">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <MapPin size={18} className="text-cyan-400" />
                                <span className="text-sm">Pickup Location</span>
                            </div>
                            <span className="text-zinc-200 font-medium text-sm">{pickuplocation}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-800/60">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <CheckCircle size={18} className="text-cyan-400" />
                                <span className="text-sm">Availability</span>
                            </div>
                            <p className={`text-sm mt-2 font-medium shrink-0 ${availabilitystatus === "available" ? "text-emerald-400" : "text-rose-400"}`}>
                         {availabilitystatus === "available" ? "Available" : "Unavailable"}
                         </p>
                        </div>
                        <div className="flex justify-between items-center py-3">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Calendar size={18} className="text-cyan-400" />
                                <span className="text-sm">Booking Count</span>
                            </div>
                            <span className="text-zinc-200 font-medium text-sm">{bookingcount || 0} times</span>
                        </div>
                    </div>
                    <hr className="border-gray-800" />
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400/80">Description</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                            {description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarDetailsPage;