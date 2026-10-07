import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

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

// Carousel 3-dot indicator at the bottom center of each image
function PaginationIndicator({ activeIdx }: { activeIdx: number }) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[6px] shadow-sm flex items-center gap-1.5 select-none pointer-events-none z-20">
      <span className={`w-1.5 h-1.5 rounded-[2px] transition-colors ${activeIdx === 0 ? 'bg-[#F63E04]' : 'bg-[#D1D5DB]'}`} />
      <span className={`w-1.5 h-1.5 rounded-[2px] transition-colors ${activeIdx === 1 ? 'bg-[#F63E04]' : 'bg-[#D1D5DB]'}`} />
      <span className={`w-1.5 h-1.5 rounded-[2px] transition-colors ${activeIdx === 2 ? 'bg-[#F63E04]' : 'bg-[#D1D5DB]'}`} />
      <span className={`w-1.5 h-1.5 rounded-[2px] transition-colors ${activeIdx === 3 ? 'bg-[#F63E04]' : 'bg-[#D1D5DB]'}`} />
    </div>
  );
}

interface ServiceItemData {
  number: string;
  title: string;
  clipId: string;
  description: string;
  image: string;
  chipRows: string[][];
}

const SERVICES_DATA: ServiceItemData[] = [
  {
    number: '/001',
    title: 'UI/UX DESIGN',
    clipId: 'services-clip-original',
    description:
      'Research-led interfaces, thoughtful user flows, and polished visuals built around real user needs.',
    image: '/illustrations/services-uiux-showcase.png',
    chipRows: [
      ['User flows & wireframes', 'Visual design systems'],
      ['Interactive prototypes'],
      ['Usability-first experiences'],
    ],
  },
  {
    number: '/002',
    title: 'WEB APPLICATION (FULL STACK)',
    clipId: 'services-clip-hexagons',
    description:
      'Complete web applications from responsive frontend and APIs to database integration and deployment.',
    image: '/illustrations/services-fullstack-showcase.png',
    chipRows: [
      ['React & TypeScript', 'Node.js & REST APIs'],
      ['Database integration'],
      ['Responsive, production-ready builds'],
    ],
  },
  {
    number: '/003',
    title: 'ANDROID APP',
    clipId: 'services-clip-pixels',
    description:
      'Android apps with clear navigation, useful features, and interfaces designed for everyday use.',
    image: '/illustrations/services-android-showcase.png',
    chipRows: [
      ['Android-first interfaces'],
      ['Smooth, intuitive navigation'],
      ['Reliable app functionality'],
    ],
  },
  {
    number: '/004',
    title: 'AUTOMATION',
    clipId: 'services-clip-columns',
    description:
      'Practical workflow automation that reduces repetitive work and keeps everyday processes moving.',
    image: '/illustrations/services-automation-showcase.png',
    chipRows: [
      ['Workflow automation'],
      ['API & tool integrations'],
      ['Repeatable, reliable processes'],
    ],
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = SERVICES_DATA[index];
    if (!item) return;
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) {
      masterTl.current.kill();
    }

    if (imageRef.current) {
      imageRef.current.setAttribute('href', item.image);
      imageRef.current.setAttribute(
        'preserveAspectRatio',
        index === 0 || index === 1 || index === 2 || index === 3
          ? 'xMidYMid meet'
          : 'xMidYMid slice'
      );
    }
    if (mainGroupRef.current) {
      mainGroupRef.current.setAttribute('clip-path', `url(#${item.clipId})`);
    }

    gsap.set(selector, { scale: 0, transformOrigin: '50% 50%' });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.35, from: 'random' },
      ease: 'expo.out',
    })
      // 2. IDLE (Sine Breath)
      .to(selector, {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut',
        stagger: { amount: 0.2, from: 'center' },
      })
      // 3. OUT (Expo In)
      .to(selector, {
        scale: 0,
        duration: 0.6,
        stagger: { amount: 0.25, from: 'edges' },
        ease: 'expo.in',
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);

    return () => {
      if (masterTl.current) masterTl.current.kill();
      ctx.revert();
    };
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-[120px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-14 sm:mb-16">
          {/* Badge: ✻ OUR SERVICES */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-[#EDEDED] border border-[#E0E0E0] text-[#0A0A0A] font-sora text-[11px] font-semibold uppercase tracking-wider mb-6">
            <OrangeAsterisk className="w-3.5 h-3.5" />
            <span>My SERVICES</span>
          </div>

          {/* Heading:
              POWERFUL
              DESIGN SERVICES
              FOR YOUR BRAND
          */}
          <h2 className="font-sora font-extrabold uppercase tracking-[-0.04em] leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px]">
            <div className="text-[#0A0A0A]">POWERFUL</div>
            <div className="text-[#0A0A0A]">
              DESIGN <span className="text-[#686868]">SERVICES</span>
            </div>
            <div className="text-[#686868]">FOR YOUR BRAND</div>
          </h2>
        </div>

        {/* GSAP Mask-Reveal Interactive Services Showcase */}
        <div
          ref={containerRef}
          className="border-t border-[#E5E5E5] pt-10 sm:pt-14 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16"
        >
          {/* Left Column: Interactive High-Contrast Service Selector */}
          <div className="w-full lg:w-[54%] z-10">
            <nav aria-label="Services Navigation">
              <ul className="flex flex-col divide-y divide-[#E5E5E5]">
                {SERVICES_DATA.map((srv, index) => {
                  const isActive = activeIndex === index;
                  return (
                    <li
                      key={srv.number}
                      onMouseEnter={() => handleItemHover(index)}
                      onClick={() => handleItemHover(index)}
                      className="py-8 sm:py-9 cursor-pointer group transition-all duration-300 select-none"
                    >
                      <div className="flex items-start gap-5 sm:gap-7">
                        {/* Number & Indicator */}
                        <div className="flex items-center gap-1.5 pt-1.5 shrink-0">
                          <OrangeAsterisk
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isActive ? 'rotate-90 scale-110 opacity-100' : 'opacity-40 group-hover:opacity-75'
                            }`}
                          />
                          <span
                            className={`font-sora text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 ${
                              isActive ? 'text-[#F63E04]' : 'text-[#8E8E93]'
                            }`}
                          >
                            {srv.number}
                          </span>
                        </div>

                        {/* Title & Details */}
                        <div className="flex-1 space-y-3">
                          <h3
                            className={`font-sora font-extrabold uppercase tracking-tight transition-all duration-300 ${
                              isActive
                                ? 'text-3xl sm:text-4xl lg:text-[40px] leading-[0.95] text-[#0A0A0A] translate-x-2'
                                : 'text-2xl sm:text-3xl lg:text-[32px] leading-tight text-[#8E8E93] group-hover:text-[#27272A]'
                            }`}
                          >
                            {srv.title}
                          </h3>

                          {/* Expandable info for active service */}
                          {isActive && (
                            <div className="pt-2 space-y-3.5 animate-fadeIn">
                              <p className="font-sora text-xs sm:text-[13px] md:text-sm text-[#52525B] leading-relaxed max-w-lg">
                                {srv.description}
                              </p>

                              <div className="space-y-2 pt-1">
                                {srv.chipRows.map((row, rIdx) => (
                                  <div key={rIdx} className="flex flex-wrap gap-2">
                                    {row.map((chip, cIdx) => (
                                      <span
                                        key={cIdx}
                                        className="px-3 py-1.5 rounded-[4px] bg-[#EDEDED] font-sora text-[11px] sm:text-[12px] font-semibold text-[#18181B] tracking-tight border border-[#E2E2E2]"
                                      >
                                        {chip}
                                      </span>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right Column: GSAP Animated Mask-Reveal Illustration Stage */}
          <div className="w-full lg:w-[46%] flex flex-col items-center justify-center relative lg:sticky lg:top-28">
            {/* Ambient Warm Orange Glow */}
            <div className="absolute w-[110%] h-[110%] bg-[#F63E04]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[480px] aspect-square rounded-[18px] overflow-hidden bg-[#ECECEC] shadow-[0_16px_40px_rgba(0,0,0,0.08)] border border-[#E4E4E7]">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full object-cover z-10"
              >
                <defs>
                  {/* Clip 1: Horizontal Slats */}
                  <clipPath id="services-clip-original">
                    <path
                      className="path"
                      d="M480.6,235H19.4c-6,0-10.8-4.9-10.8-10.8v-9.5c0-6,4.9-10.8,10.8-10.8h461.1c6,0,10.8,4.9,10.8,10.8v9.5C491.4,230.2,486.6,235,480.6,235z"
                    />
                    <path
                      className="path"
                      d="M483.1,362.4H16.9c-4.6,0-8.3-3.7-8.3-8.3v-1.8c0-4.6,3.7-8.3,8.3-8.3h466.1c4.6,0,8.3,3.7,8.3,8.3v1.8C491.4,358.7,487.7,362.4,483.1,362.4z"
                    />
                    <path
                      className="path"
                      d="M460.3,336.3H39.7c-17.2,0-31.1-13.9-31.1-31.1v-31.5c0-17.2,13.9-31.1,31.1-31.1h420.7c17.2,0,31.1,13.9,31.1,31.1v31.5C491.4,322.4,477.5,336.3,460.3,336.3z"
                    />
                    <path
                      className="path"
                      d="M459.2,196.2H40.8v-35c0-47.5,38.5-86,86-86h246.5c47.5,0,86,38.5,86,86V196.2z"
                    />
                    <path
                      className="path"
                      d="M441.9,424.9H58.1c-9.6,0-17.3-7.8-17.3-17.3v-37.4h418.5v37.4C459.2,417.1,451.5,424.9,441.9,424.9z"
                    />
                  </clipPath>

                  {/* Clip 2: Bento Mosaic */}
                  <clipPath id="services-clip-hexagons">
                    <rect className="path" x="20" y="20" width="200" height="280" rx="14" />
                    <rect className="path" x="20" y="320" width="200" height="160" rx="14" />
                    <rect className="path" x="240" y="20" width="240" height="140" rx="14" />
                    <rect className="path" x="240" y="180" width="110" height="160" rx="14" />
                    <rect className="path" x="370" y="180" width="110" height="160" rx="14" />
                    <rect className="path" x="240" y="360" width="240" height="120" rx="14" />
                  </clipPath>

                  {/* Clip 3: 3x3 Pixel Grid */}
                  <clipPath id="services-clip-pixels">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <rect
                        key={i}
                        className="path"
                        x={(i % 3) * 160 + 20}
                        y={Math.floor(i / 3) * 160 + 20}
                        width="140"
                        height="140"
                        rx="6"
                      />
                    ))}
                  </clipPath>

                  {/* Clip 4: Vertical Rounded Pillars */}
                  <clipPath id="services-clip-columns">
                    <rect className="path" x="20" y="20" width="80" height="460" rx="12" />
                    <rect className="path" x="115" y="20" width="80" height="460" rx="12" />
                    <rect className="path" x="210" y="20" width="80" height="460" rx="12" />
                    <rect className="path" x="305" y="20" width="80" height="460" rx="12" />
                    <rect className="path" x="400" y="20" width="80" height="460" rx="12" />
                  </clipPath>
                </defs>

                <g ref={mainGroupRef} clipPath={`url(#${SERVICES_DATA[0].clipId})`}>
                  <image
                    ref={imageRef}
                    href={SERVICES_DATA[0].image}
                    width="500"
                    height="500"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </g>
              </svg>

              <PaginationIndicator activeIdx={activeIndex} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
