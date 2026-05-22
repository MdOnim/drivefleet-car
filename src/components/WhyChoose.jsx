import { Car, Wallet, ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="bg-[#0d1520] text-zinc-100 py-8 md:py-10 px-4 md:px-12 font-sans antialiased">
      <div className="container w-full h-full mx-auto">
        
        {/* Heading */}
        <h2 className="text-lg sm:text-2xl md:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wider text-center max-w-[260px] sm:max-w-[320px] md:max-w-full mx-auto">
          Why Choose DriveFleet?
        </h2>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto text-center leading-relaxed mb-6 md:mb-10">
          Everything you need for a smooth and safe rental experience
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-800 rounded-2xl bg-[#0b1119] shadow-2xl overflow-hidden items-stretch">
          
          {/* Card 1 */}
          <div className="p-5 md:p-8 flex flex-col justify-between border-b md:border-b md:odd:border-r lg:border-b-0 lg:border-r border-gray-800/80 hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              <Car
                className="text-cyan-400 w-6 h-6 md:w-7 md:h-7 mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              />

              <h3 className="text-zinc-100 font-bold text-base md:text-lg uppercase tracking-wide mb-3">
                Wide Range of Cars
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal flex-grow">
                Choose from a wide range of vehicles to suit your needs.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 md:p-8 flex flex-col justify-between border-b md:border-b lg:border-b-0 lg:border-r border-gray-800/80 hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              <Wallet
                className="text-cyan-400 w-6 h-6 md:w-7 md:h-7 mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              />

              <h3 className="text-zinc-100 font-bold text-base md:text-lg uppercase tracking-wide mb-3">
                Affordable Prices
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal flex-grow">
                Get the best deals and save more on every booking.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r lg:border-b-0 lg:border-r border-gray-800/80 hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              <ShieldCheck
                className="text-cyan-400 w-6 h-6 md:w-7 md:h-7 mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              />

              <h3 className="text-zinc-100 font-bold text-base md:text-lg uppercase tracking-wide mb-3">
                Trusted & Secure
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal flex-grow">
                Your safety and satisfaction are our top priority.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 md:p-8 flex flex-col justify-between hover:bg-[#0d1520]/40 transition-colors duration-300 group h-full">
            <div className="flex flex-col flex-grow">
              <Headset
                className="text-cyan-400 w-6 h-6 md:w-7 md:h-7 mb-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
              />

              <h3 className="text-zinc-100 font-bold text-base md:text-lg uppercase tracking-wide mb-3">
                24/7 Support
              </h3>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-normal flex-grow">
                We&apos;re here to help you anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}