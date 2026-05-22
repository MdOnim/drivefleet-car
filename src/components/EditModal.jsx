"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import {
  Car,
  CheckCircle2,
  ChevronDown,
  DollarSign,
  FileText,
  ImageIcon,
  Layers,
  MapPin,
  Pencil,
} from "lucide-react";

export function EditModal({ car }) {
  const {
    carname,
    rentprice,
    description,
    imageurl,
    cartype,
    pickuplocation,
    availabilitystatus,
    _id,
  } = car;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const AllFormData = Object.fromEntries(formData.entries());
    console.log(AllFormData);

    const res = await fetch(`http://localhost:5000/cars/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AllFormData),
    });

    const data = await res.json();
    console.log(data, "updated data");




  };

  return (
    <Modal>
      <Button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 hover:bg-cyan-950 rounded-xl transition-colors">
        <Pencil size={14} />
        <span>Edit</span>
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl bg-[#0b1119] border border-gray-800 text-zinc-100 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-none">
            <Modal.CloseTrigger className="text-zinc-500 hover:text-zinc-300" />
            <Modal.Header className="border-b border-gray-800/50 px-6 py-4">
              <Modal.Icon className="bg-[#0d1520] border border-gray-800 text-cyan-400">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-base font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide">
                Update Vehicle Info
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6 bg-[#0b1119]">
              <Surface
                variant="default"
                className="bg-transparent shadow-none p-0 border-0 m-0 w-full block"
              >
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Car Name
                      </label>
                      <div className="relative flex items-center">
                        <Car className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          name="carname"
                          defaultValue={carname}
                          placeholder="Enter car name"
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Daily Rent Price
                      </label>
                      <div className="relative flex items-center">
                        <DollarSign className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <input
                          type="number"
                          required
                          name="rentprice"
                          defaultValue={rentprice}
                          placeholder="Enter daily rent price in USD"
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Car Type
                      </label>
                      <div className="relative flex items-center">
                        <Layers className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <select
                          name="cartype"
                          defaultValue={cartype || ""}
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-10 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 appearance-none cursor-pointer text-zinc-300"
                        >
                          <option className="bg-[#0b1119]" value="">
                            Select car type
                          </option>
                          <option className="bg-[#0b1119]" value="suv">
                            SUV
                          </option>
                          <option className="bg-[#0b1119]" value="sedan">
                            Sedan
                          </option>
                          <option className="bg-[#0b1119]" value="luxury">
                            Luxury
                          </option>
                          <option className="bg-[#0b1119]" value="hatchback">
                            Hatchback
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Image URL
                      </label>
                      <div className="relative flex items-center">
                        <ImageIcon className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          name="imageurl"
                          defaultValue={imageurl}
                          placeholder="https://example.com/car-image.jpg"
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Pickup Location
                      </label>
                      <div className="relative flex items-center">
                        <MapPin className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <input
                          type="text"
                          required
                          name="pickuplocation"
                          defaultValue={pickuplocation}
                          placeholder="Enter pickup city or location"
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Availability Status
                      </label>
                      <div className="relative flex items-center">
                        <CheckCircle2 className="absolute left-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <select
                          name="availabilitystatus"
                          required
                          defaultValue={availabilitystatus || ""}
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-10 py-3 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 appearance-none cursor-pointer text-zinc-300"
                        >
                          <option className="bg-[#0b1119]" value="">
                            Select status
                          </option>
                          <option className="bg-[#0b1119]" value="available">
                            Available
                          </option>
                          <option className="bg-[#0b1119]" value="unavailable">
                            Unavailable
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 text-zinc-500 w-5 h-5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                        Description
                      </label>
                      <div className="relative flex items-start">
                        <FileText className="absolute left-4 top-3.5 text-zinc-500 w-5 h-5 pointer-events-none" />
                        <textarea
                          rows="3"
                          name="description"
                          required
                          defaultValue={description}
                          placeholder="Write a short description..."
                          className="w-full bg-[#0d1520] border border-gray-800 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition duration-300 resize-none placeholder:text-zinc-600"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <Modal.Footer className="border-t border-gray-800/50 pt-4 mt-4 flex justify-end gap-3 bg-[#0b1119]">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="bg-zinc-900 text-zinc-400 hover:bg-zinc-800 font-bold text-xs uppercase tracking-wider rounded-xl px-5 py-2.5"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl px-6 py-2.5 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:opacity-90 transition-all"
                    >
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
