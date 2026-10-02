'use client';

import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#FAF9F4] text-[#181614] select-none border-t border-[#E5DFD7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Logo */}
        <Link href="/" className="group" aria-label="Design Ark Home">
          <BrandLogo variant="dark" size="sm" />
        </Link>

        {/* Subpage Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-technical-label text-xs uppercase tracking-widest text-[#181614]/70">
          <Link href="/" className="hover:text-[#181614] transition-colors">
            Home
          </Link>
          <Link href="/portfolio" className="hover:text-[#181614] transition-colors">
            Portfolio
          </Link>
          <Link href="/about_us" className="hover:text-[#181614] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#181614] transition-colors">
            Disciplines
          </Link>
          <Link href="/contact_us" className="hover:text-[#181614] transition-colors">
            Contact
          </Link>
        </div>

        {/* Footer Meta & Social Vector Marks */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6 font-technical-label text-xs text-[#181614]/60 tracking-wider text-center">
          <span>&copy; {new Date().getFullYear()} DESIGN ARK (PVT) LTD</span>
          <span className="text-[#A48A7A] hidden sm:inline">&bull;</span>
          
          <div className="flex items-center gap-3">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] text-[#181614] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73 1.73-.78 1.73-1.73-.78-1.73-1.73-1.73Z"/>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] text-[#181614] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:kevin.designark@gmail.com"
              className="w-8 h-8 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] text-[#181614] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="Email"
              title="kevin.designark@gmail.com"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current transition-transform duration-300 group-hover:scale-110" strokeWidth="1.75" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <polyline points="3 7 12 13 21 7"/>
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/94770288327"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] text-[#181614] hover:text-white flex items-center justify-center transition-all duration-300 group cursor-pointer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
