'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/lib/images';
import StudioMap from '@/components/StudioMap';
import ScrollCurvedCorners from '@/components/ScrollCurvedCorners';

const FAQS = [
  {
    q: 'How does the studio handle international commissions?',
    a: 'Our principals travel globally for initial site appraisals and material curation directly from quarries and ateliers. Project coordination is sustained through digital 3D models and scheduled on-site inspections.',
  },
  {
    q: 'What is the typical architectural project timeline?',
    a: 'Comprehensive architectural and interior commissions typically span 6 to 18 months, depending on zoning approvals, estate scale, and artisanal millwork specifications.',
  },
  {
    q: 'Do you partner with existing client architects or local general contractors?',
    a: 'Yes. We regularly collaborate with client-appointed executive architects, local municipal expediters, and specialist engineering trades.',
  },
  {
    q: 'What is the minimum engagement scope?',
    a: 'We focus on comprehensive private residences, penthouses, historic estate restorations, and flagship commercial workplaces.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Private Residence',
    location: '',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'address') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-hidden select-none pb-28">
      
      {/* 1. Contact & Atelier Coordinates Hero */}
      <section className="relative w-full min-h-[65vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 bg-[#141210] text-[#FAF9F4] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.studioAtelier}
            alt="Design Ark Studio Atelier & Advisory"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>

        {/* Top Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 font-technical-label text-[10px] tracking-[0.25em] text-[#DFC294] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
            <span>CONFIDENTIAL ENGAGEMENT &bull; COLOMBO HEADQUARTERS</span>
          </div>
          <span className="font-technical-label text-[10px] tracking-widest text-white/50 uppercase">
            DIRECT PARTNER ADVISORY
          </span>
        </div>

        {/* Center Hero Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-10 sm:py-16 space-y-6">
          <h1 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F4] font-normal leading-[1.08] tracking-tight">
            Confidential Consultation &amp; <br />
            <span className="font-serif italic font-normal text-[#DFC294]">Architectural Inquiries.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-[#FAF9F4]/75 font-light leading-relaxed">
            We welcome confidential inquiries from private patrons, estate owners, and developers seeking distinguished architectural and interior realization.
          </p>
        </div>

        {/* Bottom Contact Badges Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 font-technical-label text-xs tracking-wider uppercase text-white/70">
          <div className="flex items-center gap-2">
            <span className="text-[#DFC294]">&bull;</span>
            <span>Tel: +94 77 028 8327</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DFC294]">&bull;</span>
            <span>Email: kevin.designark@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#DFC294]">&bull;</span>
            <span>33, 1 Narahenpita - Nawala Rd, Colombo</span>
          </div>
        </div>

        {/* Scroll-Linked Inverted Bottom Curve Cutouts */}
        <ScrollCurvedCorners fillColor="#FAF9F4" />
      </section>

      {/* 2. Main Studio Credentials & Interactive Form Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Studio Channels & Locations */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Direct Communication Channels */}
            <div className="bg-white p-8 rounded-3xl border border-[#E5DFD7] space-y-6 shadow-sm">
              <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#A48A7A] font-bold block">
                DIRECT INQUIRY CHANNELS
              </span>

              {/* Telephone */}
              <div className="space-y-1">
                <span className="font-technical-label text-[10px] text-[#181614]/50 uppercase tracking-wider block">
                  TELEPHONE INQUIRIES
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href="tel:+94770288327"
                    className="heading-2--serif text-xl sm:text-2xl text-[#181614] hover:text-[#A48A7A] transition-colors"
                  >
                    +94 77 028 8327
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+94 77 028 8327', 'phone')}
                    className="font-technical-label text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-all cursor-pointer"
                  >
                    {copiedPhone ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1 pt-2 border-t border-[#E5DFD7]">
                <span className="font-technical-label text-[10px] text-[#181614]/50 uppercase tracking-wider block">
                  ELECTRONIC CORRESPONDENCE
                </span>
                <div className="flex items-center justify-between">
                  <a
                    href="mailto:kevin.designark@gmail.com"
                    className="heading-2--serif text-xl sm:text-2xl text-[#181614] hover:text-[#A48A7A] transition-colors"
                  >
                    kevin.designark@gmail.com
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('inquiry@designark.com', 'email')}
                    className="font-technical-label text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-all cursor-pointer"
                  >
                    {copiedEmail ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-2 border-t border-[#E5DFD7]">
                <a
                  href="https://wa.me/94770000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] hover:border-[#181614] transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-technical-label text-xs tracking-wider uppercase text-[#181614]">
                      Direct WhatsApp Desk
                    </span>
                  </div>
                  <span className="font-technical-label text-xs text-[#A48A7A] group-hover:translate-x-1 transition-transform">
                    Chat &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Atelier Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] space-y-2 shadow-sm">
                <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] font-bold block">
                  PRIMARY ATELIER
                </span>
                <h3 className="heading-2--serif text-lg text-[#181614]">Colombo Headquarters</h3>
                <p className="text-xs text-[#181614]/75 font-light leading-relaxed">
                  33, 1 Narahenpita - Nawala Rd<br />
                  Colombo 00500, Sri Lanka
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E5DFD7] space-y-2 shadow-sm">
                <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] font-bold block">
                  CONSULTATION HOURS
                </span>
                <h3 className="heading-2--serif text-lg text-[#181614]">Studio &amp; Archives</h3>
                <p className="text-xs text-[#181614]/75 font-light leading-relaxed">
                  Monday – Friday: 9:00 AM – 5:00 PM<br />
                  Saturday reviews by appointment
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Commission Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#E5DFD7] shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in duration-300">
                <span className="w-16 h-16 rounded-full bg-[#181614] text-[#DFC294] flex items-center justify-center text-3xl mx-auto">
                  ✓
                </span>
                <div className="space-y-2">
                  <h3 className="heading-2--serif text-3xl text-[#181614]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#181614]/80 font-light leading-relaxed max-w-md mx-auto">
                    Thank you. Our principals will review your commission brief and respond with an initial appraisal within 24 business hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-technical-label text-xs tracking-widest uppercase px-6 py-3 rounded-full border border-[#181614] hover:bg-[#181614] hover:text-white transition-all cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#A48A7A] font-bold">
                    COMMISSION BRIEF
                  </span>
                  <h2 className="heading-2--serif text-2xl sm:text-3xl text-[#181614]">
                    Consultation Request
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adrian Schneider"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] focus:border-[#181614] focus:outline-none text-sm text-[#181614] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adrian@example.ch"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] focus:border-[#181614] focus:outline-none text-sm text-[#181614] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 block">
                      Telephone
                    </label>
                    <input
                      type="tel"
                      placeholder="+41 44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] focus:border-[#181614] focus:outline-none text-sm text-[#181614] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 block">
                      Project Nature
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] focus:border-[#181614] focus:outline-none text-sm text-[#181614] transition-colors"
                    >
                      <option>Private Residence</option>
                      <option>Penthouse / Apartment</option>
                      <option>Historic Renovation</option>
                      <option>Executive Workplace</option>
                      <option>Commercial Flagship</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 block">
                    Property Location &amp; Scope Overview
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Brief description of the property site, anticipated scope, and desired completion window..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF9F4] border border-[#E5DFD7] focus:border-[#181614] focus:outline-none text-sm text-[#181614] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto font-technical-label text-xs tracking-widest uppercase px-10 py-4 rounded-full bg-[#A48A7A] hover:bg-[#181614] text-white font-medium transition-all duration-300 shadow-md cursor-pointer"
                >
                  Transmit Commission Inquiry &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Interactive Custom Architectural Map */}
      <section id="map" className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 pt-24 pb-4 space-y-8">
        <div className="border-t border-[#DFC294]/50 pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
              ATELIER LOCATION &amp; LIVE MAP
            </span>
            <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614]">
              Visit Design Ark.
            </h2>
            <p className="text-sm sm:text-base text-[#181614]/75 font-light max-w-xl pt-1">
              Explore our Colombo design headquarters and material archives in person. Situated along the Narahenpita – Nawala corridor.
            </p>
          </div>
        </div>

        {/* Custom Leaflet Map with Clean Cartography & Relocate Button */}
        <StudioMap />
      </section>

      {/* 4. Engagement FAQs Accordion */}
      <section className="max-w-4xl mx-auto px-6 sm:px-12 pt-20 pb-8 space-y-8">
        <div className="border-t border-[#E5DFD7] pt-16 space-y-2 text-center">
          <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
            COMMISSION FAQ
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-4xl text-[#181614]">
            Engagement &amp; Process.
          </h2>
          <p className="text-sm text-[#181614]/70 font-light max-w-lg mx-auto pt-1">
            Answers to common questions regarding timelines, material archives, and international atelier collaboration.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-400 ease-out overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-[#DFC294] ring-1 ring-[#DFC294]/40 shadow-md'
                    : 'border-[#E5DFD7] hover:border-[#181614]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <span className="font-technical-label text-xs text-[#DFC294] font-mono mt-0.5 sm:mt-0">
                      0{idx + 1}
                    </span>
                    <span className="heading-2--serif text-lg sm:text-xl text-[#181614] group-hover:text-[#A48A7A] transition-colors leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  {/* Animated Plus / Cross Icon with Pulse Ring */}
                  <div className="relative shrink-0 flex items-center justify-center">
                    {/* Subtle Pulse Ring when open */}
                    <div
                      className={`absolute w-9 h-9 rounded-full bg-[#DFC294]/30 transition-all duration-500 pointer-events-none ${
                        isOpen ? 'scale-125 opacity-100 animate-pulse' : 'scale-75 opacity-0'
                      }`}
                    />

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? 'bg-[#181614] text-[#DFC294] border border-[#181614] rotate-45 shadow-sm'
                          : 'bg-[#FAF9F4] text-[#181614] border border-[#E5DFD7] group-hover:border-[#181614] group-hover:bg-[#181614] group-hover:text-white'
                      }`}
                    >
                      {/* SVG Plus / Cross */}
                      <svg
                        className="w-3.5 h-3.5 stroke-current transition-transform duration-300"
                        viewBox="0 0 24 24"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        fill="none"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Smooth Expanding & Collapsing Grid Animation */}
                <div
                  className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#181614]/80 font-light leading-relaxed border-t border-[#E5DFD7]/60 ml-9 sm:ml-9">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
