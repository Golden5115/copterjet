"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already responded to cookie prompt
    const consent = localStorage.getItem("copterjet_cookie_consent");
    if (!consent) {
      // Small timeout for smooth slide-in appearance
      const timer = setTimeout(() => setShowConsent(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("copterjet_cookie_consent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("copterjet_cookie_consent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-fade-up print:hidden">
      <div className="bg-[#0D2640]/95 backdrop-blur-md text-white p-5 sm:p-6 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-white/15 relative overflow-hidden">
        
        {/* Decorative subtle accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-copter-blue)] via-[var(--color-copter-red)] to-blue-400"></div>

        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400 border border-white/10 mt-0.5">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Cookie & Privacy Preferences
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              We use cookies to improve your browsing experience, analyze site usage, and support our aviation services. By clicking "Accept All", you consent to our use of cookies as detailed in our{" "}
              <Link href="/privacy" className="underline hover:text-white font-medium text-blue-200">
                Privacy & Cookie Policy
              </Link>.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-[var(--color-copter-blue)] hover:bg-[var(--color-copter-red)] text-white text-xs font-semibold rounded-xl shadow-md transition-all duration-200"
              >
                Accept All
              </button>

              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium rounded-xl border border-white/15 transition-all duration-200"
              >
                Decline
              </button>

              <Link
                href="/privacy"
                className="px-3 py-2 text-xs text-gray-400 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
