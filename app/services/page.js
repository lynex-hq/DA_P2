'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import ScrollCurvedCorners from '@/components/ScrollCurvedCorners';

const DISCIPLINES = [
  {
    num: '01',
    id: 'development',
    title: 'Project Development & Architecture',
    subtitle: 'STRATEGY & FEASIBILITY',
    image: images.serviceResidential,
    desc: 'From initial site potential analysis through to approved zoning permits, we chart the comprehensive development strategy for new builds and extensive property transformations.',
    scope: 'Residential Estates, Luxury Penthouses, Private Flagships',
    deliverables: [
      'Comprehensive property yield & volumetric site potential analysis',
      'Zoning feasibility, municipal building law verification & permit filings',
      'Architectural schematics, space planning & photorealistic 3D visualization',
      'Circadian solar analysis, microclimate modeling & energy compliance',
    ],
  },
  {
    num: '02',
    id: 'financial',
    title: 'Financial Structuring & Advisory',
    subtitle: 'BUDGET & INVESTMENT RIGOR',
    image: images.processLighting,
    desc: 'We protect patron capital through disciplined financial modeling, detailed cost breakdown schedules, and continuous value optimization at every development milestone.',
    scope: 'Fixed-Price Frameworks, Capital Allocation, Cost Caps',
    deliverables: [
      'Detailed development pro-formas & milestone cash-flow forecasts',
      'Comprehensive material trade cost schedules & European benchmarking',
      'Contractor tender negotiation, price stabilization & binding cost caps',
      'Independent milestone-driven capital expenditure auditing',
    ],
  },
  {
    num: '03',
    id: 'planning',
    title: 'Planning & Turnkey Execution',
    subtitle: 'COORDINATION & CONSTRUCTION',
    image: images.spacejoy,
    desc: 'As general planner and primary client fiduciary, we orchestrate all engineering trades, supervise on-site construction, and guarantee adherence to delivery dates and budgets.',
    scope: 'General Planning, Turnkey Delivery, Trade Supervision',
    deliverables: [
      'Structural, MEP, HVAC & civil engineering trade coordination',
      'Dedicated on-site construction supervision & quality control audits',
      'Strict milestone schedule enforcement and defect elimination',
      'Turnkey handover with comprehensive structural & artisanal warranties',
    ],
  },
  {
    num: '04',
    id: 'heritage',
    title: 'Historic Renovation & Adaptive Reuse',
    subtitle: 'HERITAGE & PRESERVATION',
    image: images.macourtMedia,
    desc: 'Sensitive architectural transformation of protected villas, historic residences, and heritage structures, elevating energy efficiency while preserving authentic soul.',
    scope: 'Historic Villas, Protected Estates, Coastal Heritage',
    deliverables: [
      'Historic fabric assessment & preservation authority liaison',
      'Subterranean structural underpinning & advanced damp-proofing',
      'Thermal envelope modernization & geothermal conversion',
      'Acoustic floor separation & artisanal heritage plaster restoration',
    ],
  },
  {
    num: '05',
    id: 'millwork',
    title: 'Craft & Bespoke Millwork',
    subtitle: 'ARTISANAL DETAILING',
    image: images.hammerGroup1,
    desc: 'Custom cabinetry, acoustic timber ceilings, solid stone fireplaces, and patinated architectural hardware executed in collaboration with master Swiss and Sri Lankan craftsmen.',
    scope: 'Culinary Islands, Dressing Suites, Monolithic Stone Plinths',
    deliverables: [
      'Full custom kitchen, dressing room & bathroom architecture',
      'Acoustic slatted timber paneling with concealed lighting channels',
      'Monolithic natural stone selection directly from European quarries',
      'Bespoke architectural bronze, ironmongery & switchplate fabrication',
    ],
  },
];

