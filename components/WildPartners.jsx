'use client';

const PARTNER_LOGOS = [
  {
    name: 'KRONOS',
    sub: 'STRUCTURAL ENGINEERING',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <rect x="4" y="4" width="32" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'LUMEN',
    sub: 'LIGHTING ATELIER',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <polygon points="20,4 36,20 20,36 4,20" stroke="currentColor" strokeWidth="2" />
        <polygon points="20,11 29,20 20,29 11,20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'VALENTINE',
    sub: 'MARBLE & STONEWORKS',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <path d="M12 6L28 6L36 16L20 35L4 16L12 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <line x1="4" y1="16" x2="36" y2="16" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="6" x2="20" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <line x1="28" y1="6" x2="20" y2="35" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'NOVA',
    sub: 'FACADE SYSTEMS',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <path d="M8 8H32V32H8V8Z" stroke="currentColor" strokeWidth="2" />
        <path d="M8 8L32 32" stroke="currentColor" strokeWidth="1.5" />
        <path d="M32 8L8 32" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'ATELIER TERRA',
    sub: 'SWISS CRAFT JOINERY',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" />
        <path d="M12 20H28M20 12V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'AURA',
    sub: 'ACOUSTIC LAB ZURICH',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'METALLWERK',
    sub: 'ARCHITECTURAL BRONZE',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <polygon points="20,5 33,12.5 33,27.5 20,35 7,27.5 7,12.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'SOLARIS',
    sub: 'ENERGY & CLIMATE TECH',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 shrink-0">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 4V8M20 32V36M4 20H8M32 20H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8.7 8.7L11.5 11.5M28.5 28.5L31.3 31.3M8.7 31.3L11.5 28.5M28.5 11.5L31.3 8.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function WildPartners() {
  return (
    <section
      id="partner"
      className="scroll-mt-28 py-20 sm:py-28 bg-[#FAF9F4] text-[#181614] overflow-hidden select-none relative"
    >
      {/* Anchor alias */}
      <span id="partners" className="scroll-mt-28 absolute -top-28 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 mb-12">
        <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
          Partners.
        </h2>
      </div>

      {/* Infinite Looping Partner Logos Marquee with Graphical Brand Marks */}
      <div className="relative flex overflow-hidden border-y border-[#E5DFD7] py-10 bg-[#F5F2EB]/60">
        {/* Track 1 */}
        <div className="flex animate-ticker shrink-0 items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
          {PARTNER_LOGOS.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 text-[#181614]/40 hover:text-[#181614] transition-all duration-300 group cursor-default select-none shrink-0"
            >
              <div className="group-hover:scale-110 group-hover:text-[#A48A7A] transition-all duration-300">
                {partner.icon}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-technical-label text-sm sm:text-base tracking-[0.2em] font-bold uppercase group-hover:text-[#181614] transition-colors">
                  {partner.name}
                </span>
                <span className="font-technical-label text-[8px] sm:text-[9px] tracking-[0.25em] text-[#A48A7A] uppercase">
                  {partner.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Track 2 for Seamless Continuous Infinite Marquee */}
        <div
          className="flex animate-ticker shrink-0 items-center gap-14 sm:gap-20 pr-14 sm:pr-20"
          aria-hidden="true"
        >
          {PARTNER_LOGOS.map((partner, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex items-center gap-3 sm:gap-4 text-[#181614]/40 hover:text-[#181614] transition-all duration-300 group cursor-default select-none shrink-0"
            >
              <div className="group-hover:scale-110 group-hover:text-[#A48A7A] transition-all duration-300">
                {partner.icon}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-technical-label text-sm sm:text-base tracking-[0.2em] font-bold uppercase group-hover:text-[#181614] transition-colors">
                  {partner.name}
                </span>
                <span className="font-technical-label text-[8px] sm:text-[9px] tracking-[0.25em] text-[#A48A7A] uppercase">
                  {partner.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
