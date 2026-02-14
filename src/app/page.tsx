"use client";

import LetterGlitch from "@/components/LetterGlitch";
import { Button } from "@/components/ui/button";
import { Heart, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-emerald-500/30 font-mono">
      {/* Background with Letter Glitch */}
      <div className="absolute inset-0 z-0 opacity-25">
        <LetterGlitch
          glitchColors={["#34D399", "#10B981", "#059669"]}
          glitchSpeed={60}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Grid Overlay for Tech Vibe */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      {/* Radial Gradient overlay to focus center */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6">
        <div className="flex flex-col items-start max-w-4xl w-full gap-8 md:pl-20">
          
          {/* Header Section */}
          <div className="space-y-2 animate-in fade-in slide-in-from-left-10 duration-1000 ease-out">
            <div className="flex items-center gap-3 text-emerald-500/80 text-xs tracking-[0.2em] uppercase font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Online
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-sm select-none">
              PERKKK
            </h1>
          </div>

          {/* Bio / Description */}
          <div className="border-l border-emerald-500/30 pl-6 space-y-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <div className="flex flex-col gap-2 text-base md:text-lg text-emerald-100/70 font-light leading-relaxed">
              <p className="hover:text-emerald-50 transition-colors duration-300"><span className="text-emerald-500 mr-3">01 //</span> Computer Science Undergraduate crafting digital reality.</p>
              <p className="hover:text-emerald-50 transition-colors duration-300"><span className="text-emerald-500 mr-3">02 //</span> Specializing in scalable full-stack architectures.</p>
              <p className="hover:text-emerald-50 transition-colors duration-300"><span className="text-emerald-500 mr-3">03 //</span> Obsessed with pixel-perfect aesthetic & kinetic UI.</p>
              <p className="hover:text-emerald-50 transition-colors duration-300"><span className="text-emerald-500 mr-3">04 //</span> Bridging the gap between engineering and art.</p>
              <p className="hover:text-emerald-50 transition-colors duration-300"><span className="text-emerald-500 mr-3">05 //</span> Building the future, one commit at a time.</p>
            </div>
          </div>

          {/* Launch Date Tag */}
          <div className="animate-in fade-in zoom-in duration-1000 delay-500 flex items-center gap-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-emerald-500/20 bg-emerald-950/20 text-emerald-400/80 text-xs tracking-wider backdrop-blur-[2px]">
                <Sparkles className="w-3 h-3" />
                <span>LAUNCHING 27.03.2026</span>
             </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700">
            <Link href="https://www.linkedin.com/in/prakharrdev/" target="_blank">
              <Button
                className="group relative h-14 overflow-hidden rounded-sm border border-white/10 bg-white/5 px-8 text-sm uppercase tracking-[0.2em] text-white/90 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-3 font-semibold">
                  Initialize Uplink <Terminal className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 text-emerald-400" />
                </span>
                
                {/* Slanted Glass Shine effect */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[150%]" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 w-full text-center animate-in fade-in duration-1000 delay-1000 mix-blend-difference">
          <p className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20 hover:text-white/40 transition-colors">
            Made by Perk with love
            <Heart className="h-2.5 w-2.5 fill-rose-500 animate-pulse text-rose-500" />
          </p>
        </div>
      </div>
    </main>
  );
}
