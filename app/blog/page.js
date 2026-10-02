'use client';

import Image from 'next/image';
import Link from 'next/link';
import { images } from '@/lib/images';
import ScrollCurvedCorners from '@/components/ScrollCurvedCorners';

const FEATURED_ARTICLE = {
  id: 'material-intelligence-2025',
  title: 'The Tactile Return: Volcanic Stone & Smoked Timber',
  excerpt:
    'Why luxury residential architecture is moving away from cold synthetic composites toward dark mineral mass, unvarnished travertine, and handcrafted patinas that age with dignified beauty over decades.',
  category: 'MATERIAL ESSAY',
  date: 'FEBRUARY 2025',
  readTime: '6 MIN READ',
  author: 'Elena Roth',
  role: 'Design Principal',
  image: images.blogFeatured,
};

const ARTICLES = [
  {
    id: 'parametric-joinery',
    title: 'Precision Millwork: Concealing Technology Behind Timber',
    excerpt: 'How flush detailing, motorized pocket doors, and acoustic wall panels eliminate visual clutter while preserving domestic warmth.',
    category: 'JOINERY & CRAFT',
    date: 'JANUARY 2025',
    readTime: '4 MIN READ',
    author: 'Marcus Thorne',
    image: images.blogParametricJoinery,
  },
  {
    id: 'light-choreography',
    title: 'Sculpting Circadian Daylight in Tropical Sites',
    excerpt: 'Harvesting natural daylight through deep cantilevered window reveals, internal courtyards, and lightwells without thermal heat gain.',
    category: 'LIGHTING DESIGN',
    date: 'DECEMBER 2024',
    readTime: '5 MIN READ',
    author: 'Elena Roth',
    image: images.blogLight,
  },
  {
    id: 'acoustic-luxury',
    title: 'The Silent Room: Acoustic Engineering for Focus & Rest',
    excerpt: 'Decoupling structural vibration, dampening ambient room echo, and formulating acoustic serenity in open-plan penthouses.',
    category: 'ACOUSTICS',
    date: 'NOVEMBER 2024',
    readTime: '5 MIN READ',
    author: 'Studio Advisory',
    image: images.blogAcoustics,
  },
  {
    id: 'heritage-restoration',
    title: 'Adaptive Reuse: Travertine with Historic Lime Masonry',
    excerpt: 'Restoring historic coastal and alpine architecture through subterranean structural reinforcement and breathable lime mortars.',
    category: 'HERITAGE',
    date: 'OCTOBER 2024',
    readTime: '7 MIN READ',
    author: 'Marcus Thorne',
    image: images.blogHeritage,
  },
  {
    id: 'blueprint-longevity',
    title: 'Designing for Decades: Rejecting Transient Fashions',
    excerpt: 'Principles of timeless proportion, structural honesty, and spatial serenity that ensure private residential sanctuaries endure.',
    category: 'PHILOSOPHY',
    date: 'SEPTEMBER 2024',
    readTime: '4 MIN READ',
    author: 'Elena Roth',
    image: images.blogBlueprint,
  },
  {
    id: 'coastal-villa-notes',
    title: 'Material Weathering in Marine Climates',
    excerpt: 'Field notes from our Colombo atelier on corrosion-resistant bronze, marine-grade teak finishes, and living stone patinas for oceanfront estates.',
    category: 'TECHNICAL',
    date: 'AUGUST 2024',
    readTime: '6 MIN READ',
    author: 'Colombo Atelier',
    image: images.blogCoastalVilla,
  },
];

