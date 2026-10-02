'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';

export const INTERIOR_PROJECTS = [
  {
    id: 'pavilion-boardroom',
    title: 'The Pavilion Glass Boardroom',
    category: 'Commercial & Executive Pavilion',
    bullets: ['Monolithic Calacatta Table', 'Pool Courtyard Panorama', 'Design Ark Signature Emblem'],
    image: images.projectBoardroomPavilion,
    narrative: 'A glass-wrapped executive boardroom pavilion featuring a monolithic Calacatta marble conference table, brass inlays, and uninterrupted tropical reflection pool vistas.',
    materials: ['Calacatta Marble', 'Brushed Brass', 'Acoustic Glazing', 'Solid Teak'],
  },
  {
    id: 'eguardian-hq',
    title: 'EGUARDIAN Corporate Headquarters',
    category: 'Corporate Office Fit-Out',
    bullets: ['Biophilic Planter Dividers', 'Concrete Statement Wall', 'Integrated Ergonomic Stations'],
    image: images.projectEguardianHq,
    narrative: 'A multi-zone corporate headquarters featuring exposed architectural concrete surfaces, acoustic timber slats, and lush living snake plant privacy dividers.',
    materials: ['Architectural Concrete', 'Acoustic Wood Slats', 'Matte Black Steel', 'Living Flora'],
  },
  {
    id: 'kirsche-boutique',
    title: 'Kirsche Commercial Flagship',
    category: 'Luxury Retail & Boutique',
    bullets: ['Illuminated Golden Signage', 'Curated Display Vitrines', 'Bespoke Retail Joinery'],
    image: images.projectKirscheBoutique,
    narrative: 'A high-impact commercial storefront featuring a custom backlit 3D golden emblem, frameless glass displays, and precision architectural lighting.',
    materials: ['Gold Leaf Stainless', 'Optiwhite Glass', 'Fluted Plaster', 'Travertine'],
  },
  {
    id: 'alluring-jewellery',
    title: 'Alluring Fine Jewellery Atelier',
    category: 'Haute Horlogerie & Showroom',
    bullets: ['Crystal Chandelier Illuminance', 'Security Glazed Vitrines', 'Plush Velvet Consultation Salon'],
    image: images.projectAlluringJewellery,
    narrative: 'An opulent private jewellery boutique pairing crystal chandeliers with brushed gold vitrines, velvet consultation lounges, and calibrated diamond illumination.',
    materials: ['Brushed Gold Brass', 'Crystal Glass', 'Emerald Velvet', 'Botticino Marble'],
  },
  {
    id: 'aurelia-residence',
    title: 'The Aurelia Master Suite',
    category: 'Private Luxury Residential',
    bullets: ['Backlit Geometric Headboard', 'Bespoke Fluted Wardrobes', 'Floating Marble Vanity'],
    image: images.projectAureliaResidence,
    narrative: 'A master bedroom sanctuary anchored by an architectural gold geometric headboard wall, motorized fluted joinery, and a bookmatched backlit vanity.',
    materials: ['Backlit Onyx', 'Fluted Oak', 'Burnished Brass', 'Warm Belgian Linen'],
  },
  {
    id: 'dining-salon',
    title: 'Grand Living & Dining Salon',
    category: 'Private Luxury Residential',
    bullets: ['Arabescato Marble Dining', 'Sputnik Brass Chandelier', 'Acoustic Slat Walls'],
    image: images.projectDiningSalon,
    narrative: 'An expansive open-concept living and dining salon unifying custom brass sputnik illumination, polished marble dining tables, and plush velvet lounge seating.',
    materials: ['Arabescato Marble', 'Acoustic Timber Slats', 'Aged Brass', 'Velvet Upholstery'],
  },
];

export default function WildProjects({ onSelectProject }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      className="scroll-mt-28 py-24 sm:py-36 md:py-44 bg-[#FAF9F4] text-[#181614] select-none border-t border-[#E5DFD7] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-16">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="font-technical-label text-xs text-[#A48A7A] tracking-widest uppercase font-semibold">
              Interior Architecture &bull; Curated Living
            </span>
            <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
              Bespoke Interior Works.
            </h2>
            <p className="text-base sm:text-lg text-[#181614]/70 font-light leading-relaxed">
              Explore a curated selection of our bespoke interior design commissions: crafted with natural stone, architectural joinery, and tailored spatial atmospheres.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-[#E5DFD7] flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'hover:border-[#181614] hover:bg-[#181614] hover:text-white cursor-pointer text-[#181614]'
                  : 'opacity-30 cursor-not-allowed text-[#181614]/40'
              }`}
              aria-label="Previous Interior Project"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-[#E5DFD7] flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'hover:border-[#181614] hover:bg-[#181614] hover:text-white cursor-pointer text-[#181614]'
                  : 'opacity-30 cursor-not-allowed text-[#181614]/40'
              }`}
              aria-label="Next Interior Project"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Projects Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {INTERIOR_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject && onSelectProject(project)}
              className="flex-shrink-0 w-[84vw] max-w-[340px] sm:w-[380px] md:w-[440px] snap-start group cursor-pointer space-y-6"
            >
              {/* Image Card with Scale & Zoom Micro-Animation */}
              <div className="relative h-[320px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden bg-[#ECE8DF] border border-[#E5DFD7] shadow-sm group-hover:shadow-xl transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 300px, (max-width: 1200px) 440px, 480px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Category Pill on Image */}
                <div className="absolute top-4 left-4 z-10 max-w-[calc(100%-2rem)]">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md font-technical-label text-[10px] text-[#181614] tracking-widest uppercase font-semibold border border-white/40 truncate max-w-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-3">
                <h3 className="heading-2--serif text-2xl sm:text-3xl font-normal group-hover:text-[#A48A7A] transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Bullets */}
                <div className="space-y-1.5 font-technical-label text-xs text-[#181614]/70">
                  {project.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A48A7A] shrink-0" />
                      <span className="leading-normal">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Pill Details Button */}
                <div className="pt-2">
                  <span className="inline-flex items-center justify-center font-technical-label text-[11px] tracking-widest uppercase px-6 py-2.5 rounded-full border border-[#181614] group-hover:bg-[#181614] group-hover:text-white transition-all duration-300">
                    Explore Interior &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse Complete Portfolio Button */}
        <div className="pt-8 flex justify-center px-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center text-center gap-2 sm:gap-3 font-technical-label text-[11px] sm:text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 rounded-full bg-[#181614] text-white hover:bg-[#A48A7A] transition-all duration-300 group shadow-md cursor-pointer max-w-full"
          >
            <span>Browse Complete Interior Portfolio (8+ Works)</span>
            <span className="group-hover:translate-x-1 transition-transform shrink-0">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
