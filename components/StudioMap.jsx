'use client';

import { useState, useEffect, useRef } from 'react';

const STUDIO = {
  name: 'Design ark (Pvt) Ltd.',
  address: '33, 1 Narahenpita - Nawala Rd, Colombo 00500, Sri Lanka',
  coords: [6.8872552, 79.8858173],
  zoom: 16,
  googleMapsUrl: 'https://www.google.com/maps/place/Design+ark+(Pvt)+Ltd./@6.8872552,79.8858173,17z',
  directionsUrl: 'https://www.google.com/maps/dir//Design+ark+(Pvt)+Ltd.,+33,+1+Narahenpita+-+Nawala+Rd,+Colombo+00500/@6.8872552,79.8858173,17z',
};

export default function StudioMap() {
  const mapWrapperRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isMovedAway, setIsMovedAway] = useState(false);
  const [showZoomHint, setShowZoomHint] = useState(false);

  const hintTimeoutRef = useRef(null);
  const lastZoomTimeRef = useRef(0);

  useEffect(() => {
    let isMounted = true;

    const initLeaflet = async () => {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;

      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const L = (await import('leaflet')).default;
      if (!isMounted || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const map = L.map(mapContainerRef.current, {
        center: STUDIO.coords,
        zoom: STUDIO.zoom,
        zoomSnap: 1,
        zoomDelta: 1,
        wheelPxPerZoomLevel: 100,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false, // Handled seamlessly via Ctrl/Cmd + wheel gesture
        touchZoom: true,
        doubleClickZoom: true,
        fadeAnimation: true,
        zoomAnimation: true,
        markerZoomAnimation: true,
      });

      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const customPinHtml = `
        <div class="relative flex flex-col items-center justify-center cursor-pointer group" style="width: 36px; height: 46px;">
          <div class="absolute bottom-0 w-6 h-6 rounded-full bg-[#EA4335]/30 animate-ping -mb-1"></div>
          <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.35));">
            <path d="M18 0C8.05887 0 0 8.05887 0 18C0 31.5 18 46 18 46C18 46 36 31.5 36 18C36 8.05887 27.9411 0 18 0Z" fill="url(#mapPinGrad)"/>
            <defs>
              <linearGradient id="mapPinGrad" x1="0" y1="0" x2="36" y2="46" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EA4335"/>
                <stop offset="100%" stop-color="#C5221F"/>
              </linearGradient>
            </defs>
            <circle cx="18" cy="17" r="7.5" fill="#FFFFFF"/>
            <circle cx="18" cy="17" r="4" fill="#C5221F"/>
          </svg>
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

      const marker = L.marker(STUDIO.coords, { icon: customIcon }).addTo(map);

      marker.bindPopup(`
        <div style="font-family: inherit; padding: 4px 2px; text-align: left;">
          <strong style="font-size: 13px; color: #181614; display: block; margin-bottom: 2px;">${STUDIO.name}</strong>
          <span style="font-size: 11px; color: #7A624A; display: block; margin-bottom: 8px;">${STUDIO.address}</span>
          <a href="${STUDIO.directionsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; color: #FAF9F4; background: #181614; padding: 4px 10px; border-radius: 9999px; text-decoration: none; font-weight: 600;">Directions &rarr;</a>
        </div>
      `);

      map.on('moveend', () => {
        if (!mapInstanceRef.current) return;
        const currentCenter = mapInstanceRef.current.getCenter();
        const dist = mapInstanceRef.current.distance(currentCenter, L.latLng(STUDIO.coords));
        setIsMovedAway(dist > 200);
      });
    };

    initLeaflet();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Ctrl / Cmd + Scroll Wheel Zoom & Non-Intrusive Helper Toast
  useEffect(() => {
    const wrapper = mapWrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e) => {
      const isZoomKey = e.ctrlKey || e.metaKey || e.altKey;

      if (isZoomKey) {
        e.preventDefault();
        e.stopPropagation();

        setShowZoomHint(false);
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);

        if (mapInstanceRef.current) {
          const now = Date.now();
          if (now - lastZoomTimeRef.current > 100) {
            lastZoomTimeRef.current = now;
            if (e.deltaY < 0) {
              mapInstanceRef.current.zoomIn(1);
            } else if (e.deltaY > 0) {
              mapInstanceRef.current.zoomOut(1);
            }
          }
        }
      } else {
        // Normal scroll without Ctrl -> allow smooth page scroll and show brief hint
        setShowZoomHint(true);
        if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
        hintTimeoutRef.current = setTimeout(() => {
          setShowZoomHint(false);
        }, 1200);
      }
    };

    wrapper.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener('wheel', handleWheel);
      if (hintTimeoutRef.current) clearTimeout(hintTimeoutRef.current);
    };
  }, []);

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(STUDIO.coords, STUDIO.zoom, { duration: 1.2 });
      setIsMovedAway(false);
    }
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomIn(1);
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) mapInstanceRef.current.zoomOut(1);
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-[#E5DFD7] overflow-hidden bg-white shadow-lg">
      {/* Top Header Bar */}
      <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FAF9F4] border-b border-[#E5DFD7] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335] shrink-0 animate-pulse" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5 min-w-0">
            <span className="heading-2--serif text-sm sm:text-base text-[#181614] font-medium truncate">
              {STUDIO.name}
            </span>
            <span className="font-technical-label text-[10px] sm:text-xs text-[#A48A7A] truncate">
              {STUDIO.address}
            </span>
          </div>
        </div>

        <a
          href={STUDIO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181614] text-[#FAF9F4] hover:bg-[#DFC294] hover:text-[#181614] font-technical-label text-[10px] sm:text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-sm ml-auto sm:ml-0"
        >
          <span>Open in Google Maps</span>
          <span>&rarr;</span>
        </a>
      </div>

      {/* Map View Canvas Area */}
      <div
        ref={mapWrapperRef}
        className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] overflow-hidden select-none"
      >
        <style jsx global>{`
          .leaflet-tile-pane {
            filter: grayscale(88%) contrast(95%) brightness(98%);
            will-change: transform;
          }
          .leaflet-container {
            background-color: #FAF9F4 !important;
            font-family: inherit;
          }
          .custom-leaflet-pin {
            background: transparent !important;
            border: none !important;
          }
        `}</style>

        <div ref={mapContainerRef} className="w-full h-full z-0 bg-[#FAF9F4]" />

        {/* Subtle Non-Intrusive Ctrl+Scroll Zoom Hint Toast */}
        {showZoomHint && (
          <div className="absolute inset-0 z-[450] flex items-center justify-center pointer-events-none transition-all duration-200">
            <div className="px-5 py-2.5 rounded-full bg-[#181614]/90 backdrop-blur-md border border-[#DFC294]/50 shadow-2xl text-center flex items-center gap-2.5 animate-in fade-in zoom-in-95">
              <span className="px-2 py-0.5 rounded bg-[#25221E] border border-[#DFC294]/60 text-[#DFC294] font-mono text-[11px] font-bold">
                Ctrl
              </span>
              <span className="text-[#FAF9F4]/70 text-xs">+</span>
              <span className="text-[#FAF9F4] font-technical-label text-[10px] sm:text-[11px] tracking-wider uppercase font-medium">
                Scroll to zoom map
              </span>
            </div>
          </div>
        )}

        {/* Floating Recenter Button */}
        {isMovedAway && (
          <button
            type="button"
            onClick={handleRecenter}
            className="absolute top-4 right-4 z-[400] px-3.5 py-2 rounded-full bg-[#181614] text-[#DFC294] border border-[#DFC294]/50 shadow-xl hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-300 font-technical-label text-[10px] uppercase tracking-wider flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span>Recenter</span>
          </button>
        )}

        {/* Subtle Desktop Bottom Left Helper Pill */}
        <div className="absolute bottom-4 left-4 z-[400] pointer-events-none hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181614]/80 backdrop-blur-md border border-[#DFC294]/30 shadow-lg text-[#FAF9F4]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DFC294] animate-pulse" />
          <span className="font-technical-label text-[9px] uppercase tracking-wider text-[#FAF9F4]/90">
            <span className="text-[#DFC294] font-semibold">Ctrl + Scroll</span> to zoom
          </span>
        </div>

        {/* Floating Zoom Controls (+ / -) & Recenter Target Icon */}
        <div className="absolute bottom-4 right-4 z-[400] flex flex-col gap-2">
          <button
            type="button"
            onClick={handleZoomIn}
            className="w-9 h-9 rounded-full bg-white text-[#181614] border border-[#E5DFD7] hover:bg-[#181614] hover:text-[#DFC294] hover:border-[#181614] transition-all duration-200 flex items-center justify-center text-base font-light cursor-pointer shadow-md"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            className="w-9 h-9 rounded-full bg-white text-[#181614] border border-[#E5DFD7] hover:bg-[#181614] hover:text-[#DFC294] hover:border-[#181614] transition-all duration-200 flex items-center justify-center text-base font-light cursor-pointer shadow-md"
            aria-label="Zoom out"
          >
            &minus;
          </button>
          <button
            type="button"
            onClick={handleRecenter}
            className="w-9 h-9 rounded-full bg-[#181614] text-[#DFC294] border border-[#DFC294]/60 hover:bg-[#DFC294] hover:text-[#181614] transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md"
            aria-label="Recenter Map"
            title="Recenter Studio Location"
          >
            <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
