"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>


      {/* Main Hero */}
      <main className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden">

        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 opacity-0 animate-fade-in" style={{ animationDelay: '0s' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/cinematic-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay to ensure text pops perfectly regardless of the video scene (bright sunset or dark tarmac) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none mix-blend-multiply"></div>
          {/* Extra vignette for cinematic feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none"></div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Elevate Your Journey
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl font-light drop-shadow-lg opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            Experience unparalleled luxury, efficiency, and safety with our exclusive flight charter services.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Link
              href="/request"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-500 ease-in-out bg-[var(--color-copter-blue)] hover:bg-transparent rounded-full shadow-[0_10px_40px_rgba(22,72,120,0.5)] overflow-hidden backdrop-blur-md border border-[var(--color-copter-blue)] hover:border-white w-full sm:w-auto"
            >
              <span className="relative z-10 group-hover:drop-shadow-lg">Request a Charter</span>
              {/* Subtle hover effect layer */}
              <div className="absolute inset-0 h-full w-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ease-out"></div>
            </Link>

            <a
              href="https://copterjetgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white transition-all duration-500 ease-in-out bg-black/40 hover:bg-white hover:text-black rounded-full border border-white/50 hover:border-white backdrop-blur-md w-full sm:w-auto"
            >
              Explore CopterJet Group
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
