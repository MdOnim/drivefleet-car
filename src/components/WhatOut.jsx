import React from "react";
import { Quote, Star } from "lucide-react";

const WhatOutPage = () => {
  return (
    <section className="bg-[#0d1520] text-zinc-100 py-8 md:py-10 px-4 md:px-12 font-sans antialiased">
      <div className="container w-full h-full mx-auto">
        
        {/* Heading */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-black mb-6 md:mb-10 bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wider text-center max-w-[250px] sm:max-w-[320px] md:max-w-full mx-auto">
          What Our Customers Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-800 rounded-2xl bg-[#0b1119] shadow-2xl overflow-hidden items-stretch">
          
          {/* Card 1 */}
          <div className="p-5 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-800/80 hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              
              <Quote className="text-cyan-400/80 w-5 h-5 md:w-6 md:h-6 mb-4 fill-cyan-400/10 transform rotate-180 transition-transform group-hover:-translate-y-1 flex-shrink-0" />

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal mb-6 md:mb-8 flex-grow">
                Excellent service! The car was clean and in perfect condition.
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-800/40">
              
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
                alt="Rafiq Ahmed"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-gray-800 group-hover:border-cyan-500/40 transition-colors flex-shrink-0"
              />

              <div>
                <h4 className="text-cyan-400 font-bold text-sm tracking-wide mb-1">
                  Rafiq Ahmed
                </h4>

                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-800/80 hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              
              <Quote className="text-cyan-400/80 w-5 h-5 md:w-6 md:h-6 mb-4 fill-cyan-400/10 transform rotate-180 transition-transform group-hover:-translate-y-1 flex-shrink-0" />

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal mb-6 md:mb-8 flex-grow">
                Smooth booking experience and great customer support.
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-800/40">
              
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
                alt="Sadia Khan"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-gray-800 group-hover:border-cyan-500/40 transition-colors flex-shrink-0"
              />

              <div>
                <h4 className="text-cyan-400 font-bold text-sm tracking-wide mb-1">
                  Sadia Khan
                </h4>

                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 md:p-8 flex flex-col justify-between hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              
              <Quote className="text-cyan-400/80 w-5 h-5 md:w-6 md:h-6 mb-4 fill-cyan-400/10 transform rotate-180 transition-transform group-hover:-translate-y-1 flex-shrink-0" />

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal mb-6 md:mb-8 flex-grow">
                Best car rental service I have ever used. Highly recommended!
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 border-t border-gray-800/40">
              
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
                alt="Nayeem Hasan"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover border border-gray-800 group-hover:border-cyan-500/40 transition-colors flex-shrink-0"
              />

              <div>
                <h4 className="text-cyan-400 font-bold text-sm tracking-wide mb-1">
                  Nayeem Hasan
                </h4>

                <div className="flex items-center gap-0.5">
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                  <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-400 fill-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOutPage;