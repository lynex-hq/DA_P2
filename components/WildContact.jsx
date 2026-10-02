'use client';

import { useState } from 'react';
import StudioMap from '@/components/StudioMap';

export default function WildContact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 2500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 py-24 sm:py-36 md:py-40 bg-[#FAF9F4] text-[#181614] select-none relative"
    >
      {/* Invisible anchor for backward compatibility with #kontakt */}
      <span id="kontakt" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-16">
        
        {/* Main Grid: Form on Left, Coordinates on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Commission Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-12 rounded-3xl border border-[#E5DFD7] shadow-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#A48A7A]/20 text-[#A48A7A] flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="heading-2--serif text-2xl sm:text-3xl text-[#181614]">
                  Inquiry Received
                </h3>
                <p className="text-sm sm:text-base text-[#181614]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, {formState.name || 'valued patron'}. A studio partner will review your brief and respond within one business day.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="font-technical-label text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border border-[#181614] hover:bg-[#181614] hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="font-technical-label text-[10px] text-[#A48A7A] tracking-[0.25em] uppercase font-bold block mb-1">
                    COMMISSION INQUIRY
                  </span>
                  <h3 className="heading-2--serif text-2xl text-[#181614]">
                    Initiate a Private Consultation
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="font-technical-label text-[10px] uppercase tracking-wider text-[#181614]/70 block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Thorne"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-[#E5DFD7] bg-[#FAF9F4] text-[#181614] placeholder-[#181614]/35 focus:outline-none focus:border-[#181614] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-technical-label text-[10px] uppercase tracking-wider text-[#181614]/70 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-[#E5DFD7] bg-[#FAF9F4] text-[#181614] placeholder-[#181614]/35 focus:outline-none focus:border-[#181614] text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-technical-label text-[10px] uppercase tracking-wider text-[#181614]/70 block mb-1.5">
                      Project Vision &amp; Scope *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Outline property location, approximate scale, spatial objectives, or target completion date..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl border border-[#E5DFD7] bg-[#FAF9F4] text-[#181614] placeholder-[#181614]/35 focus:outline-none focus:border-[#181614] text-sm transition-colors resize-none"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-full bg-[#A48A7A] hover:bg-[#181614] text-white font-technical-label text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer font-medium"
                  >
                    {loading ? 'Sending Inquiry...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Atelier Coordinates */}
          <div className="lg:col-span-5 space-y-8 pt-2">
            <div>
              <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color leading-[1.08] pb-1">
                Contact.
              </h2>
              <p className="text-base sm:text-lg text-[#181614]/75 font-light pt-3">
                Let us speak about your upcoming project.
              </p>
            </div>

            <div className="space-y-6 pt-2 border-t border-[#E5DFD7]">
              {/* Studio Information */}
              <div className="space-y-1">
                <h3 className="heading-2--serif text-2xl text-[#181614]">
                  DESIGN ARK (PVT) LTD
                </h3>
                <p className="text-sm sm:text-base text-[#181614]/70 font-light leading-relaxed">
                  33, 1 Narahenpita - Nawala Road <br />
                  Colombo 00500, Sri Lanka
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                  <p className="font-technical-label text-[11px] text-[#A48A7A]">
                    Hours: Mon – Fri: 9:00 AM – 5:00 PM
                  </p>
                  <span className="text-[#E5DFD7] hidden xs:inline">&bull;</span>
                  <a
                    href="/contact_us#map"
                    className="font-technical-label text-[11px] text-[#181614] hover:text-[#DFC294] underline underline-offset-4 transition-colors"
                  >
                    View Atelier Map &rarr;
                  </a>
                </div>
              </div>

              {/* Direct Channels with Interactive Copy & Call */}
              <div className="space-y-3 pt-2 font-technical-label text-xs">
                {/* Telephone */}
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#A48A7A] uppercase tracking-wider block font-bold">
                      Direct Telephone
                    </span>
                    <a
                      href="tel:+94770288327"
                      className="text-sm font-semibold text-[#181614] hover:text-[#A48A7A] transition-colors"
                    >
                      +94 77 028 8327
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('+94 77 028 8327', 'Phone copied!')}
                    className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    {copiedText === 'Phone copied!' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#A48A7A] uppercase tracking-wider block font-bold">
                      Written Inquiries
                    </span>
                    <a
                      href="mailto:kevin.designark@gmail.com"
                      className="text-sm font-semibold text-[#181614] hover:text-[#A48A7A] transition-colors"
                    >
                      kevin.designark@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('kevin.designark@gmail.com', 'Email copied!')}
                    className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-colors cursor-pointer shrink-0"
                  >
                    {copiedText === 'Email copied!' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* Direct WhatsApp Desk */}
                <div className="p-4 rounded-xl bg-white border border-[#E5DFD7] flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-[#2E7D32] uppercase tracking-wider block font-bold">
                      Direct WhatsApp Desk
                    </span>
                    <span className="text-sm font-semibold text-[#181614]">
                      +94 77 028 8327
                    </span>
                  </div>
                  <a
                    href="https://wa.me/94770288327?text=Hello%20Design%20Ark%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#2E7D32] text-white hover:bg-[#1B5E20] transition-colors font-bold shrink-0 inline-flex items-center gap-1"
                  >
                    <span>Chat</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Studio Map Container */}
        <div className="pt-16 border-t border-[#E5DFD7]">
          <div className="space-y-2 mb-8">
            <span className="font-technical-label text-[10px] text-[#A48A7A] tracking-[0.25em] uppercase font-bold block">
              INTERACTIVE ATELIER LOCATIONS
            </span>
            <h3 className="heading-2--serif text-2xl sm:text-4xl text-[#181614]">
              Studio Cartography &amp; Routes
            </h3>
          </div>
          <StudioMap />
        </div>

      </div>
    </section>
  );
}
