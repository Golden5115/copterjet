import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CopterJetGroup Flight Charter",
  description: "Request a flight charter from CopterJet International.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white">
        {/* Global Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.06)] animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-[88px] flex items-center justify-between">
            <a href="/" className="flex items-center shrink-0">
              <img
                src="/CopterJetLogo.jpeg"
                alt="CopterJet Group Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </a>

            {/* Contact Us on the right */}
            <a
              href="https://copterjetgroup.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-copter-blue)] hover:text-white font-semibold tracking-wide text-sm sm:text-base border-2 border-[var(--color-copter-blue)] hover:bg-[var(--color-copter-blue)] rounded-full px-5 sm:px-7 py-2 sm:py-2.5 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Contact Us
            </a>
          </div>
        </nav>
        
        <main className="flex-1">{children}</main>
        
        <CookieConsent />
      </body>
    </html>
  );
}