export default function BlogPage() {
  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-hidden select-none">
      {/* 1. Monographs & Editorial Essays Hero */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 md:px-16 bg-[#141210] text-[#FAF9F4] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.blogFeatured}
            alt="Design Ark Journal & Publications"
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
            <span>JOURNAL &bull; ARCHITECTURAL PUBLICATIONS</span>
          </div>
          <span className="font-technical-label text-[10px] tracking-widest text-white/50 uppercase">
            ESSAYS FROM THE COLOMBO ATELIER &amp; ARCHIVES
          </span>
        </div>

        {/* Center Hero Statement */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-20 space-y-6">
          <h1 className="heading-2--serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F4] font-normal leading-[1.08] tracking-tight">
            Architectural Insights &amp; <br />
            <span className="font-serif italic font-normal text-[#DFC294]">Material Investigations.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-xl text-[#FAF9F4]/75 font-light leading-relaxed">
            Essays on spatial acoustics, material longevity, and architectural philosophy written by our founding principals and studio specialists.
          </p>
        </div>

        {/* Bottom Filter/Tagline Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-white/10 pt-6 font-technical-label text-xs tracking-widest uppercase text-white/60">
          <span>CURATED MONOGRAPHS</span>
          <span className="text-[#DFC294]">{ARTICLES.length + 1} PUBLISHED ESSAYS</span>
        </div>

        {/* Scroll-Linked Inverted Bottom Curve Cutouts */}
        <ScrollCurvedCorners fillColor="#FAF9F4" />
      </section>

      {/* 2. Featured Cover Essay Spotlight (Homepage Obsidian Contrast) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 sm:py-24">
        <div className="relative w-full py-16 sm:py-24 px-8 sm:px-12 md:px-16 bg-[#0E0D0B] text-[#FAF9F4] rounded-3xl overflow-hidden shadow-2xl">
          <div className="space-y-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 font-technical-label text-[9px] tracking-widest uppercase text-[#DFC294]">
                  FEATURED ESSAY
                </span>
                <h2 className="heading-2--serif text-3xl sm:text-5xl text-white font-normal">
                  {FEATURED_ARTICLE.title}
                </h2>
              </div>
              <span className="font-technical-label text-xs text-[#DFC294] uppercase tracking-widest">
                {FEATURED_ARTICLE.date} &bull; {FEATURED_ARTICLE.readTime}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src={FEATURED_ARTICLE.image}
                  alt={FEATURED_ARTICLE.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294] font-bold">
                    AUTHOR: {FEATURED_ARTICLE.author} ({FEATURED_ARTICLE.role})
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#DFC294] text-[#181614] font-technical-label text-[10px] font-bold uppercase tracking-wider">
                    Read Essay &rarr;
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294] block">
                  {FEATURED_ARTICLE.category}
                </span>
                <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                  {FEATURED_ARTICLE.excerpt}
                </p>
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                  <span className="font-technical-label text-[9px] tracking-widest uppercase text-[#DFC294] block font-bold">
                    KEY ARCHITECTURAL TAKEAWAY
                  </span>
                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    &ldquo;A building that cannot weather with dignity is a building that has failed its inhabitants. We choose stones and timbers that welcome time.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curated Essay Archive Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-20 space-y-12">
        <div className="border-b border-[#E5DFD7] pb-6 flex items-center justify-between">
          <span className="font-technical-label text-xs tracking-widest uppercase text-[#A48A7A]">
            RECENT MONOGRAPHS &amp; FIELD NOTES
          </span>
          <span className="font-technical-label text-xs text-[#181614]/60">
            {ARTICLES.length} ARTICLES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer space-y-5 p-6 rounded-3xl bg-white border border-[#E5DFD7] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#ECE8DF] border border-[#E5DFD7]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#181614]/90 backdrop-blur-md text-white font-technical-label text-[9px] tracking-widest uppercase font-bold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#A48A7A] font-technical-label tracking-wider uppercase">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="heading-2--serif text-xl sm:text-2xl text-[#181614] group-hover:text-[#A48A7A] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#181614]/75 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFD7]/70 flex items-center justify-between font-technical-label text-xs text-[#181614]">
                <span className="text-[#A48A7A] text-[10px] uppercase">By {article.author}</span>
                <span className="font-semibold group-hover:text-[#DFC294] transition-colors">Read &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Private Journal Digest Band */}
      <section className="max-w-5xl mx-auto px-6 sm:px-12 pt-6 pb-24 text-center space-y-6">
        <div className="p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-[#181614] to-[#100F0E] text-[#FAF9F4] space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 font-technical-label text-[10px] tracking-widest uppercase text-[#DFC294]">
            PRIVATE JOURNAL
          </span>
          <h2 className="heading-2--serif text-3xl sm:text-5xl font-normal text-white">
            Receive Our Quarterly Architectural Monograph
          </h2>
          <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed max-w-xl mx-auto">
            Dispatches on material research, private estate acquisitions, and acoustic spatial engineering delivered directly to your inbox.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 font-technical-label text-xs uppercase tracking-wider">
            <Link
              href="/contact_us"
              className="px-8 py-4 rounded-full bg-[#DFC294] text-[#181614] hover:bg-white transition-all font-semibold shadow-lg cursor-pointer"
            >
              Subscribe to Monograph &rarr;
            </Link>
            <Link
              href="/works"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:border-white transition-all font-medium cursor-pointer"
            >
              Explore Commission Archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
