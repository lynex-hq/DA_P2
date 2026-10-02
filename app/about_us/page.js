'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import ScrollCurvedCorners from '@/components/ScrollCurvedCorners';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Material Authenticity',
    subtitle: 'SUBSTANCE & TACTILITY',
    description:
      'Unvarnished natural stone, solid European smoked oak, and hand-finished architectural bronze that develop genuine character and age with dignified beauty over decades.',
    highlight: 'Zero synthetic veneers or transient composites.',
  },
  {
    number: '02',
    title: 'Light & Solar Proportion',
    subtitle: 'SPATIAL COMPOSITION',
    description:
      'Volumetric spaces organized deliberately around natural solar daylight cycles, cross-ventilation breezes, acoustic stillness, and intuitive human circulation paths.',
    highlight: 'Circadian daylight harvesting without thermal gain.',
  },
  {
    number: '03',
    title: 'Enduring Restraint',
    subtitle: 'LONGEVITY OVER TREND',
    description:
      'Structural clarity, honest architectural detailing, and spatial serenity that transcend seasonal fashion to form timeless architectural landmarks.',
    highlight: 'Designed to outlive transient design trends.',
  },
];

const LEADERSHIP = [
  {
    name: 'Mr. Kevin',
    role: 'Managing Director & Principal Designer',
    credentials: 'Founder & Principal Implementation Lead',
    location: 'Colombo Headquarters, Sri Lanka',
    bio: 'With nearly a decade of experience in interior design and turnkey implementation, Kevin has successfully managed hundreds of projects across both commercial and residential sectors, transforming thousands of square feet into functional, aesthetically refined environments.',
    image: images.directorKevin,
    focus: 'Interior Architecture, Commercial Fit-Out & Turnkey Realisation',
  },
  {
    name: 'Elena Roth, M.Arch',
    role: 'Principal Architect & Design Director',
    credentials: 'M.Arch, ETH Zurich & RIBA Chartered',
    location: 'Colombo Atelier & Design Strategy',
    bio: 'Overseeing master architectural planning, spatial drafting, and material honesty. Elena pairs disciplined European tectonic proportioning with the micro-climatic requirements of tropical modernism.',
    image: images.teamElenaRoth,
    focus: 'Spatial Proportion, Volumetric Drafting & Sustainable Architecture',
  },
  {
    name: 'Marcus Thorne, PE',
    role: 'Director of Tectonics & Structural Engineering',
    credentials: 'PE, Structural Engineering & On-Site Practice',
    location: 'On-Site Technical Execution & Fit-Out',
    bio: 'Leading structural fit-outs, joinery engineering, and MEP integration across commercial flagships and luxury residences to ensure every architectural blueprint is realized with zero compromise.',
    image: images.teamMarcusThorne,
    focus: 'Structural Fit-Out, Joinery Engineering & Turnkey Governance',
  },
  {
    name: 'Aria Chen',
    role: 'Director of Interior Architecture & Material Curation',
    credentials: 'B.Des (Hons), Interior Architecture',
    location: 'Material Library & Residential Atelier',
    bio: 'Curating unvarnished natural stones, European smoked oak, and hand-finished architectural bronze that develop genuine character and dignified longevity over decades.',
    image: images.teamAriaChen,
    focus: 'Tactile Finishes, Interior Spatial Curation & Private Residences',
  },
];

