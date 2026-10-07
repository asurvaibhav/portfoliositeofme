import React from 'react';
import silhouetteProfileImg from '../../assets/images/bento_silhouette_profile_1791099155535.jpg';
import prismaticBlurImg from '../../assets/images/bento_prismatic_blur_1791099177729.jpg';

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

// 5 Star Rating Icons in Orange
function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#F63E04]">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3.5 h-3.5 fill-[#F63E04]"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export function ResultsBento() {
  return (
    <section className="py-16 sm:py-24 lg:py-[120px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div>
          {/* Badge: ✻ WHY CHOOSE ME */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#EDEDED] border border-[#E0E0E0] text-[#0A0A0A] font-sora text-[11px] font-semibold uppercase tracking-wider mb-6">
            <OrangeAsterisk className="w-3.5 h-3.5" />
            <span>WHY CHOOSE ME</span>
          </div>

          {/* Headline:
              FOCUSED ON
              DESIGN THAT
              DELIVERS RESULTS
          */}
          <h2 className="font-sora font-extrabold uppercase tracking-[-0.04em] leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
            <div className="text-[#0A0A0A]">FOCUSED ON</div>
            <div className="text-[#0A0A0A]">
              DESIGN <span className="text-[#686868]">THAT</span>
            </div>
            <div className="text-[#686868]">DELIVERS RESULTS</div>
          </h2>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* COLUMN 1 (Left): 2 Stacked White Stat Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1A: DESIGN EXPERIENCE */}
            <div className="bg-white rounded-[16px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] flex-1 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
              <div className="flex items-center gap-2">
                <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] tracking-wider uppercase">
                  DESIGN EXPERIENCE
                </span>
              </div>

              <div className="my-3">
                <span className="font-sora font-extrabold text-5xl sm:text-6xl text-[#0A0A0A] tracking-tight">
                  7+
                </span>
              </div>

              <p className="font-sora text-xs sm:text-[13px] text-[#686868] leading-relaxed">
                Creating modern and experiences with a focus on usability and impact.
              </p>
            </div>

            {/* Card 1B: CLIENT SATISFACTION */}
            <div className="bg-white rounded-[16px] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] flex-1 flex flex-col justify-between min-h-[220px] sm:min-h-[240px]">
              <div className="flex items-center gap-2">
                <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                <span className="font-sora font-extrabold text-xs sm:text-[13px] text-[#0A0A0A] tracking-wider uppercase">
                  CLIENT SATISFACTION
                </span>
              </div>

              <div className="my-3">
                <span className="font-sora font-extrabold text-5xl sm:text-6xl text-[#0A0A0A] tracking-tight">
                  98%
                </span>
              </div>

              <p className="font-sora text-xs sm:text-[13px] text-[#686868] leading-relaxed">
                Focused on delivering results that meet both user needs and business.
              </p>
            </div>

          </div>

          {/* COLUMN 2 (Middle): Tall Abstract Motion Prismatic Card */}
          <div className="relative rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] flex flex-col justify-between p-6 sm:p-7 min-h-[460px] lg:min-h-[510px]">
            {/* Background Image */}
            <img
              src={prismaticBlurImg}
              alt="Prismatic motion blur"
              className="w-full h-full object-cover absolute inset-0 select-none pointer-events-none"
            />
            {/* Subtle Gradient Overlays for optimal readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/85 pointer-events-none" />

            {/* Top: Avatars Row & Text */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex -space-x-1.5 overflow-hidden">
                <img
                  className="inline-block w-8 h-8 rounded-[4px] object-cover border-2 border-white shadow-xs"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client avatar 1"
                />
                <img
                  className="inline-block w-8 h-8 rounded-[4px] object-cover border-2 border-white shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client avatar 2"
                />
                <img
                  className="inline-block w-8 h-8 rounded-[4px] object-cover border-2 border-white shadow-xs"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client avatar 3"
                />
                <img
                  className="inline-block w-8 h-8 rounded-[4px] object-cover border-2 border-white shadow-xs"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Client avatar 4"
                />
              </div>

              <div className="font-sora text-xs sm:text-[13px] text-[#0A0A0A] font-medium leading-tight">
                <span className="font-extrabold text-[#0A0A0A]">1.2k+</span> Happy Clients Successfully
              </div>
            </div>

            {/* Bottom: Testimonial Quote & Olivia Davis Reviewer */}
            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2">
                <StarRow />
                <span className="font-sora font-extrabold text-xs text-[#0A0A0A]">
                  4.9/5
                </span>
              </div>

              <p className="font-sora text-xs sm:text-[13px] text-[#27272A] font-medium leading-relaxed">
                “Vaibhav delivered an outstanding user experience and engineering that perfectly matched our vision. The attention to detail and execution was exceptional.”
              </p>

              <div className="flex items-center gap-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
                  alt="Olivia Davis"
                  className="w-9 h-9 rounded-[6px] object-cover border border-black/10 shrink-0"
                />
                <div className="font-sora leading-tight">
                  <div className="font-extrabold text-xs sm:text-[13px] text-[#0A0A0A]">
                    Olivia Davis
                  </div>
                  <div className="text-[11px] text-[#71717A] font-medium">
                    Product Manager
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 3 (Right): Profile Card & Fast and Reliable Card */}
          <div className="flex flex-col gap-6">
            
            {/* Card 3A: Profile Poster (Vaibhav ® / FULL-STACK DEVELOPER) */}
            <div className="relative rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[310px] flex flex-col justify-between p-6 sm:p-7 text-white select-none">
              <img
                src={silhouetteProfileImg}
                alt="Vaibhav Profile"
                className="w-full h-full object-cover absolute inset-0 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

              {/* Wordmark at Top */}
              <div className="relative z-10 text-center font-sora font-extrabold text-base sm:text-lg text-white drop-shadow-md">
                Vaibhav <sup className="text-[0.7em] text-[#F63E04] font-bold">®</sup>
              </div>

              {/* Title & Subtitle at Bottom */}
              <div className="relative z-10 text-center space-y-1">
                <div className="font-sora font-extrabold uppercase text-base sm:text-lg tracking-wider text-white drop-shadow-md">
                  FULL-STACK DEVELOPER
                </div>
                <div className="font-sora text-xs text-white/90 drop-shadow-sm font-medium">
                  Early-career developer • Concept to deployment.
                </div>
              </div>
            </div>

            {/* Card 3B: FAST & RELIABLE */}
            <div className="bg-white rounded-[16px] p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-black/[0.04] flex-1 flex flex-col justify-center space-y-2">
              <div className="text-[#F63E04]">
                <svg className="w-5 h-5 fill-[#F63E04]" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>

              <div className="font-sora font-extrabold text-sm sm:text-base uppercase tracking-wider text-[#0A0A0A] pt-1">
                FAST &amp; RELIABLE
              </div>

              <p className="font-sora text-xs sm:text-[13px] text-[#686868] leading-relaxed">
                I maintain an efficient workflow that ensures smooth collaboration, clear communication timely.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
