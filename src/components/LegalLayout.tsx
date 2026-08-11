"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LegalDocument } from "@/data/legalData";

interface LegalLayoutProps {
  document: LegalDocument;
}

export default function LegalLayout({ document }: LegalLayoutProps) {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">(document.id);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveTab(document.id);
  }, [document.id]);

  // Scroll spy to highlight current active section in TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.sections.map((s) =>
        window.document.getElementById(s.id)
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSectionId(document.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [document.sections]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Filter sections by search query if user types something
  const filteredSections = document.sections.filter((section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = section.title.toLowerCase().includes(q);
    const matchesNumber = section.number.includes(q);
    const matchesContent = section.content.some((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(q);
      }
      const subtitleMatch = item.subtitle?.toLowerCase().includes(q);
      const listMatch = item.list?.some((li) => li.toLowerCase().includes(q));
      return subtitleMatch || listMatch;
    });
    return matchesTitle || matchesNumber || matchesContent;
  });

  return (
    <div className="min-h-screen bg-[#FAFBFD] pt-28 pb-20 font-sans print:pt-0 print:pb-0 print:bg-white">
      {/* Top Banner / Header */}
      <div className="bg-gradient-to-r from-[#0F3559] via-[var(--color-copter-blue)] to-[#1E5D94] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-lg print:hidden">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{document.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md border border-white/15">
                <svg className="w-3.5 h-3.5 text-[var(--color-copter-red)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2A11.954 11.954 0 0110 1.944z" clipRule="evenodd" />
                </svg>
                Legal Compliance & Policy
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                {document.title}
              </h1>
              <p className="mt-2 text-blue-100 text-base sm:text-lg font-light max-w-2xl">
                {document.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/15">
              <span className="text-xs text-blue-200 font-medium px-2">Effective Date:</span>
              <span className="text-sm font-semibold text-white bg-[var(--color-copter-red)] px-3 py-1 rounded-lg shadow-sm">
                {document.effectiveDate}
              </span>
            </div>
          </div>

          {/* Dual Navigation Switcher Tabs */}
          <div className="mt-8 flex items-center gap-3 border-b border-white/20 pb-0">
            <Link
              href="/terms"
              className={`px-5 py-3 text-sm font-bold rounded-t-xl transition-all duration-200 flex items-center gap-2 border-b-2 ${
                activeTab === "terms"
                  ? "bg-white text-[var(--color-copter-blue)] border-[var(--color-copter-red)] shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 border-transparent"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className={`px-5 py-3 text-sm font-bold rounded-t-xl transition-all duration-200 flex items-center gap-2 border-b-2 ${
                activeTab === "privacy"
                  ? "bg-white text-[var(--color-copter-blue)] border-[var(--color-copter-red)] shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20 border-transparent"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Privacy & Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Navigation / Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 xl:col-span-3 sticky top-28 hidden lg:block print:hidden space-y-6">
            
            {/* Search Box */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200/80">
              <label htmlFor="legal-search" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Search Legal Sections
              </label>
              <div className="relative">
                <input
                  id="legal-search"
                  type="text"
                  placeholder="Filter key terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:bg-white focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent outline-none transition-all"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-gray-600 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200/80 max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar">
              <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-semibold">
                  {document.sections.length} Sections
                </span>
              </h3>

              <nav className="space-y-1">
                {document.sections.map((section) => {
                  const isActive = activeSectionId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`group flex items-start gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-[var(--color-copter-blue)] text-white shadow-sm font-semibold"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className={`shrink-0 w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                      }`}>
                        {section.number}
                      </span>
                      <span className="line-clamp-1 leading-relaxed">
                        {section.title}
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={handlePrint}
                  className="w-full py-2 px-3 text-xs font-semibold text-gray-700 hover:text-[var(--color-copter-blue)] bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2 border border-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Document
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 text-xs font-semibold text-gray-700 hover:text-[var(--color-copter-blue)] bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center gap-2 border border-gray-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {copiedLink ? "Link Copied!" : "Copy Page Link"}
                </button>
              </div>
            </div>
          </aside>

          {/* Legal Text Document Content */}
          <main className="lg:col-span-8 xl:col-span-9 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-gray-200/80 print:shadow-none print:border-none print:p-0">
            
            {/* Header Document Summary Card (Print Visible) */}
            <div className="mb-10 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3 text-xs font-bold text-[var(--color-copter-blue)] tracking-wider uppercase mb-2">
                <span>Copterjet International Limited</span>
                <span>•</span>
                <span>Legal Reference</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                {document.title}
              </h2>
              
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                {document.intro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* No Search Results Notice */}
            {filteredSections.length === 0 && (
              <div className="py-12 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 font-semibold text-lg">No sections matched "{searchQuery}"</p>
                <p className="text-gray-500 text-sm mt-1">Try searching for different keywords or clear the search filter.</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-4 py-2 bg-[var(--color-copter-blue)] text-white text-xs font-bold rounded-xl shadow-sm hover:opacity-90 transition-opacity"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Render Legal Sections */}
            <div className="space-y-10 sm:space-y-12">
              {filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 group"
                >
                  {/* Section Title */}
                  <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 group-hover:border-[var(--color-copter-blue)]/20 transition-colors">
                    <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-copter-blue)] text-white text-sm font-extrabold shadow-sm shrink-0">
                      {section.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-copter-blue)]">
                      {section.title}
                    </h3>
                  </div>

                  {/* Section Body */}
                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed pl-2 sm:pl-11">
                    {section.content.map((item, idx) => {
                      if (typeof item === "string") {
                        return <p key={idx}>{item}</p>;
                      }
                      return (
                        <div key={idx} className="my-3 space-y-2">
                          {item.subtitle && (
                            <p className="font-semibold text-gray-900">{item.subtitle}</p>
                          )}
                          {item.list && (
                            <ul className="space-y-2.5 my-2">
                              {item.list.map((li, liIdx) => (
                                <li key={liIdx} className="flex items-start gap-3">
                                  <span className="w-2 h-2 rounded-full bg-[var(--color-copter-red)] mt-2 shrink-0"></span>
                                  <span>{li}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Information & Official Outro Banner */}
            <div className="mt-14 pt-8 border-t-2 border-gray-100">
              <div className="bg-gradient-to-br from-gray-50 to-[#F0F4F8] p-6 sm:p-8 rounded-2xl border border-gray-200/80 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-copter-blue)] text-white flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Contact Legal Department</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                      For official enquiries regarding these {document.title} or any of our aviation services:
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-gray-200/60 text-xs sm:text-sm">
                  <div>
                    <span className="block text-gray-500 font-medium text-xs">Entity</span>
                    <span className="font-bold text-gray-900">{document.contactInfo.company}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500 font-medium text-xs">Official Email</span>
                    <a
                      href={`mailto:${document.contactInfo.email}`}
                      className="font-bold text-[var(--color-copter-blue)] hover:text-[var(--color-copter-red)] transition-colors underline"
                    >
                      {document.contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <span className="block text-gray-500 font-medium text-xs">Official Portal</span>
                    <a
                      href={`https://${document.contactInfo.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[var(--color-copter-blue)] hover:text-[var(--color-copter-red)] transition-colors underline"
                    >
                      {document.contactInfo.website}
                    </a>
                  </div>
                </div>

                {/* Company Principle Tagline */}
                <div className="pt-4 border-t border-gray-200/60 text-center">
                  <p className="text-sm font-semibold italic text-[var(--color-copter-blue)]">
                    "{document.outroNotice}"
                  </p>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
