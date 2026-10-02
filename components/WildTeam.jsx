'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { images } from '@/lib/images';

const TEAM = [
  {
    name: 'Mr. Kevin',
    role: 'Managing Director & Principal Designer',
    image: images.directorKevin,
  },
  {
    name: 'Elena Roth, M.Arch',
    role: 'Principal Architect & Design Lead',
    image: images.teamElenaRoth,
  },
  {
    name: 'Marcus Thorne, PE',
    role: 'Director of Tectonics & Structural Engineering',
    image: images.teamMarcusThorne,
  },
  {
    name: 'Aria Chen',
    role: 'Director of Interior Architecture & Material Curation',
    image: images.teamAriaChen,
  },
  {
    name: 'Julian Meier',
    role: 'Head of Turnkey Fit-Out & Joinery Guild',
    image: images.teamJulianMeier,
  },
  {
    name: 'David Vance',
    role: 'Director of Commercial Architecture & Planning',
    image: images.teamDavidVance,
  },
];

export default function WildTeam() {
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
    const distance = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

  return (
    <section id="team" className="scroll-mt-28 py-24 sm:py-32 bg-[#FAF9F4] text-[#181614] select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 space-y-12">
        
        {/* Section Header with Left/Right Arrows */}
        <div className="flex items-center justify-between">
          <h2 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl font-normal gradient-color">
            Team.
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border border-[#E5DFD7] flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? 'hover:bg-[#181614] hover:text-white hover:border-[#181614] cursor-pointer text-[#A48A7A]'
                  : 'opacity-40 cursor-not-allowed text-[#A48A7A]'
              }`}
              aria-label="Previous Team Members"
            >
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                <path d="M1 5L14 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 1L1 5L5 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border border-[#E5DFD7] flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? 'hover:bg-[#181614] hover:text-white hover:border-[#181614] cursor-pointer text-[#A48A7A]'
                  : 'opacity-40 cursor-not-allowed text-[#A48A7A]'
              }`}
              aria-label="Next Team Members"
            >
              <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                <path d="M1 5L14 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 1L14 5L10 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Draggable & Scrollable Team Carousel */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-4"
        >
          {TEAM.map((member, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[280px] sm:w-[320px] md:w-[360px] space-y-4 group"
            >
              <div className="relative h-[370px] sm:h-[440px] rounded-2xl overflow-hidden bg-[#ECE8DF] shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="space-y-1">
                <h3 className="heading-2--serif text-xl sm:text-2xl text-[#181614]">
                  {member.name}
                </h3>
                <p className="font-technical-label text-[11px] sm:text-xs tracking-wider text-[#A48A7A] uppercase leading-relaxed break-words">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
