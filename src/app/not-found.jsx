import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[#0d1520] px-4 text-center font-sans antialiased">
            
            <h1 className="text-[120px] md:text-[160px] font-black bg-gradient-to-b from-cyan-400 to-teal-500 bg-clip-text text-transparent leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(34,211,238,0.15)] animate-pulse">
                404
            </h1>

            <h2 className="text-xl md:text-2xl font-black text-zinc-200 mt-4 uppercase tracking-[0.25em]">
                Page Not Found
            </h2>

            <p className="max-w-md text-zinc-500 my-8 text-[14px] leading-relaxed font-normal">
                The page you are looking for doesn&apos;t exist or has been moved. 
                Check the URL or return to the safety of the dashboard.
            </p>

            <Link 
                href="/" 
                className="px-10 py-3.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] transform active:scale-[0.98] uppercase tracking-wider"
            >
                Back To Home
            </Link>
        </main>
    );
};

export default NotFoundPage;