const PHASES = [
  {
    num: '01',
    phase: 'Phase 1: Analysis & Feasibility',
    tag: 'EXPLORATION',
    timeline: 'Weeks 1 – 4',
    desc: 'Thorough spatial assessment of the site, structural feasibility modeling, zoning appraisal, and initial investment budgeting with fixed scope.',
    milestones: ['Site inspection & soil survey', 'Zoning law verification', 'Preliminary budget pro-forma'],
  },
  {
    num: '02',
    phase: 'Phase 2: Planning & Permitting',
    tag: 'DESIGN',
    timeline: 'Weeks 5 – 12',
    desc: 'Architectural schematics, 3D volumetric design, detailed material sampling, municipal permit submissions, and contractor tender price locking.',
    milestones: ['Complete CAD architectural plans', 'Full material specification schedule', 'Permit filing & approvals'],
  },
  {
    num: '03',
    phase: 'Phase 3: Turnkey Realisation',
    tag: 'EXECUTION',
    timeline: 'On-Site Construction',
    desc: 'General planning oversight, artisanal fabrication, on-site general contracting, strict schedule adherence, and final turnkey key handover.',
    milestones: ['Dedicated site supervisor daily', 'Zero budget variance guarantee', 'Turnkey handover & warranty'],
  },
];

