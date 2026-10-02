'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const STUDIO = {
  id: 'colombo',
  name: 'Design ark (Pvt) Ltd.',
  tag: 'PRIMARY ATELIER & ARCHIVE • SRI LANKA',
  address: '33, 1 Narahenpita - Nawala Rd, Colombo 00500, Sri Lanka',
  coords: [6.8872552, 79.8858173],
  zoom: 16,
  hours: 'Mon – Fri: 9:00 AM – 5:00 PM',
  phone: '+94 11 234 5678',
  plusCode: 'VVPP+W8 Colombo',
  googleMapsUrl: 'https://www.google.com/maps/place/Design+ark+(Pvt)+Ltd./@6.8872552,79.8858173,17z',
  directionsUrl: 'https://www.google.com/maps/dir//Design+ark+(Pvt)+Ltd.,+33,+1+Narahenpita+-+Nawala+Rd,+Colombo+00500/@6.8872552,79.8858173,17z',
};

export default function StudioMap() {
  const mapContainerRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const activeStudio = STUDIO;
  const [activeTab, setActiveTab] = useState('overview');
  const [isMovedAway, setIsMovedAway] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(false);
  const [isCardCollapsed, setIsCardCollapsed] = useState(true);
  const [isMapInteractable, setIsMapInteractable] = useState(false);

  const hintTimeoutRef = useRef(null);
  const lastZoomTimeRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    // Dynamically load Leaflet on client
    const initLeaflet = async () => {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      // Inject Leaflet CSS if not already present
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const L = (await import('leaflet')).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Cleanup existing map if re-initializing
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

      // Initialize Leaflet Map with smooth integer zoom steps (zero fractional lag)
      const map = L.map(mapContainerRef.current, {
        center: activeStudio.coords,
        zoom: activeStudio.zoom,
        zoomSnap: 1,
        zoomDelta: 1,
        wheelPxPerZoomLevel: 100,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false, // Smoothly controlled via Ctrl + Wheel gesture
        touchZoom: true,
        dragging: !isMobile, // On mobile, disable dragging by default so single-finger touch scrolls the webpage!
        doubleClickZoom: true,
        fadeAnimation: true,
        zoomAnimation: true,
        markerZoomAnimation: true,
      });

      mapInstanceRef.current = map;

      // High-Performance Free OpenStreetMap Tiles (100% free, no API key required, zero watermarks)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Classic High-Precision Teardrop Map Pin
      const customPinHtml = `
        <div class="relative flex flex-col items-center justify-center cursor-pointer group" style="width: 36px; height: 46px;">
          <!-- Ambient pulse ring on ground -->
          <div class="absolute bottom-0 w-6 h-6 rounded-full bg-[#EA4335]/30 animate-ping -mb-1"></div>

          <!-- Classic Location Pin SVG -->
          <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.35));" class="transform group-hover:scale-110 transition-transform duration-200">
            <path d="M18 0C8.05887 0 0 8.05887 0 18C0 31.5 18 46 18 46C18 46 36 31.5 36 18C36 8.05887 27.9411 0 18 0Z" fill="url(#mapPinGrad)"/>
            <defs>
              <linearGradient id="mapPinGrad" x1="0" y1="0" x2="36" y2="46" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EA4335"/>
                <stop offset="100%" stop-color="#C5221F"/>
              </linearGradient>
            </defs>
            <!-- White Inner Disc -->
            <circle cx="18" cy="17" r="7.5" fill="#FFFFFF"/>
            <!-- Center Core -->
            <circle cx="18" cy="17" r="4" fill="#C5221F"/>
          </svg>

          <!-- Ground Contact Shadow -->
          <div class="w-4 h-1.5 bg-black/30 rounded-full blur-[1px] -mt-0.5"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: customPinHtml,
        className: 'custom-leaflet-pin',
        iconSize: [36, 46],
        iconAnchor: [18, 46],
        popupAnchor: [0, -46],
      });

      const marker = L.marker(activeStudio.coords, { icon: customIcon }).addTo(map);
      markerRef.current = marker;

      // Check if user has panned away from active studio
      const checkCenterDistance = () => {
        if (!mapInstanceRef.current) return;
        const currentCenter = mapInstanceRef.current.getCenter();
        const dist = mapInstanceRef.current.distance(currentCenter, L.latLng(activeStudio.coords));
        // If moved more than 200 meters away, show relocation button
        setIsMovedAway(dist > 200);
      };

      map.on('moveend', checkCenterDistance);
      setMapLoaded(true);
    };

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [activeStudio]);

  // Synchronize mobile map dragging with isMapInteractable state
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile) {
      if (isMapInteractable) {
        mapInstanceRef.current.dragging.enable();
      } else {
        mapInstanceRef.current.dragging.disable();
      }
    } else {
      mapInstanceRef.current.dragging.enable();
    }
  }, [isMapInteractable]);

  // Handle Ctrl + Scroll Wheel Zoom & Non-Intrusive Tutorial Toast
  useEffect(() => {
    const wrapper = mapWrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e) => {
      // Check if user is holding Ctrl, Meta (Cmd on Mac), or Alt key
      const isZoomKey = e.ctrlKey || e.metaKey || e.altKey;

      if (isZoomKey) {
        e.preventDefault(); // Stop normal page scroll and browser zoom
        e.stopPropagation();

        // Hide tutorial hint when actively zooming
        setShowZoomHint(false);
        if (hintTimeoutRef.current) {
          clearTimeout(hintTimeoutRef.current);
        }

        if (mapInstanceRef.current) {
          const now = Date.now();
          if (now - lastZoomTimeRef.current > 120) {
            lastZoomTimeRef.current = now;
            if (e.deltaY < 0) {
              mapInstanceRef.current.zoomIn(1);
            } else if (e.deltaY > 0) {
              mapInstanceRef.current.zoomOut(1);
            }
          }
        }
      } else {
        // User scrolls over map WITHOUT Ctrl/Cmd
        // Do NOT preventDefault -> page scrolls smoothly and naturally
        setShowZoomHint(true);
        if (hintTimeoutRef.current) {
          clearTimeout(hintTimeoutRef.current);
        }
        hintTimeoutRef.current = setTimeout(() => {
          setShowZoomHint(false);
        }, 1200);
      }
    };

    wrapper.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener('wheel', handleWheel);
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, [mapLoaded]);

  // Re-center / Relocate back to studio location
  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(activeStudio.coords, activeStudio.zoom, {
        duration: 1.2,
      });
      setIsMovedAway(false);
    }
  };

  // Zoom In / Zoom Out Controls
  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn(1);
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut(1);
    }
  };

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-[#E5DFD7] bg-white shadow-xl select-none">
      {/* Top Gold Border Accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#DFC294] to-transparent" />

      {/* Studio Location Top Bar (Sri Lanka Colombo Atelier) */}
      <div className="p-4 sm:p-6 bg-[#FAF9F4] border-b border-[#E5DFD7] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181614] text-white shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
            <span className="font-technical-label text-xs tracking-wider uppercase font-medium">
              Colombo Headquarters &bull; Sri Lanka
            </span>
          </div>
          <span className="hidden md:inline-block font-technical-label text-[11px] text-[#A48A7A] uppercase tracking-widest">
            33, 1 Narahenpita – Nawala Rd
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={activeStudio.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-technical-label text-[11px] tracking-wider uppercase text-[#181614] hover:text-[#A48A7A] underline underline-offset-4 transition-colors font-medium flex items-center gap-1.5"
          >
            <span>Open in Google Maps</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Main Map Canvas Area */}
      <div
        ref={mapWrapperRef}
        {...(isMapInteractable ? { 'data-lenis-prevent': 'true' } : {})}
        className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] overflow-hidden"
      >
        <style jsx global>{`
          .leaflet-tile-pane {
            filter: grayscale(88%) contrast(95%) brightness(98%);
            will-change: transform;
          }
          .leaflet-container {
            background-color: #FAF9F4 !important;
            font-family: inherit;
            touch-action: ${isMapInteractable ? 'none' : 'pan-y'} !important;
          }
          .custom-leaflet-pin {
            background: transparent !important;
            border: none !important;
          }
        `}</style>
        
        {/* Leaflet Map DOM Container */}
        <div ref={mapContainerRef} className="w-full h-full z-0 bg-[#FAF9F4]" />

        {/* Subtle Architectural Luxury Warm Tone Veil */}
        <div className="absolute inset-0 pointer-events-none z-[350] bg-[#FAF9F4]/10 mix-blend-color" />

        {/* Luxury Non-Intrusive Ctrl+Scroll Tutorial Toast Overlay */}
        {showZoomHint && (
          <div className="absolute inset-0 z-[450] flex items-center justify-center pointer-events-none transition-all duration-200">
            <div className="px-5 py-2.5 rounded-full bg-[#181614]/90 backdrop-blur-md border border-[#DFC294]/50 shadow-2xl text-center flex items-center gap-2.5 animate-in fade-in zoom-in-95">
              <span className="px-2 py-0.5 rounded bg-[#25221E] border border-[#DFC294]/60 text-[#DFC294] font-mono text-[11px] font-bold">
                Ctrl
              </span>
              <span className="text-[#FAF9F4]/70 text-xs">+</span>
              <span className="text-[#FAF9F4] font-technical-label text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                Scroll to zoom atelier map
              </span>
            </div>
          </div>
        )}

        {/* Mobile Single-Finger Page Scroll vs Map Pan Mode Toggle */}
        <div className="md:hidden absolute bottom-6 left-4 z-[400]">
          {isMapInteractable ? (
            <button
              type="button"
              onClick={() => setIsMapInteractable(false)}
              className="px-3.5 py-2 rounded-full bg-[#DFC294] text-[#181614] border border-[#181614] shadow-2xl font-technical-label text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer active:scale-95 transition-all animate-pulse"
              aria-label="Lock map to scroll page"
            >
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Map Active &bull; Lock Scroll</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsMapInteractable(true)}
              className="px-3.5 py-2 rounded-full bg-[#181614]/90 text-[#FAF9F4] border border-[#DFC294]/50 shadow-xl font-technical-label text-[10px] uppercase tracking-wider flex items-center gap-2 cursor-pointer active:scale-95 transition-all backdrop-blur-sm"
              aria-label="Unlock map to pan"
            >
              <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
              <span>Tap to Pan Map</span>
            </button>
          )}
        </div>

        {/* Persistent Subtle Helper Pill (Desktop Bottom Left) */}
        <div className="absolute bottom-6 left-4 sm:left-6 z-[390] pointer-events-none hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181614]/85 backdrop-blur-md border border-[#DFC294]/35 shadow-xl text-[#FAF9F4]">
          <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
          <span className="font-technical-label text-[10px] uppercase tracking-widest text-[#FAF9F4]/90">
            <span className="text-[#DFC294] font-semibold">Ctrl + Scroll</span> &bull; Zoom Atelier Map
          </span>
        </div>

        {/* Floating Relocation / Recenter Button (Appears when user moves the map) */}
        {isMovedAway && (
          <button
            type="button"
            onClick={handleRecenter}
            className="hidden sm:flex absolute top-6 right-6 z-[400] px-4 py-2.5 rounded-full bg-[#181614] text-[#DFC294] border border-[#DFC294]/50 shadow-2xl hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 font-technical-label text-xs uppercase tracking-widest items-center gap-2 cursor-pointer animate-in fade-in slide-in-from-top-2"
          >
            <svg className="w-4 h-4 animate-spin-slow stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span>Recenter Studio Location</span>
          </button>
        )}

        {/* Floating Zoom Controls (+ / -) & Recenter Target Icon */}
        <div className="absolute bottom-6 right-4 sm:right-6 z-[400] flex flex-col gap-2 shadow-xl">
          <button
            type="button"
            onClick={handleZoomIn}
            className="w-10 h-10 rounded-full bg-white text-[#181614] border border-[#E5DFD7] hover:bg-[#181614] hover:text-[#DFC294] hover:border-[#181614] transition-all duration-200 flex items-center justify-center text-lg font-light cursor-pointer shadow-md"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="w-10 h-10 rounded-full bg-white text-[#181614] border border-[#E5DFD7] hover:bg-[#181614] hover:text-[#DFC294] hover:border-[#181614] transition-all duration-200 flex items-center justify-center text-lg font-light cursor-pointer shadow-md"
            aria-label="Zoom out"
          >
            &minus;
          </button>
          <button
            type="button"
            onClick={handleRecenter}
            className="w-10 h-10 rounded-full bg-[#181614] text-[#DFC294] border border-[#DFC294]/60 hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Recenter Map"
            title="Recenter Studio Location"
          >
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </button>
        </div>

        {/* Floating Architectural Atelier Dossier Card */}
        <div
          className={`absolute top-4 left-4 sm:top-6 sm:left-6 z-[400] max-w-xs sm:max-w-sm w-[calc(100%-2rem)] sm:w-[360px] bg-[#FAF9F4]/95 backdrop-blur-xl rounded-3xl border border-[#E5DFD7] shadow-2xl overflow-hidden pointer-events-auto transition-all duration-300 ${
            isCardCollapsed ? 'shadow-lg md:max-h-[85%]' : 'max-h-[85%]'
          }`}
        >
          {/* Subtle Top Gold Accent Line */}
          <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#DFC294] to-transparent" />

          {/* Compact Bar with Toggle */}
          <div className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 bg-[#FAF9F4] ${isCardCollapsed ? 'border-b-0 md:border-b' : 'border-b'} border-[#E5DFD7]/80`}>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#DFC294] animate-pulse" />
              <div>
                <h3 className="heading-2--serif text-base sm:text-lg text-[#181614] font-normal leading-tight">
                  Design ark (Pvt) Ltd.
                </h3>
                <span className="font-technical-label text-[9px] text-[#A48A7A] uppercase tracking-wider block font-semibold">
                  Colombo Atelier &bull; 5.0 &#9733;
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsCardCollapsed(!isCardCollapsed)}
              className="md:hidden px-3 py-1 rounded-full bg-[#181614] text-[#DFC294] hover:bg-[#DFC294] hover:text-[#181614] transition-colors font-technical-label text-[10px] uppercase tracking-wider font-semibold cursor-pointer shrink-0 shadow-sm"
              aria-label={isCardCollapsed ? "Expand atelier details" : "Collapse atelier details"}
            >
              {isCardCollapsed ? "Details +" : "Map View −"}
            </button>
          </div>

          <div className={`${isCardCollapsed ? 'hidden md:block' : 'block'} max-h-[580px] overflow-y-auto modal-custom-scrollbar`}>
            {/* Real Studio Interior Photo Banner */}
            <div className="relative w-full h-32 sm:h-36 bg-[#ECE8DF] overflow-hidden">
              <Image
                src="/images/studio/studio-lounge.jpeg"
                alt="Design Ark (Pvt) Ltd. — Colombo Studio Interior"
                fill
                sizes="(max-width: 768px) 320px, 360px"
                priority
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Ambient Dark Gradient for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181614]/80 via-[#181614]/20 to-black/20" />
              
              {/* Top Status Capsule */}
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center gap-1.5 font-technical-label text-[9px] font-medium text-[#FAF9F4] bg-[#181614]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#DFC294]/40 shadow-lg tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFC294] animate-pulse" />
                  Open Today
                </span>
              </div>

              {/* Bottom Title Metadata on Image */}
              <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between">
                <span className="font-technical-label text-[9px] tracking-[0.2em] uppercase text-[#DFC294] font-semibold drop-shadow">
                  SRI LANKA HEADQUARTERS
                </span>
                <span className="font-technical-label text-[9px] tracking-wider uppercase text-white/70 font-light">
                  ATELIER CARTOGRAPHY
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 space-y-3.5 bg-white/80">
              {/* Bespoke Architectural Tabs: Overview | Patron Reviews */}
              <div className="flex border-b border-[#E5DFD7] text-xs font-technical-label tracking-widest uppercase gap-6">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 transition-all font-medium border-b-2 cursor-pointer relative ${
                  activeTab === 'overview'
                    ? 'border-[#181614] text-[#181614]'
                    : 'border-transparent text-[#181614]/40 hover:text-[#181614]'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('reviews')}
                className={`pb-2.5 transition-all font-medium border-b-2 cursor-pointer relative ${
                  activeTab === 'reviews'
                    ? 'border-[#181614] text-[#181614]'
                    : 'border-transparent text-[#181614]/40 hover:text-[#181614]'
                }`}
              >
                Patron Reviews (6)
              </button>
            </div>

            {activeTab === 'overview' ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* 4 Bespoke Architectural Action Capsules */}
                <div className="grid grid-cols-4 gap-2 font-technical-label text-[9px] text-center">
                  <a
                    href={activeStudio.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-2xl bg-[#181614] text-[#FAF9F4] hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 cursor-pointer shadow-sm group"
                  >
                    <svg className="w-4 h-4 mb-1 stroke-current fill-none transform group-hover:-translate-y-0.5 transition-transform" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2L19 21L12 17L5 21L12 2Z" />
                    </svg>
                    <span className="tracking-wider uppercase font-medium">Routes</span>
                  </a>

                  <a
                    href={`tel:${activeStudio.phone.replace(/\s+/g, '')}`}
                    className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-2xl bg-[#FAF9F4] text-[#181614] border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-all duration-300 cursor-pointer shadow-sm group"
                  >
                    <svg className="w-4 h-4 mb-1 stroke-current fill-none transform group-hover:scale-110 transition-transform" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="tracking-wider uppercase font-medium">Call</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(activeStudio.address)}
                    className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-2xl bg-[#FAF9F4] text-[#181614] border border-[#E5DFD7] hover:border-[#181614] hover:bg-[#181614] hover:text-white transition-all duration-300 cursor-pointer shadow-sm group"
                  >
                    <svg className="w-4 h-4 mb-1 stroke-current fill-none transform group-hover:scale-110 transition-transform" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span className="tracking-wider uppercase font-medium">
                      {copiedAddress ? 'Copied' : 'Copy'}
                    </span>
                  </button>

                  <a
                    href="https://wa.me/94770000000?text=Hello%20Design%20Ark%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-2xl bg-[#181614] text-[#DFC294] border border-[#DFC294]/40 hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 cursor-pointer shadow-sm group"
                  >
                    <svg className="w-4 h-4 mb-1 fill-current transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 3.67C16.58 3.67 20.28 7.37 20.28 11.92C20.28 16.46 16.58 20.17 12.05 20.17C10.6 20.17 9.18 19.79 7.93 19.05L7.63 18.87L4.53 19.68L5.36 16.66L5.16 16.34C4.34 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67Z"/>
                    </svg>
                    <span className="tracking-wider uppercase font-medium">WhatsApp</span>
                  </a>
                </div>

                {/* Studio Architectural Coordinates & Hours */}
                <div className="space-y-2.5 pt-3 border-t border-[#E5DFD7] text-xs text-[#181614]/85 font-light">
                  <div className="flex items-start gap-3">
                    <span className="text-[#DFC294] mt-0.5 text-xs font-mono">01</span>
                    <div>
                      <span className="font-technical-label text-[9px] uppercase tracking-wider text-[#A48A7A] block font-bold">
                        Studio Address
                      </span>
                      <span className="leading-snug text-[13px]">{activeStudio.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <span className="text-[#DFC294] mt-0.5 text-xs font-mono">02</span>
                    <div>
                      <span className="font-technical-label text-[9px] uppercase tracking-wider text-[#A48A7A] block font-bold">
                        Consultation Hours
                      </span>
                      <span className="text-[13px]">{activeStudio.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <span className="text-[#DFC294] mt-0.5 text-xs font-mono">03</span>
                    <div>
                      <span className="font-technical-label text-[9px] uppercase tracking-wider text-[#A48A7A] block font-bold">
                        Cartography Code
                      </span>
                      <span className="font-mono text-xs text-[#181614]/75">{activeStudio.plusCode}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 pt-1 animate-in fade-in duration-200">
                <div className="p-4 rounded-2xl bg-[#FAF9F4] border border-[#E5DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-technical-label text-xs font-semibold text-[#181614] uppercase tracking-wider">
                      Private Residential Patron
                    </span>
                    <div className="flex text-[#DFC294] text-xs">★★★★★</div>
                  </div>
                  <p className="text-xs text-[#181614]/80 font-light leading-relaxed italic">
                    &ldquo;Design Ark realized our Colombo residence with exceptional architectural clarity and impeccable natural material finishes.&rdquo;
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F4] border border-[#E5DFD7] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-technical-label text-xs font-semibold text-[#181614] uppercase tracking-wider">
                      Commercial Workplace Client
                    </span>
                    <div className="flex text-[#DFC294] text-xs">★★★★★</div>
                  </div>
                  <p className="text-xs text-[#181614]/80 font-light leading-relaxed italic">
                    &ldquo;Delivered our bespoke office turnkey on time and on budget. Master craftsmanship on all timber joinery.&rdquo;
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

      {/* Bottom Architectural Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#E5DFD7] bg-[#FAF9F4] text-xs text-[#181614]/80 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DFD7]">
        <div className="p-6 space-y-1">
          <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
            PATRON ACCESS &amp; PARKING
          </span>
          <p className="font-light text-[#181614]/75 leading-relaxed">
            Dedicated private parking along the Narahenpita – Nawala studio frontage.
          </p>
        </div>
        <div className="p-6 space-y-1">
          <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
            ATELIER &amp; WORKSPACE CONSULTATIONS
          </span>
          <p className="font-light text-[#181614]/75 leading-relaxed">
            Monday to Friday &bull; 09:00 – 17:00 (Saturday reviews by prior arrangement).
          </p>
        </div>
        <div className="p-6 space-y-1">
          <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#A48A7A] block font-bold">
            MATERIAL SAMPLES &amp; ARCHIVES
          </span>
          <p className="font-light text-[#181614]/75 leading-relaxed">
            Physical archives of natural travertine, granite, tailored millwork, and joinery.
          </p>
        </div>
      </div>
    </div>
  );
}
