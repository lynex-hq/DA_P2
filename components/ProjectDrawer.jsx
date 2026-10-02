'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDrawer({ project, isOpen, onClose }) {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
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

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('popup-visible');
      if (typeof window !== 'undefined' && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [isOpen, onClose]);

  // Isolate wheel events so they scroll the modal content without leaking to window
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || !isOpen) return;

    const handleWheel = (e) => {
      e.stopPropagation();
    };

    el.addEventListener('wheel', handleWheel, { passive: true });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      data-lenis-prevent="true"
    >
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        data-lenis-prevent="true"
      />

      {/* Modal Dialog Card - Clean Architectural Proportions with Pinned Header */}
      <div
        className="relative z-10 w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#E5DFD7] overflow-hidden animate-in zoom-in-95 duration-200 text-[#181614] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
      >
        {/* Pinned Architectural Header Bar - Keeps scrollbar safely below top rounded corner */}
        <div className="px-5 py-3.5 sm:px-8 sm:py-5 bg-[#FAF9F4] border-b border-[#E5DFD7] flex items-center justify-between gap-4 shrink-0">
          <div className="space-y-1 min-w-0 pr-2">
            <span className="inline-block px-3 py-0.5 rounded-full bg-white border border-[#DFC294]/60 font-technical-label text-[10px] text-[#7A624A] tracking-widest uppercase font-bold">
              {project.category || 'Architecture & Residences'}
            </span>
            <h2
              id="project-modal-title"
              className="heading-2--serif text-base sm:text-2xl md:text-3xl font-normal text-[#181614] leading-snug line-clamp-2"
            >
              {project.title}
            </h2>
          </div>

          {/* Refined Architectural Close Dial */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181614] text-[#FAF9F4] hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 flex items-center justify-center cursor-pointer shrink-0 shadow-sm hover:shadow-md active:scale-95 group"
            aria-label="Close project details"
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
          className="overflow-y-auto p-5 sm:p-8 space-y-6 overscroll-contain modal-custom-scrollbar flex-1"
        >

        {/* Featured High-Res Project Visual */}
        <div className="relative w-full h-[220px] sm:h-[340px] md:h-[380px] rounded-2xl overflow-hidden shadow-md bg-[#ECE8DF]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Bullets Specifications */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 border-b border-[#E5DFD7] pb-6">
            {project.bullets.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#181614]/75 font-light">
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#A48A7A] shrink-0"
                >
                  <path d="M1 5L14 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 1L14 5L10 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{b}</span>
              </div>
            ))}
          </div>
        )}

        {/* Architectural Narrative */}
        <div className="space-y-3">
          <h3 className="font-technical-label text-xs text-[#A48A7A] tracking-widest uppercase font-bold">
            Architectural Narrative
          </h3>
          <p className="text-sm sm:text-base text-[#181614]/80 font-light leading-relaxed">
            {project.narrative ||
              'Formulated around natural daylight cycles, spatial proportion, and authentic materiality. The project balances dark stone anchors with warm acoustic timber millwork, creating a calm, elevated environment for living and entertaining.'}
          </p>
        </div>

        {/* Specified Material Palette */}
        {project.materials && project.materials.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-technical-label text-xs text-[#A48A7A] tracking-widest uppercase font-bold">
              Specified Material Palette
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((mat) => (
                <span
                  key={mat}
                  className="px-4 py-1.5 rounded-full bg-[#FAF9F4] border border-[#E5DFD7] font-technical-label text-[11px] tracking-wider text-[#181614]/80"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Footer Bar */}
        <div className="pt-4 border-t border-[#E5DFD7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/contact_us"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center font-technical-label text-xs tracking-widest uppercase px-8 py-3.5 rounded-full bg-[#181614] hover:bg-[#A48A7A] text-white transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
          >
            Inquire About This Commission &rarr;
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="font-technical-label text-xs tracking-widest uppercase text-[#181614]/60 hover:text-[#181614] transition-colors cursor-pointer py-2"
          >
            Return to Gallery
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
