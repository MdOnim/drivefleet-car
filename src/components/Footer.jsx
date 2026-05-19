import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#020813] text-gray-400 py-12 px-6 md:px-16 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              ⚡
            </div>
            <span className="text-white text-xl font-bold tracking-wide">DriveFleet</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Your trusted car rental partner. <br />
            Drive more, worry less.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all">
              <FaXTwitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

    
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Useful Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Explore Cars</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Add Car</a></li>
            <li><a href="#" className="hover:text-white transition-colors">My Bookings</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-semibold text-base mb-4">Support</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Contact Info</h3>
          <div className="flex flex-col gap-4 text-sm">

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-gray-900/40 border border-gray-800 text-gray-400 mt-0.5">
                <FaRegEnvelope size={14} />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Email</span>
                <a href="mailto:support@drivefleet.com" className="hover:text-white transition-colors">support@drivefleet.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-gray-900/40 border border-gray-800 text-gray-400 mt-0.5">
                <FaPhoneAlt size={13} />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Phone</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 234 567 890</a>
              </div>
            </div>
   
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded bg-gray-900/40 border border-gray-800 text-gray-400 mt-0.5">
                <IoLocationOutline size={15} />
              </div>
              <div>
                <span className="block text-xs text-gray-500">Address</span>
                <p className="text-gray-400">123 Drive Street, New York, USA</p>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="border-t border-gray-900/60 pt-6 text-center text-xs text-gray-500">
        © 2026 DriveFleet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;