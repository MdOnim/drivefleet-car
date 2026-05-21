import React from "react";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/components/BookingCard";
import EmptyBookingCard from "@/components/EmptyBookingCard";


const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
    const user = session?.user;


  const res = await fetch(`http://localhost:5000/userBooking/${user?.id}`);
  const bookings = await res.json();
  
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {bookings && bookings.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {bookings.map((booking) => (
            <BookingCard booking={booking} key={booking._id} />
          ))}
        </div>
      ) : (
        /* ডাটা না থাকলে এই কার্ডটি দেখাবে */
        <EmptyBookingCard />
       
      )}
    </div>
  );
};

export default MyBookingPage;
