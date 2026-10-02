'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

const SERVICES_LIST = [
  { id: 'consultation', num: '1', title: 'Design Consultation & Door-to-Door Visits' },
  { id: 'management', num: '2', title: 'Project Management & Turnkey Stewardship' },
  { id: 'furniture', num: '3', title: 'Tailor-Made Furnitures & In-House Millwork' },
  { id: 'civil', num: '4', title: 'Civil & Renovation Projects' },
  { id: 'fitout', num: '5', title: 'Total Interior Fit-Out (Keys Handover)' },
  { id: 'spacemanagement', num: '6', title: 'Space Management & Functional Planning' },
  { id: 'interiordesign', num: '7', title: 'Commercial & Residential Interior Designing' },
  { id: 'visualization', num: '8', title: '3D Architectural Visualization & Rendering' },
];

export default function WildServices({ onOpenPopup }) {
  return (
    <section
      id="disciplines"
      className="scroll-mt-28 py-24 sm:py-32 md:py-40 bg-[#FAF9F4] text-[#181614] select-none relative"
    >
      {/* Anchor aliases */}
      <span id="capabilities" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />
      <span id="services" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />
      <span id="kompetenzen" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-20">
        
        {/* Main Grid: Left Picture / Right Narrative + Numbered Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Curated Architectural Visual & Value Highlights */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="relative h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg group bg-[#ECE8DF]">
              <Image
                src={images.spacejoy}
                alt="Design Ark architectural disciplines and bespoke spaces"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm space-y-1">
                <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294] font-bold block">
                  Turnkey Guarantee
                </span>
                <p className="text-xs text-[#181614] font-medium leading-snug">
                  From initial requirement up to handing over the keys: Budgeting, Designing, Implementing.
                </p>
              </div>
            </div>

            {/* In-House Manufacturing Facility Badge */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5DFD7] space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                <h4 className="font-technical-label text-[11px] tracking-wider uppercase text-[#181614] font-bold">
                  In-House Manufacturing Facility
                </h4>
              </div>
              <p className="text-xs text-[#181614]/75 font-light leading-relaxed">
                Direct cost control from all edges and corners with zero middleman markup. We custom-fabricate furniture, cabinetry, and also modify existing furniture to maximize longevity and value.
              </p>
            </div>
          </div>

          {/* Right Column: Heading, Narrative, and 8 Interactive Pill Buttons */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-technical-label text-xs tracking-[0.25em] text-[#A48A7A] uppercase block">
                  What We Do &bull; Scope of Practice
                </span>
                <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
                  Disciplines.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#181614]/80 font-light leading-relaxed">
                <p>
                  Design Ark is capable of handling the total project for you, from the initial point of requirement up to handing over the keys. In three simple steps: <strong>Budgeting, Designing, and Implementing</strong>.
                </p>
                <p>
                  We take complete care of Civil Construction, Electrical &amp; MEP, Air Conditioning, Architectural Finishes, Bespoke Furniture Manufacturing, Lighting, and specialized client needs with 100% transparency.
                </p>
                <p>
                  Whether transforming private apartments and residences into warm, loving homes, or delivering culture-driven corporate headquarters, our one-on-one consultations guide you through every creative possibility.
                </p>
              </div>
            </div>

            {/* 8 Interactive Numbered Pill Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              {SERVICES_LIST.map((srv) => (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => onOpenPopup && onOpenPopup(srv.id)}
                  className="group relative w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 rounded-full border border-[#E5DFD7] hover:border-[#181614] bg-white hover:bg-[#181614] text-[#181614] hover:text-white transition-all duration-300 shadow-xs hover:shadow-lg cursor-pointer text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                    <span className="w-8 h-8 rounded-full bg-[#181614] group-hover:bg-white text-white group-hover:text-[#181614] font-technical-label text-xs font-semibold flex items-center justify-center transition-colors duration-300 shrink-0">
                      {srv.num}
                    </span>
                    <span className="heading-2--serif text-base sm:text-xl font-normal tracking-wide leading-snug">
                      {srv.title}
                    </span>
                  </div>

                  {/* Animated Arrow Icon */}
                  <div className="w-6 flex items-center justify-end text-[#A48A7A] group-hover:text-white transition-colors duration-300 shrink-0">
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current"
                    >
                      <path
                        d="M1 5L14 5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 origin-right group-hover:scale-x-125"
                      />
                      <path
                        d="M10 1L14 5L10 9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Subpage Link Button */}
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 font-technical-label text-xs tracking-widest uppercase px-6 py-3 rounded-full border border-[#181614] hover:bg-[#181614] hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <span>Full Disciplines &amp; Scope</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
