"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true); 
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore Cars", href: "/explore-car" },
    { name: "Add Car", href: "/add-car" },
    { name: "My Bookings", href: "/bookings" },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="w-full  px-4 md:px-6 py-3 bg-[#0d1520]/90 backdrop-blur-md border-b border-gray-800  relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          
    
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent tracking-wider uppercase">
              ⚡ Drive<span className="text-cyan-400">Fleet</span>
            </div>
          </Link>


          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                  )}
                </Link>
              );
            })}
          </div>

  
          <div className="flex items-center gap-3">
            {/* {isLoggedIn ? (
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-950 to-slate-900 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-bold text-xs">
                    M
                  </div>
                  <span className="text-sm font-medium">Profile</span>
                  <span className="text-xs">▼</span>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0b1119] border border-gray-800 rounded-xl shadow-2xl py-2 z-50">
                    <Link
                      href="/add-car"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-950/40 hover:text-cyan-400"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Add Car
                    </Link>
                    <Link
                      href="/bookings"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-950/40 hover:text-cyan-400"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/my-added-cars"
                      className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-cyan-950/40 hover:text-cyan-400"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Added Cars
                    </Link>
                    <hr className="border-gray-800 my-1" />
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-950/20"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : ( */}



              {(<div className="hidden sm:flex items-center gap-2">
                <Link href="/login" className="px-3 py-2 text-sm text-gray-400 hover:text-cyan-400">
                  Login
                </Link>
                <Link href="/register" className="px-4 py-2 text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  Register
                </Link>
              </div>
            )}

      
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-cyan-400 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>

   
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[calc(100%+0.5rem)] bg-[#0d1520]/95 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-xl transition-all ${
                    isActive ? "bg-cyan-950/50 text-cyan-400 border-l-4 border-cyan-400" : "text-gray-400 hover:bg-gray-900 hover:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {isLoggedIn ? (
              <div className="pt-2 border-t border-gray-800">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 text-sm font-medium text-red-400 bg-red-950/10 hover:bg-red-950/20 rounded-xl transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 text-sm text-gray-400 bg-gray-900 rounded-xl">
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-2 text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl">
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}