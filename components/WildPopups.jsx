'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const POPUPS_DATA = {
  consultation: {
    num: '1',
    title: 'Design Consultation & Door-to-Door Visits.',
    paragraphs: [
      'We provide personal door-to-door on-site property consultations. Our design team visits your commercial or residential property in person to evaluate spatial flow, advise on how to uplift appearance, and guide you through the best possibilities of space planning, ergonomic layouts, and custom color palettes.',
      'Through one-to-one consultation, we listen deeply to your specific functional requirements and lifestyle aspirations, translating your initial vision into a clear, cohesive architectural roadmap.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  management: {
    num: '2',
    title: 'Project Management & Turnkey Stewardship.',
    paragraphs: [
      'Handling the total project for you from the initial point of requirement up to handing over the keys. In three simple steps: Budgeting, Designing, and Implementing.',
      'We act as your dedicated project consultant, overseeing civil construction, electrical (MEP), air conditioning (HVAC), architectural finishes, and bespoke furniture with 100% cost transparency and schedule reliability.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  furniture: {
    num: '3',
    title: 'Tailor-Made Furnitures & In-House Manufacturing.',
    paragraphs: [
      'We are specialized in custom furniture manufacturing according to your exact specifications, ergonomic requirements, and chosen materials.',
      'Our in-house manufacturing facility allows us to control costs from all edges and corners with zero middleman markup. We also specialize in modifying and adding value to existing furniture, maximizing the usability and beauty of your indoor and outdoor pieces.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  civil: {
    num: '4',
    title: 'Civil & Renovation Projects.',
    paragraphs: [
      'Comprehensive civil construction, structural alterations, adaptive reuse, and architectural renovations across luxury residences and commercial estates.',
      'We manage structural support, quantity surveying, MEP integration, waterproofing, and high-performance architectural finishes executed with master-craftsman precision.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  fitout: {
    num: '5',
    title: 'Total Interior Fit-Out & Turnkey Handover.',
    paragraphs: [
      'Complete turnkey interior fit-outs for prestigious corporate headquarters, luxury penthouses, flagship retail spaces, and private residences.',
      'From civil masonry and acoustic wall paneling to lighting integration and turnkey handover, every millimeter is delivered ready for immediate occupancy.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  spacemanagement: {
    num: '6',
    title: 'Space Management & Functional Planning.',
    paragraphs: [
      'Calibrated space planning that adds tangible value to each foot of your space, elevating both aesthetic appeal and human workflow.',
      'Whether creating a warm, loving home environment or a culture-driven collaborative corporate workspace, our spatial solutions foster productivity, wellness, and serenity.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  interiordesign: {
    num: '7',
    title: 'Interior Designing (Commercial & Residential).',
    paragraphs: [
      'Under the leadership of Mr. Kevin, our studio brings nearly a decade of experience, converting thousands of square feet into distinguished destinations.',
      'Our interior designers understand your exact requirements to "draw the picture in your heart," curating harmonious textures, natural stones, bespoke joinery, and custom lighting.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  visualization: {
    num: '8',
    title: '3D Architectural Visualization & Rendering.',
    paragraphs: [
      'Photorealistic 3D rendering, volumetric modeling, and material simulation that allow you to explore every detail of your future space before construction begins.',
      'From lighting angles and shadow studies to exact texture mapping and custom furniture placement, our visualizations ensure total alignment between design and execution.',
    ],
    cta: 'Our Services',
    href: '/services',
  },
  projektentwicklung: {
    num: '1',
    title: 'Project Development & Architecture.',
    paragraphs: [
      'We realize architectural commissions from the initial visionary sketch through to construction readiness, with unwavering focus on feasibility, spatial utility, and long-term value creation.',
      'We evaluate plots, formulate bespoke usage concepts, direct architectural design competitions, and advise property owners strategically regarding building law, financing, and market positioning. In doing so, we shape enduring architectural properties.',
    ],
    cta: 'Our Projects',
    href: '#projects',
  },
  finanzierung: {
    num: '2',
    title: 'Financial Structuring & Advisory.',
    paragraphs: [
      'We assist developers, private owners, and family offices with optimal financial structuring throughout the entire architectural planning and construction lifecycle.',
      'Through tailored investment models and our established financial network, we establish the sound economic foundation required for premier residential and commercial builds.',
    ],
    cta: 'Our Projects',
    href: '#projects',
  },
  planung: {
    num: '3',
    title: 'Planning & Turnkey Execution.',
    paragraphs: [
      'As an experienced architectural atelier and general contractor, Design Ark assumes full accountability for the building process from the first design briefing to turnkey key handover.',
      'We coordinate all specialized engineering disciplines, maintain strict on-site management, and ensure master-craftsman precision. Quality, deadlines, and budgets remain under our steadfast stewardship.',
    ],
    cta: 'Our Projects',
    href: '#projects',
  },
  renovation: {
    num: '4',
    title: 'Historic Renovation & Adaptive Reuse.',
    paragraphs: [
      'We execute sensitive renovations, structural revitalizations, and modernization of historic properties with deep preservation knowledge and architectural finesse.',
      'Whether conducting cost analyses, thermal energy upgrades, or intricate changes of spatial use: we harmonize heritage fabric, modern functionality, and augmented market value into a unified whole that makes lasting sense.',
    ],
    cta: 'Our Projects',
    href: '#projects',
  },
  produktion: {
    num: '5',
    title: 'Craft & Bespoke Millwork.',
    paragraphs: [
      'We conceptualize and fabricate highly functional, enduring, and refined interior architecture, millwork joinery, and specialized spatial installations.',
      'This encompasses custom stone fabrication, architectural metalwork, automated concealed storage, and sustainable acoustic solutions engineered down to the millimeter.',
    ],
    cta: 'Our Projects',
    href: '#projects',
  },
  analyse: {
    num: '1',
    title: 'Analysis & Feasibility.',
    paragraphs: [
      'The foundation of an enduring architectural project is built long before the ground is broken. Rigorous feasibility studies serve as our resilient decision-making foundation.',
      'Together with our patrons, we analyze site conditions, zoning regulations, solar orientations, and lifecycle economics. Through comparative variant studies, we optimize the project with respect to the entire lifecycle of the estate.',
    ],
  },
  projektierung: {
    num: '2',
    title: 'Planning & Design.',
    paragraphs: [
      'Once the core spatial strategy is aligned, the detailed design phase begins. We mobilize the interdisciplinary engineering team, file statutory submissions, and prepare precise tender specifications.',
      'Harmonious synergy among all stakeholders is key: only when architects, structural engineers, and patrons share the exact same vision does a coherent masterpiece emerge with precise, build-ready plans.',
    ],
  },
  realisierung: {
    num: '3',
    title: 'Turnkey Realisation.',
    paragraphs: [
      'Acting as general contractor and design supervisor, we ensure flawless project execution. We oversee every trade on site, coordinate logistics, and strictly enforce standards of finish, timeline, and cost.',
      'Thanks to our trusted craftsman network and obsessive attention to detail, we deliver exceptional results up to the turnkey key handover. Our benchmark: architecture built to endure, and patrons who are thoroughly delighted.',
    ],
  },
};

export default function WildPopups({ activePopup, onClose }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (activePopup) {
      document.body.classList.add('popup-visible');
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.classList.remove('popup-visible');
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.classList.remove('popup-visible');
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [activePopup]);

  // Isolate wheel events so they scroll the modal content without leaking to window
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || !activePopup) return;

    const handleWheel = (e) => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [activePopup]);

  if (!activePopup) return null;

  const data = POPUPS_DATA[activePopup];
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10 select-none"
      data-lenis-prevent="true"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        data-lenis-prevent="true"
      />

      {/* Modal Dialog Card - Clean Architectural Proportions with Pinned Header */}
      <div
        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD7] overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
        data-lenis-prevent="true"
      >
        {/* Pinned Architectural Header Bar - Keeps scrollbar safely below top rounded corner */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 bg-[#FAF9F4] border-b border-[#E5DFD7] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#181614] text-white font-technical-label text-xs sm:text-sm font-semibold flex items-center justify-center shrink-0 shadow-sm">
              {data.num}
            </span>
            <h2 className="heading-2--serif text-base sm:text-2xl md:text-3xl font-normal text-[#181614] leading-snug line-clamp-2">
              {data.title}
            </h2>
          </div>

          {/* Refined Architectural Close Dial */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181614] text-[#FAF9F4] hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 flex items-center justify-center cursor-pointer shrink-0 shadow-sm hover:shadow-md active:scale-95 group"
            aria-label="Close modal"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current transition-transform duration-300 group-hover:rotate-90"
              viewBox="0 0 14 14"
              fill="none"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
              <line x1="11.5" y1="2.5" x2="2.5" y2="11.5" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content Container - Scrollbar begins below header, perfectly clear of rounded corners */}
        <div
          ref={scrollContainerRef}
          data-lenis-prevent="true"
          className="overflow-y-auto p-6 sm:p-8 space-y-6 overscroll-contain modal-custom-scrollbar flex-1"
        >
          {/* Content Paragraphs in English */}
          <div className="space-y-4 text-sm sm:text-base text-[#181614]/85 font-light leading-relaxed">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Action Button */}
          {data.cta && (
            <div className="pt-2">
              <Link
                href={data.href || '#projects'}
                onClick={onClose}
                className="inline-flex items-center justify-center font-technical-label text-xs tracking-widest uppercase px-8 py-3.5 rounded-full bg-[#181614] hover:bg-[#A48A7A] text-white transition-colors duration-300 shadow-md cursor-pointer"
              >
                {data.cta}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
