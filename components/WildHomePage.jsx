'use client';

import { useState } from 'react';
import WildHero from '@/components/WildHero';
import WildPortrait from '@/components/WildPortrait';
import WildTeam from '@/components/WildTeam';
import WildSloganTicker from '@/components/WildSloganTicker';
import WildServices from '@/components/WildServices';
import WildProjects from '@/components/WildProjects';
import WildPartners from '@/components/WildPartners';
import WildProcess from '@/components/WildProcess';
import WildContact from '@/components/WildContact';
import WildPopups from '@/components/WildPopups';
import ProjectDrawer from '@/components/ProjectDrawer';

export default function WildHomePage() {
  const [activePopup, setActivePopup] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="w-full bg-[#FAF9F4] text-[#181614] overflow-x-clip">
      {/* 1. Full-screen Cinematic Hero (Wild AG Style) */}
      <WildHero />

      {/* 2. Portrait & Werte Values */}
      <WildPortrait />

      {/* 3. Team Draggable Carousel */}
      <WildTeam />

      {/* 4. Slogan Parallax Banner & Infinite Ticker */}
      <WildSloganTicker />

      {/* 5. Kompetenzen / Disciplines with 5 Interactive Numbered Pills */}
      <WildServices onOpenPopup={(id) => setActivePopup(id)} />

      {/* 6. Selected Projects Horizontal Carousel */}
      <WildProjects onSelectProject={(project) => setSelectedProject(project)} />

      {/* 7. Partner Infinite Marquee */}
      <WildPartners />

      {/* 8. Prozesse Section (Dark Luxury with 3 Interactive Process Pills) */}
      <WildProcess onOpenPopup={(id) => setActivePopup(id)} />

      {/* 9. Kontakt Section (Form & Coordinates) */}
      <WildContact />

      {/* Interactive Modal Popups for 5 Services & 3 Processes */}
      <WildPopups
        activePopup={activePopup}
        onClose={() => setActivePopup(null)}
      />

      {/* Project Detail Drawer */}
      <ProjectDrawer
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
