import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center space-y-8 max-w-2xl">
        <div className="inline-block px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-sm text-zinc-400 font-medium tracking-wide">
          App Studio
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
          Myth Apps
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto">
          We craft beautiful, high-performance digital experiences. 
        </p>

        <div className="pt-8">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white shadow-2xl backdrop-blur-md transition-all hover:bg-white/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide">Projects coming soon</span>
          </div>
        </div>
      </div>
      
      <footer className="absolute bottom-8 text-zinc-600 text-sm font-medium">
        © 2026 Myth Apps. All rights reserved.
      </footer>
    </main>
  );
}
