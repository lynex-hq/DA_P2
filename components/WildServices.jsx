'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

const SERVICES_LIST = [
  { id: 'projektentwicklung', num: '1', title: 'Project Development & Architecture' },
  { id: 'finanzierung', num: '2', title: 'Financial Structuring & Advisory' },
  { id: 'planung', num: '3', title: 'Planning & Turnkey Execution' },
  { id: 'renovation', num: '4', title: 'Historic Renovation & Adaptive Reuse' },
  { id: 'produktion', num: '5', title: 'Craft & Bespoke Millwork' },
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
          
          {/* Left Column: Curated Architectural Visual */}
          <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] md:h-[540px] rounded-2xl overflow-hidden shadow-lg group bg-[#ECE8DF] lg:sticky lg:top-28">
            <Image
              src={images.spacejoy}
              alt="Design Ark architectural disciplines and bespoke spaces"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: Heading, Narrative, and 5 Interactive Pill Buttons in English */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
                Disciplines.
              </h2>

              <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#181614]/80 font-light leading-relaxed">
                <p>
                  Design Ark develops and realizes holistic architectural and interior environments with uncompromising focus on spatial function, material longevity, financial rigor, and schedule reliability.
                </p>
                <p>
                  Our portfolio spans the sensitive renovation and adaptive reuse of existing estates, bespoke private residences, through to distinguished commercial flagships and executive workplaces.
                </p>
                <p>
                  As an experienced, deeply networked architectural partner, we steer every commission from strategic spatial planning through to turnkey handover.
                </p>
                <p>
                  Furthermore, we advise property owners with longstanding expertise in sustainable construction, energy modernizations, and value-enhancing transformations.
                </p>
              </div>
            </div>

            {/* 5 Interactive Numbered Pill Buttons */}
            <div className="flex flex-col gap-3 pt-4">
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
