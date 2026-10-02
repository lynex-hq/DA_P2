'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import ProjectDrawer from '@/components/ProjectDrawer';
import ScrollCurvedCorners from '@/components/ScrollCurvedCorners';

const INTERIOR_ARCHIVE = [
  {
    id: 'pavilion-boardroom',
    code: '01',
    category: 'Commercial & Corporate',
    title: 'The Pavilion Glass Boardroom',
    location: 'Colombo 07, Sri Lanka',
    year: '2024',
    area: '2,800 SQ FT',
    image: images.projectBoardroomPavilion,
    narrative: 'A glass-wrapped executive boardroom pavilion featuring a monolithic Calacatta marble conference table, gold insignia inlays, and uninterrupted tropical reflection pool vistas.',
    materials: ['Calacatta Marble', 'Brushed Brass', 'Acoustic Glazing', 'Solid Teak'],
    bullets: [
      'Monolithic Calacatta marble conference table with integrated power channels',
      'Frameless structural glass perimeter overlooking tropical reflection pool',
      'Design Ark signature gold insignia inlays and custom ergonomic leather armchairs',
    ],
  },
  {
    id: 'eguardian-hq',
    code: '02',
    category: 'Commercial & Corporate',
    title: 'EGUARDIAN Corporate Headquarters',
    location: 'Colombo 03, Sri Lanka',
    year: '2024',
    area: '8,500 SQ FT',
    image: images.projectEguardianHq,
    narrative: 'Full turnkey fit-out for EGUARDIAN technology headquarters, featuring exposed architectural concrete statement walls, open-plan collaborative workstations, and biophilic snake plant privacy dividers.',
    materials: ['Architectural Concrete', 'Acoustic Wood Slats', 'Matte Black Steel', 'Living Sansevieria'],
    bullets: [
      'Raw concrete architectural accent wall bearing company manifesto',
      'Integrated acoustic wood slat partitions and custom task lighting',
      'Biophilic snake-plant troughs separating collaborative team clusters',
    ],
  },
  {
    id: 'kirsche-boutique',
    code: '03',
    category: 'Retail & Hospitality',
    title: 'Kirsche Commercial Flagship',
    location: 'Colombo 07, Sri Lanka',
    year: '2024',
    area: '3,200 SQ FT',
    image: images.projectKirscheBoutique,
    narrative: 'An architectural commercial storefront and boutique showroom showcasing an illuminated 3D golden facade, frameless glass displays, and precision vitrine illumination.',
    materials: ['Gold Leaf Stainless', 'Optiwhite Glass', 'Fluted Plaster', 'Travertine'],
    bullets: [
      'Illuminated 3D golden Kirsche storefront facade and exterior canopy',
      'Custom frameless tempered glass display vitrines with warm LED reveals',
      'Curated retail floorplan with acoustic ceiling baffles and limestone floors',
    ],
  },
  {
    id: 'alluring-jewellery',
    code: '04',
    category: 'Retail & Hospitality',
    title: 'Alluring Fine Jewellery Atelier',
    location: 'Colombo, Sri Lanka',
    year: '2024',
    area: '2,100 SQ FT',
    image: images.projectAlluringJewellery,
    narrative: 'An opulent private jewellery boutique pairing crystal chandeliers with brushed gold vitrines, velvet consultation lounges, and calibrated diamond illumination.',
    materials: ['Brushed Gold Brass', 'Crystal Glass', 'Emerald Velvet', 'Botticino Marble'],
    bullets: [
      'Tiered crystal chandelier delivering calibrated color-accurate luxury illuminance',
      'Custom high-security gold-framed glass vitrines and velvet presentation trays',
      'Private client consultation salon wrapped in acoustically buffered paneling',
    ],
  },
  {
    id: 'aurelia-residence',
    code: '05',
    category: 'Private Residential',
    title: 'The Aurelia Master Suite',
    location: 'Colombo 07, Sri Lanka',
    year: '2024',
    area: '4,600 SQ FT',
    image: images.projectAureliaResidence,
    narrative: 'A master residential bedroom sanctuary anchored by an architectural gold geometric headboard wall, motorized fluted joinery, and a bookmatched backlit onyx vanity.',
    materials: ['Backlit Onyx', 'Fluted Oak', 'Burnished Brass', 'Warm Belgian Linen'],
    bullets: [
      'Bespoke illuminated geometric headboard with integrated brass reading channels',
      'Floor-to-ceiling motorized fluted wardrobes with warm interior sensor illumination',
      'Hand-finished backlit vanity plinth with unlacquered brass tapware',
    ],
  },
  {
    id: 'dining-salon',
    code: '06',
    category: 'Private Residential',
    title: 'Grand Living & Dining Salon',
    location: 'Colombo, Sri Lanka',
    year: '2024',
    area: '3,800 SQ FT',
    image: images.projectDiningSalon,
    narrative: 'An expansive open-concept living and dining salon unifying custom brass sputnik illumination, polished Arabescato marble dining tables, and plush velvet lounge seating.',
    materials: ['Arabescato Marble', 'Acoustic Timber Slats', 'Aged Brass', 'Velvet Upholstery'],
    bullets: [
      'Sculptural brass sputnik chandelier suspended over custom marble dining suite',
      'Acoustic vertical timber slat wall separating salon from private quarters',
      'Polished hardwood timber flooring with concealed perimeter ambient uplighting',
    ],
  },
  {
    id: 'executive-suites',
    code: '07',
    category: 'Commercial & Corporate',
    title: 'Executive Enclave Glass Cube Suites',
    location: 'Colombo, Sri Lanka',
    year: '2024',
    area: '5,200 SQ FT',
    image: images.projectExecutiveSuites,
    narrative: 'High-performance executive office suites framed in black acoustic glass, suspended circular halo luminaires, and warm fluted timber wall finishes.',
    materials: ['Double Acoustic Glass', 'Anodized Black Aluminum', 'Fluted Walnut', 'Ergonomic Mesh'],
    bullets: [
      'Suspended geometric halo luminaires calibrated for glare-free digital work',
      'Double-glazed acoustic partitions providing 48dB speech privacy',
      'Bespoke executive desks with concealed cable management and leather inlays',
    ],
  },
  {
    id: 'eguardian-lounge',
    code: '08',
    category: 'Commercial & Corporate',
    title: 'Corporate Breakout & Collaboration Alcove',
    location: 'Colombo 03, Sri Lanka',
    year: '2024',
    area: '3,400 SQ FT',
    image: images.projectBreakoutAlcove,
    narrative: 'A casual corporate breakout lounge designed for informal team alignment, featuring custom acoustic banquettes, writeable wall surfaces, and integrated coffee bar.',
    materials: ['Matte Concrete', 'Ribbed Oak', 'Commercial Bouclé', 'Black Granite'],
    bullets: [
      'Custom curved acoustic banquette seating in high-durability bouclé fabric',
      'Integrated barista bar with matte black granite countertops and brass accents',
      'Modular collaboration tables adaptable for town halls and sprint reviews',
    ],
  },
];

