import CarCard from "@/components/CarCard";
import EmptyBookingCard from "@/components/EmptyBookingCard";
import React from "react";

const CAR_TYPES = ["SUV", "SEDAN", "Hatchback", "Truck", "Electric"];

const ExploreCarPage = async ({ searchParams }) => {
  const params = await searchParams;
  
  const searchQuary = params?.search || "";
  const typeFilter = params?.type || "";
  

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/search?search=${encodeURIComponent(searchQuary)}&type=${encodeURIComponent(typeFilter)}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  console.log(data)

  return (
    <div className="container mx-auto py-8">
      <div>
        <form
          action=""
          method="GET"
          className="mb-8 px-4 flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto"
        >
          <input
            type="text"
            name="search"
            defaultValue={searchQuary}
            placeholder="Search by car name or type..."
            className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />

          <select
            name="type"
            defaultValue={typeFilter}
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#0d1520] text-white"
          >
            <option value="">All Types</option>
            {CAR_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Apply
          </button>
        </form>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((car) => (
            <CarCard car={car} key={car._id} />
          ))}
        </div>
      ) : (
        <div>
          <EmptyBookingCard />
        </div>
      )}
    </div>
  );
};

export default ExploreCarPage;