import React from 'react';

// Orange 8-point asterisk glyph matching the screenshot
function OrangeAsterisk({ className = "w-4 h-4" }: { className?: string }) {
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

// Center decorative light-grey 8-point asterisk matching the screenshot
function CenterAsterisk() {
  return (
    <div className="select-none pointer-events-none flex items-center justify-center shrink-0">
      <svg
        viewBox="0 0 120 120"
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 text-[#E2E2E2]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          d="M60 10L63 48L95 25L75 54L110 60L75 66L95 95L63 72L60 110L57 72L25 95L45 66L10 60L45 54L25 25L57 48Z"
          fill="#E2E2E2"
        />
      </svg>
    </div>
  );
}

export function Impact() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-[120px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Asymmetrical 12-column layout matching reference exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (Col 1-7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Tag Badge & Main Headline */}
            <div>
              {/* Badge: ✻ BETTER DIGITAL JOURNEYS. */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#EDEDED] border border-[#E0E0E0] text-[#0A0A0A] font-sora text-[11px] font-semibold uppercase tracking-wider mb-6">
                <OrangeAsterisk className="w-3.5 h-3.5" />
                <span>BETTER DIGITAL JOURNEYS.</span>
              </div>

              {/* Headline:
                  MY IMPACT
                  THROUGH USER
                  EXPERIENCE
              */}
              <h2 className="font-sora font-extrabold uppercase tracking-[-0.04em] leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
                <div className="text-[#0A0A0A]">MY IMPACT</div>
                <div className="text-[#0A0A0A]">
                  THROUGH <span className="text-[#686868]">USER</span>
                </div>
                <div className="text-[#686868]">EXPERIENCE</div>
              </h2>
            </div>

            {/* Lower-Left Motion Image with 4 External Corner Crosshairs (+) */}
            <div className="flex justify-start sm:justify-center lg:justify-start lg:ml-20 xl:ml-24">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                {/* Top crosshairs (+) */}
                <div className="flex justify-between items-center px-1 mb-2.5 text-[#52525B] font-mono text-base select-none">
                  <span>+</span>
                  <span>+</span>
                </div>

                {/* Motion Image Card */}
                <div className="relative rounded-[16px] overflow-hidden aspect-[4/5] shadow-[0_10px_35px_rgba(0,0,0,0.06)] bg-[#C6490F]">
                  <img
                    src="/images/about_motion_portrait_1791048134262.jpg"
                    alt="User experience motion visual"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom crosshairs (+) */}
                <div className="flex justify-between items-center px-1 mt-2.5 text-[#52525B] font-mono text-base select-none">
                  <span>+</span>
                  <span>+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Col 8-12 on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Top row: Center Grey Asterisk + Top-Right Portrait Image */}
            <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-10 lg:gap-12 w-full pt-2 lg:pt-4">
              {/* Decorative light-grey 8-point asterisk */}
              <CenterAsterisk />

              {/* Top-Right Portrait on the orange hero palette */}
              <div className="w-[170px] sm:w-[210px] lg:w-[230px] aspect-[3/4] rounded-[16px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] shrink-0 bg-gradient-to-br from-[#C6490F] via-[#E8501F] to-[#F56030]">
                <img
                  src="/images/impact-portrait.png"
                  alt="Vaibhav standing with arms crossed"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </div>

            {/* Lower-Right Block: Bio Text & 2 Horizontal Stat Cards */}
            <div className="space-y-6 sm:space-y-8">
              {/* Bio Paragraph */}
              <p className="font-sora text-xs sm:text-[13px] md:text-sm font-semibold text-[#4A4A4A] uppercase tracking-[0.03em] leading-relaxed max-w-md">
                HI, I'M VAIBHAV, A FULL-STACK DEVELOPER &amp; UI/UX DESIGNER PASSIONATE ABOUT CREATING INTUITIVE, HIGH-PERFORMANCE AND VISUALLY ENGAGING DIGITAL EXPERIENCES.
              </p>

              {/* Two Stat Cards */}
              <div className="space-y-4">
                {/* Card 1: 37+ PROJECTS COMPLETED */}
                <div className="bg-white rounded-[16px] p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] flex items-center gap-5 sm:gap-7">
                  <div className="text-4xl sm:text-[54px] font-extrabold font-sora text-[#0A0A0A] tracking-tight shrink-0 w-[110px] sm:w-[130px]">
                    37+
                  </div>
                  <div className="w-[1px] h-12 sm:h-14 bg-black/10 shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 font-sora font-bold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                      <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                      <span>PROJECTS COMPLETED</span>
                    </div>
                    <p className="font-sora text-[11px] sm:text-xs text-[#686868] leading-relaxed">
                      I have successfully completed a variety of projects across web and mobile.
                    </p>
                  </div>
                </div>

                {/* Card 2: 72+ HAPPY CLIENTS */}
                <div className="bg-white rounded-[16px] p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.04] flex items-center gap-5 sm:gap-7">
                  <div className="text-4xl sm:text-[54px] font-extrabold font-sora text-[#0A0A0A] tracking-tight shrink-0 w-[110px] sm:w-[130px]">
                    72+
                  </div>
                  <div className="w-[1px] h-12 sm:h-14 bg-black/10 shrink-0" />
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2 font-sora font-bold text-xs sm:text-[13px] text-[#0A0A0A] uppercase tracking-wider">
                      <OrangeAsterisk className="w-3.5 h-3.5 shrink-0" />
                      <span>HAPPY CLIENTS</span>
                    </div>
                    <p className="font-sora text-[11px] sm:text-xs text-[#686868] leading-relaxed">
                      I have worked with clients from different industries delivering designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
