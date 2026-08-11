import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B233C] text-white pt-16 pb-12 font-sans border-t border-white/10 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/CopterJetLogo.jpeg"
                alt="CopterJet Logo"
                className="h-14 w-auto object-contain rounded-md"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md font-light">
              Copterjet International Limited is an aviation solutions provider delivering premier charter brokerage, aircraft sales & leasing, aviation supply chain, and consultancy services.
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Integrity • Professionalism • Safety • Operational Excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-gray-300 hover:text-white transition-colors">
                  Request a Charter
                </Link>
              </li>
              <li>
                <a
                  href="https://copterjetgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Explore CopterJet Group
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://copterjetgroup.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Contact Us
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Legal & Policy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Privacy & Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Contact & Support
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-light">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[var(--color-copter-red)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Charters:</span>
                  <a href="mailto:aircharter@copterjet.com.ng" className="hover:text-white transition-colors">
                    aircharter@copterjet.com.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[var(--color-copter-red)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Legal & Privacy:</span>
                  <a href="mailto:legal@copterjet.com.ng" className="hover:text-white transition-colors block">
                    legal@copterjet.com.ng
                  </a>
                  <a href="mailto:privacy@copterjet.com.ng" className="hover:text-white transition-colors block">
                    privacy@copterjet.com.ng
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <svg className="w-4 h-4 text-[var(--color-copter-red)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <span className="block font-medium text-white">Help desk:</span>
                  <span>+2349139347442</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Copterjet International Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <a href="https://www.copterjet.com.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              www.copterjet.com.ng
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
