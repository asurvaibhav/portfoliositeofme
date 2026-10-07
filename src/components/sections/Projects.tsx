import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

// Orange 8-point asterisk glyph matching the screenshot
function OrangeAsterisk({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F63E04"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );
}

export function Projects({ onSelectProject }: ProjectsProps) {
  // Helper to find project item from portfolioData
  const getProject = (id: string): ProjectItem => {
    return (
      PROJECTS.find((p) => p.id === id || p.slug === id) ||
      PROJECTS[0]
    );
  };

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-[120px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div>
          {/* Badge: ✻ PORTFOLIO */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#EDEDED] border border-[#E0E0E0] text-[#0A0A0A] font-sora text-[11px] font-semibold uppercase tracking-wider mb-6">
            <OrangeAsterisk className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>

          {/* Headline:
              OUR
              PROJECTS.
          */}
          <h2 className="font-sora font-extrabold uppercase tracking-[-0.04em] leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
            <div className="text-[#0A0A0A]">My</div>
            <div className="text-[#686868]">PROJECTS.</div>
          </h2>
        </div>

        {/* Masonry Layout: 3 Rows matching reference screenshot */}
        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          
          {/* ROW 1: SURAKSHA SETU (Left, Large) + RLSI BCA (Right, Offset Down) */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            
            {/* 1. SURAKSHA SETU (Large Card) */}
            <div
              onClick={() => onSelectProject?.(getProject('surakshasetu'))}
              className="w-full lg:w-[58%] xl:w-[58%] bg-white p-3.5 sm:p-4 rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-square w-full rounded-[10px] overflow-hidden bg-[#F65522] relative">
                <img
                  src="/images/project-suraksha-setu.png"
                  alt="Suraksha Setu digital safety project artwork"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="bg-[#EDEDED] rounded-[6px] px-4 py-3 mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                    Suraksha Setu 
                  </span>
                </div>
                <span className="font-sora text-xs sm:text-[13px] text-[#686868] font-medium">
                  /Android App
                </span>
              </div>
            </div>

            {/* 2. SMARTPAY (Smaller Card, Offset Downward) */}
            <div
              onClick={() => onSelectProject?.(getProject('smartpay'))}
              className="w-full lg:w-[38%] xl:w-[38%] lg:mt-24 xl:mt-32 bg-white p-3.5 sm:p-4 rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[4/5] sm:aspect-square w-full rounded-[10px] overflow-hidden bg-[#F65522] relative">
                <img
                  src="/images/project-rlsi-bca-aeline.png"
                  alt="Aeline consulting website design for AI and strategy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="bg-[#EDEDED] rounded-[6px] px-4 py-3 mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                    RLSI BCA 
                  </span>
                </div>
                <span className="font-sora text-xs sm:text-[13px] text-[#686868] font-medium">
                  /Full Stack Website 
                </span>
              </div>
            </div>

          </div>

          {/* ROW 2: COCO COASTAL (Full-Width Panoramic Banner) */}
          <div
            onClick={() => onSelectProject?.(getProject('cococoastal'))}
            className="w-full bg-white p-3.5 sm:p-4 rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] cursor-pointer hover:shadow-xl transition-all duration-300 group"
          >
            <div className="aspect-[16/8] sm:aspect-[21/9] lg:aspect-[2.3/1] w-full rounded-[10px] overflow-hidden bg-[#F65522] relative">
              <img
                src="/images/project-coco-coastal.png"
                alt="Coco Coastal brand campaign"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="bg-[#EDEDED] rounded-[6px] px-4 py-3 mt-3 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                  CoCo Coastal
                </span>
              </div>
              <span className="font-sora text-xs sm:text-[13px] text-[#686868] font-medium">
                /Commercial website
              </span>
            </div>
          </div>

          {/* ROW 3: HERDO (Left, Smaller) + FITTRACK (Right, Large & Offset Down) */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            
            {/* 4. HERDO (Smaller Card) */}
            <div
              onClick={() => onSelectProject?.(getProject('shadowguard'))}
              className="w-full lg:w-[38%] xl:w-[38%] bg-white p-3.5 sm:p-4 rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-square w-full rounded-[10px] overflow-hidden bg-[#F65522] relative">
                <img
                  src="/images/project-cybersheild-lock.png"
                  alt="Cybersheild purple digital security lock"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="bg-[#EDEDED] rounded-[6px] px-4 py-3 mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                    Cybersheild 
                  </span>
                </div>
                <span className="font-sora text-xs sm:text-[13px] text-[#686868] font-medium">
                  /Web Application
                </span>
              </div>
            </div>

            {/* 5. CLINIC CORTEX (Large Card, Offset Downward) */}
            <div
              onClick={() => onSelectProject?.(getProject('cliniccortex'))}
              className="w-full lg:w-[58%] xl:w-[58%] lg:mt-24 xl:mt-32 bg-white p-3.5 sm:p-4 rounded-[14px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-[1.92/1] w-full rounded-[10px] overflow-hidden bg-[#F8FAFC] relative">
                <img
                  src="/images/project-cliniccortex-dashboard.png"
                  alt="ClinicCortex dashboard showing patient management and appointment analytics"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* Bottom Caption Bar */}
              <div className="bg-[#EDEDED] rounded-[6px] px-4 py-3 mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                  <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                    ClinicCortex
                  </span>
                </div>
                <span className="font-sora text-xs sm:text-[13px] text-[#686868] font-medium">
                  /Multi-tenant Healthcare SaaS Platform
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Left Button: VIEW ALL PROJECTS ↗ */}
        <div className="pt-4 sm:pt-6 flex justify-start">
          <div
            onClick={() => onSelectProject?.(getProject('zentix'))}
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-[6px] bg-[#EDEDED] border border-[#E0E0E0] hover:bg-[#E5E5E5] transition-colors cursor-pointer select-none group"
          >
            <span className="font-sora font-bold text-xs text-[#0A0A0A] uppercase tracking-wider">
              VIEW ALL PROJECTS
            </span>
            <div className="w-6 h-6 rounded-[4px] bg-[#F63E04] text-white flex items-center justify-center text-xs group-hover:scale-105 transition-transform shadow-xs">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
