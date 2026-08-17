"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const userInteractedRef = useRef<boolean>(false);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ensure video element autoplays muted immediately without browser pause
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Initialize luxury ambient jet flight audio synthesizer (Web Audio API)
  const initAmbientAudio = () => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Generate smooth pink noise buffer for realistic private jet cabin ambiance
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Lowpass filter for warm jet engine cabin rumble
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(220, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
        gainNodeRef.current = gainNode;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start();
      } else if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
    } catch {
      // Graceful fallback if AudioContext is unsupported
    }
  };

  const enableSound = async () => {
    try {
      initAmbientAudio();
      if (audioContextRef.current && audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }
      if (videoRef.current) {
        videoRef.current.muted = false;
        await videoRef.current.play().catch(() => {});
      }
      if (gainNodeRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        gainNodeRef.current.gain.cancelScheduledValues(ctx.currentTime);
        gainNodeRef.current.gain.setTargetAtTime(0.18, ctx.currentTime, 0.2);
      }
      setIsMuted(false);
    } catch {
      // Fallback if browser requires user gesture
    }
  };

  const disableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      gainNodeRef.current.gain.cancelScheduledValues(ctx.currentTime);
      gainNodeRef.current.gain.setTargetAtTime(0, ctx.currentTime, 0.1);
    }
    setIsMuted(true);
  };

  // Sync mute state changes with video element and Web Audio gain
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
    if (gainNodeRef.current && audioContextRef.current) {
      const ctx = audioContextRef.current;
      const targetGain = isMuted ? 0 : 0.18;
      gainNodeRef.current.gain.cancelScheduledValues(ctx.currentTime);
      gainNodeRef.current.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.2);
    }
  }, [isMuted]);

  // Turn on sound on partial scrolling or interaction
  useEffect(() => {
    let triggered = false;

    const handleScrollOrGesture = () => {
      if (triggered || userInteractedRef.current) return;
      triggered = true;
      enableSound();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("scroll", handleScrollOrGesture);
      window.removeEventListener("wheel", handleScrollOrGesture);
      window.removeEventListener("touchmove", handleScrollOrGesture);
      window.removeEventListener("touchstart", handleScrollOrGesture);
      window.removeEventListener("pointerdown", handleScrollOrGesture);
      window.removeEventListener("keydown", handleScrollOrGesture);
    };

    // Listen for partial scroll (wheel, scroll, touchmove) and gestures
    window.addEventListener("scroll", handleScrollOrGesture, { passive: true });
    window.addEventListener("wheel", handleScrollOrGesture, { passive: true });
    window.addEventListener("touchmove", handleScrollOrGesture, { passive: true });
    window.addEventListener("touchstart", handleScrollOrGesture, { passive: true });
    window.addEventListener("pointerdown", handleScrollOrGesture, { passive: true });
    window.addEventListener("keydown", handleScrollOrGesture, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const toggleMute = () => {
    userInteractedRef.current = true;
    if (isMuted) {
      enableSound();
    } else {
      disableSound();
    }
  };

  return (
    <>
      {/* Main Hero Section with Subtle Height for Natural Desktop Scrolling */}
      <section className="relative min-h-[108vh] w-full flex flex-col items-center justify-center bg-black pt-24 pb-12 px-4">

        {/* Cinematic Video Background (Fixed/Cover to remain visible while scrolling) */}
        <div className="fixed inset-0 z-0 opacity-0 animate-fade-in pointer-events-none" style={{ animationDelay: '0s' }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/dqoppw9x1/video/upload/v1786538359/New_Web_Video_doslt7.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay to ensure text pops perfectly regardless of the video scene */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85 pointer-events-none mix-blend-multiply"></div>
          {/* Extra vignette for cinematic feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none"></div>
        </div>

        {/* Audio Toggle Control Button floating in Hero section */}
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={toggleMute}
            type="button"
            aria-label={isMuted ? "Unmute hero video audio" : "Mute hero video audio"}
            className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 hover:border-white/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer hover:scale-105 active:scale-95"
          >
            {isMuted ? (
              <>
                <div className="relative flex items-center justify-center">
                  {/* Pulse ring encouraging user interaction to enable sound */}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white/20 animate-ping opacity-75"></span>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-200 group-hover:text-white">Enable Audio</span>
              </>
            ) : (
              <>
                {/* Active sound wave animation */}
                <div className="flex items-end gap-0.5 h-4 px-0.5">
                  <span className="w-1 bg-[var(--color-copter-blue,#38bdf8)] animate-[bounce_1s_infinite_100ms] h-full rounded-full"></span>
                  <span className="w-1 bg-[var(--color-copter-blue,#38bdf8)] animate-[bounce_1s_infinite_300ms] h-2/3 rounded-full"></span>
                  <span className="w-1 bg-[var(--color-copter-blue,#38bdf8)] animate-[bounce_1s_infinite_200ms] h-5/6 rounded-full"></span>
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide text-white">Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* Unified Content Container */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center my-auto">

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

          <div
            className="mt-12 text-sm md:text-base text-gray-300 font-light flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center opacity-0 animate-fade-up"
            style={{ animationDelay: '1.0s' }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Email: aircharter@copterjet.com.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>Help desk: +2349139347442</span>
            </div>
          </div>

          {/* Copyright & Terms & Conditions & Privacy Policy at bottom of landing page */}
          <div
            className="mt-8 pt-6 w-full border-t border-white/10 text-xs sm:text-sm text-gray-400 font-light flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.2s' }}
          >
            <span>© 2026 CopterJet International. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/privacy" className="hover:text-white transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
