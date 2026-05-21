"use client";

import React from "react";
import { CalendarX, Home } from "lucide-react";
import { useRouter } from "next/navigation";

const EmptyBookingCard = () => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center text-center p-14 rounded-3xl max-w-4xl mx-auto space-y-8 overflow-hidden border border-gray-800 bg-gradient-to-b from-[#0b1119] to-[#070b10] shadow-[0_0_80px_rgba(0,0,0,0.8)]">
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full top-[-200px] left-1/2 -translate-x-1/2" />

      <div className="relative p-8 rounded-full bg-[#0d1520] border border-gray-700 text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
        <CalendarX size={50} strokeWidth={1.5} />
      </div>

      <div className="relative space-y-4">
        <h3 className="text-3xl font-bold text-zinc-200 tracking-wide">
          No Bookings Found
        </h3>
        <p className="text-base text-zinc-500 max-w-2xl leading-relaxed">
          You have not created any bookings yet. Once you book a ride, it will
          appear here with full details.
        </p>
      </div>

      <button
        onClick={() => router.push("/")}
        className="relative flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all duration-300"
      >
        <Home size={20} />
        Back to Home
      </button>
    </div>
  );
};

export default EmptyBookingCard;