const CATEGORIES = [
  'All Interiors',
  'Commercial & Corporate',
  'Retail & Hospitality',
  'Private Residential',
];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Interiors');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Interiors') return INTERIOR_ARCHIVE;
    return INTERIOR_ARCHIVE.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-hidden select-none">
      {/* 1. Cinematic Architectural Hero Banner */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 bg-[#141210] text-[#FAF9F4] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.macourtMedia}
            alt="Design Ark Interior Works Archive"
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
            <span>COMMISSION ARCHIVE &bull; RESIDENTIAL &amp; ATELIERS</span>
          </div>
          <span className="font-technical-label text-[10px] tracking-widest text-white/50 uppercase">
            {INTERIOR_ARCHIVE.length} CURATED COMMISSIONS
          </span>
        </div>

        {/* Center Hero Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-20 space-y-6">
          <h1 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F4] font-normal leading-[1.08] tracking-tight">
            Curated Interior <br />
            <span className="font-serif italic font-normal text-[#DFC294]">Architecture.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-[#FAF9F4]/75 font-light leading-relaxed">
            A portfolio of private residential interiors, sculptural culinary ateliers, and bespoke dressing suites. Each commission unites natural stone, tailored millwork, and refined acoustics.
          </p>
        </div>

        {/* Bottom Category Filter Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-3 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-technical-label text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#DFC294] text-[#181614] font-semibold shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll-Linked Inverted Bottom Curve Cutouts */}
        <ScrollCurvedCorners fillColor="#FAF9F4" />
      </section>

      {/* 2. Flagship Commission Spotlight (Homepage Obsidian Contrast) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-24">
        <div className="relative w-full py-16 sm:py-24 px-8 sm:px-12 md:px-16 bg-[#0E0D0B] text-[#FAF9F4] rounded-3xl overflow-hidden shadow-2xl">
          <div className="space-y-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 font-technical-label text-[9px] tracking-widest uppercase text-[#DFC294]">
                  FLAGSHIP SPOTLIGHT
                </span>
                <h2 className="heading-2--serif text-3xl sm:text-5xl text-white font-normal">
                  The Zurich Penthouse Salon.
                </h2>
              </div>
              <p className="text-sm text-white/60 font-light max-w-md">
                Double-height monolithic Navona travertine fireplace with fluted smoked oak joinery and integrated acoustic profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div
                onClick={() => setActiveProject(INTERIOR_ARCHIVE[0])}
                className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group"
              >
                <Image
                  src={images.macourtMedia}
                  alt="Zurich Penthouse Salon"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294] font-bold">
                    CLICK TO INSPECT BLUEPRINTS &amp; MATERIALS
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#DFC294] text-[#181614] flex items-center justify-center text-xs font-bold group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294]">
                    MATERIAL PALETTE &bull; 4,800 SQ FT
                  </span>
                  <h3 className="heading-2--serif text-2xl sm:text-3xl text-white">
                    Quiet Structural Grandeur
                  </h3>
                </div>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  Organized around a central monolithic stone hearth, this penthouse salon delivers panoramic alpine views balanced by the tactile warmth of European bouclé and calibrated cove lighting.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {INTERIOR_ARCHIVE[0].materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-technical-label text-[10px] tracking-wider uppercase text-[#DFC294]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filterable Commissions Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-20 space-y-12">
        <div className="flex items-center justify-between border-b border-[#E5DFD7] pb-6">
          <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
            SHOWING {filteredProjects.length} OF {INTERIOR_ARCHIVE.length} COMMISSIONS
          </span>
          <span className="font-technical-label text-xs text-[#181614]/60">
            Category: <strong className="text-[#181614]">{selectedCategory}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer space-y-6 flex flex-col justify-between"
            >
              {/* Project Image Card with Hover Depth */}
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden bg-[#ECE8DF] border border-[#E5DFD7] shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Code & Category Tag */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#181614]/90 backdrop-blur-md text-white font-technical-label text-[10px] tracking-widest uppercase font-bold">
                    {project.code}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#181614] font-technical-label text-[10px] tracking-wider uppercase font-medium border border-black/5 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Area Badge */}
                <div className="absolute bottom-5 right-5 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FAF9F4]/90 backdrop-blur-md text-[#181614] font-technical-label text-[10px] tracking-widest uppercase font-semibold border border-[#E5DFD7]">
                    {project.area}
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A48A7A] font-technical-label tracking-widest uppercase">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="heading-2--serif text-2xl sm:text-3xl text-[#181614] group-hover:text-[#A48A7A] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#181614]/70 font-light leading-relaxed line-clamp-2">
                  {project.narrative}
                </p>

                {/* Materials Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-[#E5DFD7] text-[10px] font-technical-label text-[#181614]/70 uppercase tracking-wider"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 font-technical-label text-xs uppercase tracking-wider text-[#181614] font-semibold group-hover:text-[#DFC294] transition-colors">
                  <span>Inspect Case Study</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Slide-Out Project Detail Drawer */}
      <ProjectDrawer
        project={activeProject}
        isOpen={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
      />

      {/* 5. Closing Consultation CTA */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pt-6 pb-24 text-center space-y-6">
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-[#181614] to-[#100F0E] text-[#FAF9F4] space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294]">
            BESPOKE COMMISSIONS
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-5xl font-normal text-white">
            Have a Specific Architectural Vision?
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto">
            We collaborate with private patrons and real estate trusts to realize bespoke residential interiors across Switzerland, Europe, and Asia.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-technical-label text-xs uppercase tracking-wider">
            <Link
              href="/contact_us"
              className="px-8 py-4 rounded-full bg-[#DFC294] text-[#181614] hover:bg-white transition-all font-semibold shadow-lg cursor-pointer"
            >
              Commission Design Ark &rarr;
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-white transition-all font-medium cursor-pointer"
            >
              Review Turnkey Disciplines
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
