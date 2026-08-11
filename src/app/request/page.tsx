"use client";
import { useState } from "react";
import Link from "next/link";

export default function RequestCharter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [category, setCategory] = useState("Jet");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--color-copter-light)] pt-32 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-start">
        <Link 
          href="/" 
          className="inline-flex items-center text-[var(--color-copter-grey)] hover:text-[var(--color-copter-blue)] font-medium transition-colors group"
        >
          <svg className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-copter-blue)]">
          Air Charter Request
        </h1>
        <p className="mt-2 text-base sm:text-lg text-[var(--color-copter-grey)]">
          Please complete the form below with your travel information.
        </p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--color-copter-red)] bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
          <span>* Indicates mandatory section / field</span>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-12">
          
          {/* 1. Contact Details (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                1. Contact Details <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization (if applicable)</label>
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telephone Number <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="tel" placeholder="+234..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
            </div>
          </section>

          {/* 2. Flight Information (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                2. Flight Information <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departure Location (Airport/Helipad/Place) <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="text" placeholder="e.g. Murtala Muhammed International Airport, Lagos" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination (Airport/Helipad/Place) <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="text" placeholder="e.g. Nnamdi Azikiwe International Airport, Abuja" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Departure Date <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Departure Time <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="time" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Flight Required? <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none bg-white">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Return Date & Time (if applicable)</label>
                <input type="datetime-local" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
            </div>
          </section>

          {/* 3. Passenger Details (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                3. Passenger Details <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Passengers <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="number" min="1" placeholder="e.g. 4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passenger Type <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none bg-white">
                  <option value="Executive">Executive</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Government">Government</option>
                  <option value="Private">Private</option>
                  <option value="Group">Group</option>
                </select>
              </div>
            </div>
          </section>

          {/* 4. Aircraft Preference (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                4. Aircraft Preference <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category (Jet/Helicopter) <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <select 
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none bg-white"
                >
                  <option value="Jet">Jet</option>
                  <option value="Helicopter">Helicopter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Aircraft Type <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none bg-white">
                  <option value="">Select Aircraft Type</option>
                  {category === 'Jet' && (
                    <>
                      <option value="Global 7000">Global 7000</option>
                      <option value="Global 6000">Global 6000</option>
                      <option value="Gulfstream V">Gulfstream V</option>
                      <option value="Gulfstream IV">Gulfstream IV</option>
                      <option value="Legacy 600">Legacy 600</option>
                      <option value="Challenger 605">Challenger 605</option>
                      <option value="Challenger 604">Challenger 604</option>
                      <option value="Hawker 800xp">Hawker 800xp</option>
                      <option value="Phenom 300">Phenom 300</option>
                    </>
                  )}
                  {category === 'Helicopter' && (
                    <>
                      <option value="AW-139">AW-139</option>
                      <option value="S-76">S-76</option>
                      <option value="EC-155">EC-155</option>
                      <option value="AW-109">AW-109</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </section>

          {/* 5. Purpose of Travel (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                5. Purpose of Travel <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Business', 'Corporate', 'Oil & Gas', 'Medical', 'Government', 'Tourism', 'Humanitarian', 'Other'].map((purpose, idx) => (
                <label key={purpose} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input required={idx === 0} type="radio" name="purpose" value={purpose} className="text-[var(--color-copter-blue)] focus:ring-[var(--color-copter-blue)]" />
                  <span className="text-sm text-gray-700 font-medium">{purpose}</span>
                </label>
              ))}
            </div>
          </section>

          {/* 6. Baggage (Optional) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-gray-300 pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                6. Baggage
              </h2>
              <span className="text-xs uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                Optional
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Bags</label>
                <input type="number" min="0" placeholder="e.g. 3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Total Weight</label>
                <input type="text" placeholder="e.g. 150 kg" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Oversized or Special Cargo</label>
                <input type="text" placeholder="If any" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
            </div>
          </section>

          {/* 7. Additional Requirements (Optional) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-gray-300 pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                7. Additional Requirements
              </h2>
              <span className="text-xs uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                Optional
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Ground Transportation', 'Catering', 'Hotel Accommodation', 'Security', 'Accessibility & Mobility Assistance', 'Other Special Requests'].map(req => (
                <label key={req} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="checkbox" name="requirements" value={req} className="text-[var(--color-copter-blue)] focus:ring-[var(--color-copter-blue)] rounded" />
                  <span className="text-sm text-gray-700 font-medium">{req}</span>
                </label>
              ))}
            </div>
          </section>

          {/* 8. Operational Requirements (Mandatory) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-[var(--color-copter-red)] pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                8. Operational Requirements <span className="text-[var(--color-copter-red)] font-bold">*</span>
              </h2>
              <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-copter-red)] bg-red-50 px-2.5 py-1 rounded-md">
                Mandatory
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aircraft Waiting Time (Hours) <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="number" min="0" placeholder="e.g. 4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Aircraft Waiting Time (Days) <span className="text-[var(--color-copter-red)]">*</span>
                </label>
                <input required type="number" min="0" placeholder="e.g. 2" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none" />
              </div>
            </div>
          </section>

          {/* 9. Comments (Optional) */}
          <section>
            <div className="flex items-center justify-between mb-6 border-l-4 border-gray-300 pl-4">
              <h2 className="text-2xl font-semibold text-[var(--color-copter-blue)]">
                9. Comments
              </h2>
              <span className="text-xs uppercase tracking-wider font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                Optional
              </span>
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information or Special Instructions</label>
              <textarea rows={4} placeholder="Specify any additional travel preferences or notes..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--color-copter-blue)] focus:border-transparent transition-all outline-none resize-y"></textarea>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-100 flex justify-center">
            <button 
              type="submit"
              className="px-10 py-5 bg-[var(--color-copter-blue)] hover:bg-[var(--color-copter-red)] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Request a Charter
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center transform transition-all">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
              <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted</h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your request has been successfully submitted. Our Charter Operations Team will contact you to enable us promptly prepare a tailored flight solution and quotation to meet your travel requirements. Thank you for choosing Copterjet International.
            </p>
            
            <div className="flex flex-col space-y-4">
              <a 
                href="https://copterjetgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-[var(--color-copter-blue)] hover:bg-[var(--color-copter-red)] transition-colors"
              >
                Explore Copterjet International Group
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