const GUARANTEES = [
  {
    title: 'Binding Cost Certainty',
    desc: 'Contractually locked trade schedules prevent unexpected budget expansions.',
  },
  {
    title: 'Swiss Quality Benchmarking',
    desc: 'Strict tolerances and precision engineering standards applied to every build.',
  },
  {
    title: 'Single-Source Fiduciary',
    desc: 'One founding partner assumes complete responsibility from permit to handover.',
  },
  {
    title: 'Certified Handover Warranty',
    desc: 'Comprehensive structural and mechanical guarantees protecting your asset for decades.',
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('development');
  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeTab) || DISCIPLINES[0];

  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-hidden select-none">
      {/* 1. Services & Disciplines Architectural Hero */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 bg-[#141210] text-[#FAF9F4] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hammerGroup1}
            alt="Design Ark Disciplines & Execution"
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
            <span>FULL SCOPE &bull; TURNKEY CAPABILITIES</span>
          </div>
          <span className="font-technical-label text-[10px] tracking-widest text-white/50 uppercase">
            5 DISCIPLINES &bull; 3-PHASE EXECUTION
          </span>
        </div>

        {/* Center Hero Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-20 space-y-6">
          <h1 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F4] font-normal leading-[1.08] tracking-tight">
            Disciplines &amp; <br />
            <span className="font-serif italic font-normal text-[#DFC294]">Turnkey Execution.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-[#FAF9F4]/75 font-light leading-relaxed">
            From initial site potential analysis and financial structuring to on-site general planning and bespoke millwork, we deliver uncompromising Swiss architectural rigor.
          </p>
        </div>

        {/* Bottom Discipline Switcher Shortcut Pills */}
        <div className="relative z-10 max-w-7xl mx-auto w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {DISCIPLINES.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-5 py-2.5 rounded-full font-technical-label text-[11px] tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  activeTab === d.id
                    ? 'bg-[#DFC294] text-[#181614] font-semibold shadow-lg'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  activeTab === d.id ? 'bg-[#181614] text-[#DFC294]' : 'bg-white/20 text-white'
                }`}>
                  {d.num}
                </span>
                <span>{d.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll-Linked Inverted Bottom Curve Cutouts */}
        <ScrollCurvedCorners fillColor="#FAF9F4" />
      </section>

      {/* 2. Interactive Discipline Showcase Card */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5DFD7] pb-8">
          <div className="space-y-2">
            <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
              PRACTICE SCOPE
            </span>
            <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614] font-normal">
              Explore Our Capabilities.
            </h2>
          </div>
          <p className="text-sm text-[#181614]/70 font-light max-w-md">
            Click any discipline above or below to inspect dedicated methodologies, responsibilities, and architectural deliverables.
          </p>
        </div>

        {/* Main Interactive Discipline Showcase Box */}
        <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white border border-[#E5DFD7] shadow-xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-[#181614] text-[#DFC294] font-technical-label text-sm flex items-center justify-center font-bold">
                    {activeDiscipline.num}
                  </span>
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#A48A7A] font-bold">
                    {activeDiscipline.subtitle}
                  </span>
                </div>
                <h3 className="heading-2--serif text-3xl sm:text-4xl md:text-5xl text-[#181614] leading-tight font-normal">
                  {activeDiscipline.title}
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#181614]/80 font-light leading-relaxed">
                {activeDiscipline.desc}
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF9F4] border border-[#E5DFD7] space-y-1 font-technical-label text-xs">
                <span className="text-[9px] tracking-widest text-[#A48A7A] uppercase block font-bold">
                  TYPICAL ENGAGEMENT SCOPE
                </span>
                <p className="text-[#181614] font-semibold">
                  {activeDiscipline.scope}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-4 pt-2">
                <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#A48A7A] block font-bold">
                  KEY DELIVERABLES &amp; RESPONSIBILITIES
                </span>
                <div className="space-y-3">
                  {activeDiscipline.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#181614]/75 font-light">
                      <span className="w-5 h-5 rounded-full bg-[#FAF9F4] border border-[#DFC294] text-[#DFC294] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact_us"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#181614] text-white hover:bg-[#DFC294] hover:text-[#181614] transition-all cursor-pointer font-technical-label text-xs tracking-wider uppercase font-medium shadow-md"
                >
                  <span>Commission This Discipline &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Right Curated Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[500px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl border border-[#E5DFD7] bg-[#ECE8DF]">
                <Image
                  src={activeDiscipline.image}
                  alt={activeDiscipline.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#181614] font-bold">
                    COMMISSION ARCHIVE
                  </span>
                  <span className="font-technical-label text-[9px] tracking-wider text-[#A48A7A] uppercase">
                    ATELIER REALISATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Alternating Obsidian 3-Phase Execution Band (Homepage Contrast) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-24">
        <div className="relative w-full py-20 sm:py-28 px-8 sm:px-12 md:px-16 bg-[#0E0D0B] text-[#FAF9F4] rounded-3xl overflow-hidden shadow-2xl">
          <div className="space-y-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 font-technical-label text-[10px] tracking-[0.3em] uppercase text-[#DFC294]">
                TURNKEY METHODOLOGY
              </span>
              <h2 className="heading-2--serif text-3xl sm:text-5xl md:text-6xl text-[#FAF9F4] font-normal leading-tight">
                The 3-Phase Execution Process.
              </h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Transparent, milestone-governed execution designed to eliminate construction delays, budget expansions, and trade friction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PHASES.map((phase) => (
                <div
                  key={phase.num}
                  className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-6 flex flex-col justify-between hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-2xl bg-[#DFC294] text-[#181614] font-technical-label text-base flex items-center justify-center font-bold shadow-lg">
                        {phase.num}
                      </span>
                      <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#DFC294] border border-[#DFC294]/30 px-3 py-1 rounded-full">
                        {phase.timeline}
                      </span>
                    </div>
                    <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294] block">
                      {phase.tag}
                    </span>
                    <h3 className="heading-2--serif text-2xl text-white">
                      {phase.phase}
                    </h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/60 font-light">
                    {phase.milestones.map((ms, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#DFC294]">&bull;</span>
                        <span>{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Patron Guarantees Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-24 space-y-12">
        <div className="border-b border-[#E5DFD7] pb-8">
          <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
            FIDUCIARY INTEGRITY
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-5xl text-[#181614] font-normal mt-2">
            The Design Ark Patron Guarantees.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUARANTEES.map((g, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-[#E5DFD7] space-y-4 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#FAF9F4] border border-[#DFC294] text-[#DFC294] font-technical-label text-sm flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="heading-2--serif text-xl text-[#181614]">
                {g.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#181614]/75 font-light leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Closing Consultation CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pt-6 pb-24 text-center space-y-6">
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-[#181614] to-[#100F0E] text-[#FAF9F4] space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294]">
            STAGE 1 APPRAISAL
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-5xl font-normal text-white">
            Schedule an Architectural Feasibility Appraisal
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto">
            Discuss site potential, structural feasibility, and budget framework with our founding partners.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-technical-label text-xs uppercase tracking-wider">
            <Link
              href="/contact_us"
              className="px-8 py-4 rounded-full bg-[#DFC294] text-[#181614] hover:bg-white transition-all font-semibold shadow-lg cursor-pointer"
            >
              Initiate Stage 1 Appraisal &rarr;
            </Link>
            <Link
              href="/works"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-white transition-all font-medium cursor-pointer"
            >
              View Commission Archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
