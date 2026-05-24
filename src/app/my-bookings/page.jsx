import React from "react";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import BookingCard from "@/components/BookingCard";
import EmptyBookingCard from "@/components/EmptyBookingCard";


const MyBookingPage = async () => {


  
  const session = await auth.api.getSession({
    headers: await headers(),
  });
    const user = session?.user;
   
   
    const {token} = await auth.api.getToken({
      headers: await headers(),
      
    })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/userBooking/${user?.id}`,{
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
  const bookings = await res.json();
  
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {bookings && bookings.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {bookings.map((booking) => (
            <BookingCard booking={booking} key={booking._id} />
          ))}
        </div>
      ) : (
      
        <EmptyBookingCard />
       
      )}
    </div>
  );
};

export default MyBookingPage;
