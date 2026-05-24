import React from "react";
import AddedCarCard from "@/components/AddedCarCard";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import EmptyBookingCard from "@/components/EmptyBookingCard";

const MyAddCarPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const {token} = await auth.api.getToken({
    headers: await headers(),
  })


  const user = session?.user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-added-cars/${user.id}`,{
    headers: {
      'authorization': `Bearer ${token}`
    }
  });
  const mybookings = await res.json();
  console.log(mybookings,"data from my booking ");

  return (
    <div className="container mx-auto py-8 px-4">
      {mybookings.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold text-gray-500">
           <EmptyBookingCard />
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {mybookings.map((car) => (
            <AddedCarCard car={car} key={car._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddCarPage;
