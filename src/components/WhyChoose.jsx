import { Car, Wallet, ShieldCheck, Headset } from "lucide-react";

export default function WhyChooseSection() {
  return (

    <section className="w-full bg-[#0d1520] text-zinc-100 py-20 px-6 md:px-20 font-sans antialiased">
      
      {/* Heading */}
      <div className="text-center mb-16">
   
        <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide">
          Why Choose DriveFleet?
        </h2>
        <p className="text-zinc-400 mt-3 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
          Everything you need for a smooth and safe rental experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        

        <div className="group bg-[#0b1119] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
          <Car className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-4" size={28} />
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wide mb-2">
            Wide Range of Cars
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Choose from a wide range of vehicles to suit your needs.
          </p>
        </div>

        <div className="group bg-[#0b1119] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
          <Wallet className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-4" size={28} />
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wide mb-2">
            Affordable Prices
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Get the best deals and save more on every booking.
          </p>
        </div>


        <div className="group bg-[#0b1119] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
          <ShieldCheck className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-4" size={28} />
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wide mb-2">
            Trusted & Secure
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Your safety and satisfaction are our top priority.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-[#0b1119] border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300">
          <Headset className="text-cyan-400 group-hover:scale-110 transition-transform duration-300 mb-4" size={28} />
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wide mb-2">
            24/7 Support
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            We&apos;re here to help you anytime, anywhere.
          </p>
        </div>

      </div>
    </section>
  );
}