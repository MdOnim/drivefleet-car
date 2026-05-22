"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingModal({ cars }) {
   const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  




  const {
    carname,
    rentprice,
    _id,
    availabilitystatus,
    imageurl,
    cartype,
    seatcapacity,
    pickuplocation,

  } = cars;

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please Login First");
      router.push("/login");
      return;
    }

    const bookingFormdata = new FormData(e.currentTarget);
    const booking = Object.fromEntries(bookingFormdata.entries());

  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(now);
  const formattedTime = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).format(now);
  const bookingDateTime = `${formattedDate} • ${formattedTime}`;

    const AllbookingData = {
      carname,
      rentprice,
      cartype,
      seatcapacity,
      userEmail: user?.email,
      userName: user?.name,
      userImage: user?.image,
      userId: user?.id,
      carId: _id,
      availabilitystatus,
      imageurl,
      pickuplocation,
      driver: booking.driver,
      note: booking.note,
      bookingDate: bookingDateTime,
    };

    console.log(AllbookingData, "All data from modal");

    const res = await fetch(`http://localhost:5000/userBooking/${user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllbookingData),
    });

    const data = await res.json();
    toast.success("Booking Successful");
  };

  return (
    <Modal>
      <Button
        variant="secondary"
        className="w-full h-auto py-4 px-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:opacity-90 active:scale-[0.99]"
      >
        Booking
      </Button>

      <Modal.Backdrop className="bg-[#0d1520]/60 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog className="max-w-md rounded-3xl bg-[#0b1119] p-6 shadow-2xl border border-gray-800">

            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/80">
                  Booking Form
                </span>
                <h2 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide mt-0.5">
                  {carname}
                </h2>
              </div>

              <Button
                slot="close"
                variant="light"
                className="bg-[#0d1520] hover:bg-gray-900 text-zinc-400 hover:text-white border border-gray-800 font-bold rounded-full px-4 py-1 text-xs min-w-0 h-auto transition-colors"
              >
                Close
              </Button>
            </div>

            <Modal.Body className="p-0">
              <form className="flex flex-col gap-4" onSubmit={onsubmit}>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-300">
                    Driver Needed
                  </label>

                  <div className="relative">
                    <select
                      name="driver"
                      className="w-full bg-[#0d1520] border border-gray-800 rounded-xl px-4 py-2.5 text-xs font-medium text-white appearance-none cursor-pointer focus:outline-none focus:border-cyan-500/50 transition-colors"
                      defaultValue="yes"
                    >
                      <option value="yes" className="bg-[#0b1119]">Yes</option>
                      <option value="no" className="bg-[#0b1119]">No</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-300">
                    Special Note
                  </label>

                  <textarea
                    name="note"
                    className="w-full bg-[#0d1520] border border-gray-800 rounded-xl p-4 text-xs font-medium text-white min-h-[90px] focus:outline-none focus:border-cyan-500/50 placeholder-zinc-600 resize-none transition-colors"
                    defaultValue="No Need"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-black py-5 rounded-xl text-xs shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:opacity-90 active:scale-[0.99] transition-all mt-2"
                >
                  Book Now
                </Button>

              </form>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}