const STATS = [
  { value: '14+', label: 'Years of Practice', detail: 'Established Studio in Sri Lanka' },
  { value: '85+', label: 'Completed Commissions', detail: 'Private Residences & Flagships' },
  { value: 'Colombo', label: 'Primary Headquarters', detail: '33, 1 Narahenpita - Nawala Rd' },
  { value: '100%', label: 'Turnkey Realisation', detail: 'Guaranteed Quality & Delivery' },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-hidden select-none">
      {/* 1. Cinematic Architectural Hero Banner (Matches Home Page Aesthetic) */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 bg-[#141210] text-[#FAF9F4] overflow-hidden">
        {/* Architectural Background Photography with Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src={images.workTravertinePavilion}
            alt="Design Ark Architectural Atelier"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/60 to-transparent" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>

        {/* Top Breadcrumb & Technical Status */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3 font-technical-label text-[10px] tracking-[0.25em] text-[#DFC294] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
            <span>HERITAGE &bull; PHILOSOPHY &bull; LEADERSHIP</span>
          </div>
          <span className="font-technical-label text-[10px] tracking-widest text-white/50 uppercase">
            EST. 2011 &bull; COLOMBO HEADQUARTERS, SRI LANKA
          </span>
        </div>

        {/* Center Hero Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-20 space-y-6">
          <h1 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F4] font-normal leading-[1.08] tracking-tight">
            Atelier, Craft &amp; <br />
            <span className="font-serif italic font-normal text-[#DFC294]">Architectural Restraint.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-[#FAF9F4]/75 font-light leading-relaxed">
            Design Ark is an international architectural practice bridging Swiss structural precision with the tactile spirit, warmth, and natural ventilation of tropical modernism.
          </p>
        </div>

        {/* Bottom Hero Metrics Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="heading-2--serif text-2xl sm:text-4xl text-[#DFC294] font-normal">
                {stat.value}
              </span>
              <p className="font-technical-label text-[10px] sm:text-[11px] tracking-widest text-white/70 uppercase block">
                {stat.label}
              </p>
              <p className="text-[11px] text-white/40 font-light">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll-Linked Inverted Bottom Curve Cutouts */}
        <ScrollCurvedCorners fillColor="#FAF9F4" />
      </section>

      {/* 2. Editorial Studio Narrative & Dual Hub Geography */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
              OUR DUAL-HUB PEDIGREE
            </span>
            <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614] leading-tight font-normal">
              Where Swiss Precision <br />
              <span className="font-serif italic text-[#A48A7A]">Meets Tropical Modernism.</span>
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#181614]/75 font-light leading-relaxed">
              <p className="text-lg sm:text-xl font-serif text-[#181614] leading-snug">
                We reject standard architectural fashion. Every commission begins with radical material authenticity and absolute spatial discipline.
              </p>
              <p>
                From our flagship Colombo atelier at 33, 1 Narahenpita - Nawala Road, we engineer structural frameworks, environmental responsiveness, physical material archives, master joinery craftsmanship, and on-site construction supervision across Sri Lanka.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4 font-technical-label text-xs">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181614] text-white hover:bg-[#DFC294] hover:text-[#181614] transition-all cursor-pointer font-medium uppercase tracking-wider"
              >
                <span>Explore Disciplines</span>
                <span>&rarr;</span>
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#E5DFD7] bg-white hover:border-[#181614] text-[#181614] transition-all cursor-pointer font-medium uppercase tracking-wider"
              >
                <span>View Commissions</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#E5DFD7] bg-white">
              <Image
                src={images.spacejoy}
                alt="Design Ark architectural material study"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FAF9F4]/95 backdrop-blur-md border border-[#E5DFD7] shadow-xl flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
                    ATELIER COMMISSION
                  </span>
                  <p className="font-display-lg text-sm sm:text-base text-[#181614] font-normal">
                    Navona Travertine &amp; Smoked Oak
                  </p>
                </div>
                <span className="font-technical-label text-[10px] tracking-wider text-[#A48A7A] uppercase">
                  SWISS DETAILING
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Obsidian Architectural Manifesto (Dramatic Homepage Contrast) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-24">
        <div className="relative w-full py-20 sm:py-28 px-8 sm:px-12 md:px-16 bg-[#0E0D0B] text-[#FAF9F4] rounded-3xl overflow-hidden shadow-2xl">
          {/* Subtle Gold Monogram Watermark Accent */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 opacity-5 pointer-events-none">
            <svg viewBox="0 0 205 186" fill="none" className="w-full h-full stroke-[#DFC294]" strokeWidth="3">
              <path d="M 4 180 L 4 4 L 201 4 L 201 180" />
              <path d="M 21 180 L 21 24 L 48 24 C 120 24, 120 180, 48 180 L 21 180" />
              <path d="M 21 180 L 184 24 L 184 180" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto space-y-12 relative z-10 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-technical-label text-[10px] tracking-[0.3em] uppercase text-[#DFC294]">
              OUR ARCHITECTURAL MANIFESTO
            </span>

            <blockquote className="heading-2--serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F4] font-normal leading-snug">
              &ldquo;True quiet luxury is not an accumulation of ornament. It is the unhurried perfection of natural light, monolithic stone mass, and acoustic stillness that endures across generations.&rdquo;
            </blockquote>

            <div className="pt-4 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#DFC294]/50" />
              <span className="font-technical-label text-xs tracking-widest uppercase text-[#DFC294]">
                DESIGN ARK FOUNDING TENET
              </span>
              <span className="w-12 h-px bg-[#DFC294]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core Architectural Principles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5DFD7] pb-8">
          <div className="space-y-2">
            <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
              CORE METHODOLOGY
            </span>
            <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614] font-normal">
              Architectural Tenets.
            </h2>
          </div>
          <p className="text-sm text-[#181614]/70 font-light max-w-md">
            Three guiding axioms applied to every private residence, penthouse salon, and commercial flagship we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((tenet) => (
            <div
              key={tenet.number}
              className="p-8 rounded-3xl bg-white border border-[#E5DFD7] space-y-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-[#181614] text-[#DFC294] font-technical-label text-sm flex items-center justify-center font-bold shadow-md group-hover:bg-[#DFC294] group-hover:text-[#181614] transition-colors">
                    {tenet.number}
                  </span>
                  <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
                    {tenet.subtitle}
                  </span>
                </div>
                <h3 className="heading-2--serif text-2xl sm:text-3xl text-[#181614]">
                  {tenet.title}
                </h3>
                <p className="text-sm text-[#181614]/75 font-light leading-relaxed">
                  {tenet.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD7]/70 font-technical-label text-[11px] text-[#A48A7A]">
                &bull; {tenet.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Leadership Principals Gallery */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-20 space-y-12">
        <div className="border-t border-[#E5DFD7] pt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
              FOUNDING DIRECTORS
            </span>
            <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614] font-normal">
              Studio Leadership.
            </h2>
          </div>
          <p className="text-sm text-[#181614]/70 font-light max-w-md">
            Direct partner involvement from initial zoning feasibility through to bespoke millwork installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {LEADERSHIP.map((leader) => (
            <div
              key={leader.name}
              className="p-8 rounded-3xl bg-white border border-[#E5DFD7] space-y-6 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative w-44 h-56 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shrink-0 bg-[#ECE8DF] border border-[#E5DFD7] shadow-md">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(min-width: 640px) 480px, 360px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left flex-1">
                <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
                  {leader.location}
                </span>
                <h3 className="heading-2--serif text-2xl sm:text-3xl text-[#181614]">
                  {leader.name}
                </h3>
                <p className="font-technical-label text-xs text-[#DFC294] font-semibold">
                  {leader.role} &bull; <span className="text-[#181614]/60 font-normal">{leader.credentials}</span>
                </p>
                <p className="text-xs sm:text-sm text-[#181614]/75 font-light leading-relaxed pt-1">
                  {leader.bio}
                </p>
                <div className="pt-3 font-technical-label text-[10px] tracking-wider uppercase text-[#181614]/70 border-t border-[#E5DFD7]/70">
                  Focus: <span className="text-[#181614] font-semibold">{leader.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Closing Invitation CTA (Matches Homepage CtaBand) */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pt-12 pb-24 text-center space-y-6">
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-[#181614] to-[#100F0E] text-[#FAF9F4] space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294]">
            PRIVATE COMMISSIONS
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-5xl font-normal text-white">
            Initiate a Dialogue with Our Principals
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto">
            We welcome confidential inquiries regarding new residential acquisitions, architectural feasibility, and private interior transformations.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-technical-label text-xs uppercase tracking-wider">
            <Link
              href="/contact_us"
              className="px-8 py-4 rounded-full bg-[#DFC294] text-[#181614] hover:bg-white transition-all font-semibold shadow-lg cursor-pointer"
            >
              Request Consultation &rarr;
            </Link>
            <Link
              href="/works"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-white transition-all font-medium cursor-pointer"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
