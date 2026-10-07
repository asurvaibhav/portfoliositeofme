import React, { useState, useEffect } from 'react';
import { profile, projects, Project } from '../../data/content';

export const HERO_FRAME = false;

interface HeroProps {
  onSelectProject?: (project: any) => void;
}

export function Hero({ onSelectProject }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1400
  );

  useEffect(() => {
    setLoaded(true);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1200) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const featuredProject = projects[0];

  // Mouse Parallax Offsets
  const portraitParallax = {
    x: mousePos.x * 12,
    y: mousePos.y * 12,
  };

  const ghostParallax = {
    x: mousePos.x * -24,
    y: mousePos.y * -24,
  };

  const isDesktop = windowWidth >= 1200;
  const isTablet = windowWidth >= 810 && windowWidth < 1200;
  const isMobile = windowWidth < 810;

  return (
    <section id="home" className="w-full bg-[#F8F8F8]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');

        @keyframes maskUp {
          from {
            clip-path: inset(100% 0 0 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        .animate-ghost-fade {
          opacity: ${loaded ? 1 : 0};
          transition: opacity 0.8s ease-out;
        }

        .animate-portrait-slide {
          opacity: ${loaded ? 1 : 0};
          transform: translateY(${loaded ? '0px' : '40px'});
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .animate-name-reveal {
          animation: maskUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-card-float-1 {
          opacity: ${loaded ? 1 : 0};
          transform: translateY(${loaded ? '0px' : '20px'});
          transition: opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s;
        }

        .animate-card-float-2 {
          opacity: ${loaded ? 1 : 0};
          transform: translateY(${loaded ? '0px' : '20px'});
          transition: opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s;
        }
      `}</style>

      {/* DESKTOP VIEWPORT (≥1200px) - STAGE SPEC */}
      {isDesktop && (
        <div
          className="stage"
          style={{
            width: '100%',
            aspectRatio: '4 / 3',
            position: 'relative',
            overflow: 'hidden',
            containerType: 'inline-size',
            borderRadius: 0,
            background: 'linear-gradient(135deg, #C6490F 0%, #E8501F 45%, #F56030 100%)',
          }}
        >
          {/* 1. STAGE NOISE / GRAIN OVERLAY */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06] bg-repeat z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* 2. GRID LAYER (z-index 0, pointer-events none) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* 4 Vertical Lines */}
            {[4, 34.6, 65.4, 96].map((x) => (
              <div
                key={`v-${x}`}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.16)',
                }}
              />
            ))}

            {/* 4 Horizontal Lines */}
            {[7.6, 35, 65, 94.6].map((y) => (
              <div
                key={`h-${y}`}
                style={{
                  position: 'absolute',
                  top: `${y}%`,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.16)',
                }}
              />
            ))}

            {/* 16 "+" Intersections */}
            {[4, 34.6, 65.4, 96].flatMap((vx) =>
              [7.6, 35, 65, 94.6].map((hy) => (
                <div
                  key={`cross-${vx}-${hy}`}
                  style={{
                    position: 'absolute',
                    left: `${vx}%`,
                    top: `${hy}%`,
                    transform: 'translate(-50%, -50%)',
                    width: '14px',
                    height: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 0V14M0 7H14"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
              ))
            )}
          </div>

          {/* 3. GHOST NAME (z-index 1) */}
          <div
            className="animate-ghost-fade"
            style={{
              position: 'absolute',
              left: '4%',
              top: '11%',
              width: '90%',
              zIndex: 1,
              pointerEvents: 'none',
              transform: `translate3d(${ghostParallax.x}px, ${ghostParallax.y}px, 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <svg
              viewBox="0 0 900 130"
              width="100%"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <text
                x="0"
                y="105"
                fontFamily="Sora, sans-serif"
                fontSize="150"
                fontWeight="700"
                letterSpacing="-0.05em"
                fill="rgba(255, 255, 255, 0.09)"
                textLength="900"
                lengthAdjust="spacing"
              >
                {profile.heroName}
              </text>
            </svg>
          </div>

          {/* 4. PORTRAIT CUT-OUT (z-index 2) */}
          <div
            className="animate-portrait-slide"
            style={{
              position: 'absolute',
              left: '-12.5%',
              width: '125%',
              bottom: 0,
              height: '125%',
              zIndex: 2,
              pointerEvents: 'none',
              transform: `translate3d(${portraitParallax.x}px, ${portraitParallax.y}px, 0)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <img
              src={profile.images.heroPortrait}
              alt={profile.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
                display: 'block',
              }}
            />
          </div>

          {/* Portrait Bottom Gradient Overlay (z-index 2.5) */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '32%',
              zIndex: 2.5,
              pointerEvents: 'none',
              background:
                'linear-gradient(to top, rgba(232, 80, 31, 0.9) 0%, rgba(232, 80, 31, 0.62) 24%, rgba(232, 80, 31, 0) 100%)',
            }}
          />

          {/* 5. TAGLINE (z-index 4) */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '36%',
              width: '23cqw',
              zIndex: 4,
              fontFamily: 'Geist, Sora, sans-serif',
              fontWeight: 500,
              fontSize: '1.4cqw',
              lineHeight: 1.35,
              textIndent: '3.2cqw',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            {profile.taglineHero}
          </div>

          {/* 6. NAME BLOCK (z-index 3 - ABOVE portrait shoulder) */}
          {/* ©2026 */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '72.5%',
              zIndex: 3,
              fontFamily: 'Sora, sans-serif',
              fontWeight: 500,
              fontSize: '2.1cqw',
              color: '#FFFFFF',
              lineHeight: 1,
            }}
          >
            ©{profile.year}
          </div>

          {/* VAIBHAV Big Name */}
          <div
            className="animate-name-reveal"
            style={{
              position: 'absolute',
              left: '4%',
              top: '75%',
              width: '48.7%',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <svg
              viewBox="0 0 487 110"
              width="100%"
              style={{ display: 'block', overflow: 'visible' }}
            >
              <text
                x="0"
                y="95.25"
                fontFamily="Sora, sans-serif"
                fontSize="100"
                fontWeight="700"
                letterSpacing="-0.05em"
                fill="#FFFFFF"
                textLength="487"
                lengthAdjust="spacing"
              >
                {profile.heroName}
              </text>
            </svg>
          </div>

          {/* 7. FEATURED PROJECT CARD (z-index 4) */}
          <div
            className="animate-card-float-1 group cursor-pointer"
            style={{
              position: 'absolute',
              left: '80.5%',
              top: '35.3%',
              width: '15.6%',
              height: '24.7%',
              zIndex: 4,
              backgroundColor: '#FFFFFF',
              borderRadius: '0.45cqw',
              padding: '0.7cqw',
              boxShadow: '0 0.8cqw 2.5cqw rgba(0, 0, 0, 0.18)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease',
            }}
            onClick={() => {
              if (onSelectProject && featuredProject) {
                onSelectProject(featuredProject);
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-0.5cqw) rotate(-1deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0px) rotate(0deg)';
            }}
          >
            <div
              style={{
                width: '100%',
                height: 'calc(100% - 1.6cqw)',
                borderRadius: '0.3cqw',
                overflow: 'hidden',
                backgroundColor: '#F0F0F0',
              }}
            >
              <img
                src={featuredProject?.image || featuredProject?.cover}
                alt={featuredProject?.title || 'ShadowGuard'}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '0.4cqw',
                fontFamily: 'Geist, Sora, sans-serif',
                fontWeight: 500,
                fontSize: '0.85cqw',
                lineHeight: 1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25cqw',
                  color: '#0A0A0A',
                }}
              >
                <span
                  style={{ color: '#F63E04', fontSize: '0.85cqw', lineHeight: 1 }}
                >
                  ✻
                </span>
                <span>{featuredProject?.title?.toUpperCase() || 'SHADOWGUARD'}</span>
              </div>
              <span style={{ color: '#686868' }}>
                /{featuredProject?.category || 'Cybersecurity'}
              </span>
            </div>
          </div>

          {/* 8. LET'S TALK CARD (z-index 4) */}
          <div
            className="animate-card-float-2"
            style={{
              position: 'absolute',
              left: '71.6%',
              top: '76.4%',
              width: '24.4%',
              height: '11%',
              zIndex: 4,
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              borderRadius: '0.45cqw',
              padding: '0.9cqw',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Avatar */}
            <img
              src={profile.images.avatar}
              alt={profile.name}
              style={{
                width: '6.2cqw',
                height: '6.6cqw',
                borderRadius: '0.3cqw',
                objectFit: 'cover',
                position: 'absolute',
                left: '0.9cqw',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            />

            {/* Middle text (starts 7.9cqw from card left) */}
            <div
              style={{
                position: 'absolute',
                left: '7.9cqw',
                top: '50%',
                transform: 'translateY(-50%)',
                fontFamily: 'Geist, Sora, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.15cqw',
              }}
            >
              <span style={{ fontSize: '1.05cqw', color: '#9A9A9A', lineHeight: 1 }}>
                Let's Talk
              </span>
              <span
                style={{
                  fontSize: '1.25cqw',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                }}
              >
                {profile.name}
              </span>
              <span style={{ fontSize: '1.05cqw', color: '#9A9A9A', lineHeight: 1 }}>
                {profile.roleShort}
              </span>
            </div>

            {/* Top-Right Asterisk */}
            <span
              style={{
                position: 'absolute',
                top: '0.7cqw',
                right: '0.9cqw',
                color: '#FFFFFF',
                fontSize: '0.9cqw',
                lineHeight: 1,
              }}
            >
              ✻
            </span>

            {/* Bottom-Right Arrow Square */}
            <a
              href="#contact"
              style={{
                position: 'absolute',
                bottom: '0.9cqw',
                right: '0.9cqw',
                width: '3cqw',
                height: '3cqw',
                backgroundColor: '#FFFFFF',
                borderRadius: '0.25cqw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0A0A',
                textDecoration: 'none',
              }}
            >
              <svg
                width="1.5cqw"
                height="1.5cqw"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* TABLET VIEWPORT (810–1199px) */}
      {isTablet && (
        <div
          className="stage"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            position: 'relative',
            overflow: 'hidden',
            containerType: 'inline-size',
            borderRadius: 0,
            background: 'linear-gradient(135deg, #C6490F 0%, #E8501F 45%, #F56030 100%)',
          }}
        >
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06] bg-repeat z-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid Layer */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[4, 50, 96].map((x) => (
              <div
                key={`tv-${x}`}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.16)',
                }}
              />
            ))}
            {[10, 45, 90].map((y) => (
              <div
                key={`th-${y}`}
                style={{
                  position: 'absolute',
                  top: `${y}%`,
                  left: 0,
                  right: 0,
                  height: '1px',
                  backgroundColor: 'rgba(255, 255, 255, 0.16)',
                }}
              />
            ))}
          </div>

          {/* Top Name Block (©2026 + VAIBHAV, width 60%) */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '12%',
              width: '60%',
              zIndex: 3,
            }}
          >
            <div
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 500,
                fontSize: '2.5cqw',
                color: '#FFFFFF',
                marginBottom: '0.5cqw',
              }}
            >
              ©{profile.year}
            </div>
            <svg viewBox="0 0 600 120" width="100%" className="block overflow-visible">
              <text
                x="0"
                y="100"
                fontFamily="Sora, sans-serif"
                fontSize="110"
                fontWeight="700"
                letterSpacing="-0.05em"
                fill="#FFFFFF"
                textLength="600"
                lengthAdjust="spacing"
              >
                {profile.heroName}
              </text>
            </svg>
          </div>

          {/* Tagline under the name */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              top: '28%',
              width: '40cqw',
              zIndex: 4,
              fontFamily: 'Geist, Sora, sans-serif',
              fontWeight: 500,
              fontSize: '1.8cqw',
              lineHeight: 1.35,
              textIndent: '3cqw',
              color: '#FFFFFF',
              textTransform: 'uppercase',
            }}
          >
            {profile.taglineHero}
          </div>

          {/* Portrait Centered, Bottom Anchored */}
          <div
            style={{
              position: 'absolute',
              left: '-12.5%',
              bottom: 0,
              width: '125%',
              height: '125%',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          >
            <img
              src={profile.images.heroPortrait}
              alt={profile.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center bottom',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: '32%',
              zIndex: 2.5,
              pointerEvents: 'none',
              background:
                'linear-gradient(to top, rgba(232, 80, 31, 0.9) 0%, rgba(232, 80, 31, 0.62) 24%, rgba(232, 80, 31, 0) 100%)',
            }}
          />

          {/* Featured Card (Right Middle) */}
          <div
            style={{
              position: 'absolute',
              right: '4%',
              top: '32%',
              width: '26cqw',
              backgroundColor: '#FFFFFF',
              borderRadius: '0.8cqw',
              padding: '1cqw',
              boxShadow: '0 1cqw 3cqw rgba(0,0,0,0.2)',
              zIndex: 4,
              cursor: 'pointer',
            }}
            onClick={() => onSelectProject && featuredProject && onSelectProject(featuredProject)}
          >
            <img
              src={featuredProject?.image || featuredProject?.cover}
              alt={featuredProject?.title || 'ShadowGuard'}
              style={{
                width: '100%',
                height: '16cqw',
                objectFit: 'cover',
                borderRadius: '0.5cqw',
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.8cqw',
                fontFamily: 'Geist, Sora, sans-serif',
                fontWeight: 500,
                fontSize: '1.2cqw',
              }}
            >
              <span style={{ color: '#0A0A0A' }}>
                <span style={{ color: '#F63E04' }}>✻ </span>
                {featuredProject?.title?.toUpperCase()}
              </span>
              <span style={{ color: '#686868' }}>/{featuredProject?.category}</span>
            </div>
          </div>

          {/* Let's Talk Card (Bottom Left) */}
          <div
            style={{
              position: 'absolute',
              left: '4%',
              bottom: '4%',
              width: '38cqw',
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              borderRadius: '0.8cqw',
              padding: '1.2cqw',
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1cqw' }}>
              <img
                src={profile.images.avatar}
                alt={profile.name}
                style={{
                  width: '8cqw',
                  height: '8cqw',
                  borderRadius: '0.5cqw',
                  objectFit: 'cover',
                }}
              />
              <div style={{ fontFamily: 'Geist, Sora, sans-serif' }}>
                <div style={{ fontSize: '1.2cqw', color: '#9A9A9A' }}>Let's Talk</div>
                <div style={{ fontSize: '1.5cqw', fontWeight: 600 }}>{profile.name}</div>
                <div style={{ fontSize: '1.2cqw', color: '#9A9A9A' }}>{profile.roleShort}</div>
              </div>
            </div>
            <a
              href="#contact"
              style={{
                width: '4cqw',
                height: '4cqw',
                backgroundColor: '#FFFFFF',
                borderRadius: '0.4cqw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0A0A0A',
              }}
            >
              ↗
            </a>
          </div>
        </div>
      )}

      {/* MOBILE VIEWPORT (<810px) - NORMAL FLOW */}
      {isMobile && (
        <div
          className="w-full px-5 py-8 flex flex-col gap-6 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #C6490F 0%, #E8501F 45%, #F56030 100%)',
          }}
        >
          {/* Reduced Grid Lines (2x3) */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              style={{
                position: 'absolute',
                left: '20px',
                right: '20px',
                top: '30%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '20px',
                right: '20px',
                top: '65%',
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '50%',
                width: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.16)',
              }}
            />
          </div>

          {/* Spacer for Header */}
          <div className="h-12" />

          {/* ©2026 + VAIBHAV (width 100%) */}
          <div className="relative z-10 text-white">
            <div className="font-sora font-medium text-lg mb-1">©{profile.year}</div>
            <h1 className="font-sora font-bold text-5xl sm:text-6xl tracking-tight uppercase">
              {profile.heroName}
            </h1>
          </div>

          {/* Tagline */}
          <p className="relative z-10 font-sora text-sm uppercase text-white/90 leading-relaxed font-medium">
            {profile.taglineHero}
          </p>

          {/* Portrait Cut-out (aspect 4/5) */}
          <div className="relative z-10 w-full aspect-[4/5] overflow-hidden flex items-end justify-center">
            <img
              src={profile.images.heroPortrait}
              alt={profile.name}
              className="w-full h-full object-contain object-bottom"
            />
          </div>

          {/* Let's Talk Card (Full Width) */}
          <div className="relative z-10 w-full bg-[#0A0A0A] text-white rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={profile.images.avatar}
                alt={profile.name}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <div className="text-xs text-gray-400 font-medium">Let's Talk</div>
                <div className="font-sora font-semibold text-base">{profile.name}</div>
                <div className="text-xs text-gray-400">{profile.roleShort}</div>
              </div>
            </div>
            <a
              href="#contact"
              className="w-10 h-10 bg-white text-[#0A0A0A] rounded-lg flex items-center justify-center font-bold text-lg hover:bg-gray-200"
            >
              ↗
            </a>
          </div>

          {/* Featured Project Card (Full Width) */}
          <div
            className="relative z-10 w-full bg-white text-[#0A0A0A] rounded-xl p-3 shadow-lg cursor-pointer"
            onClick={() => onSelectProject && featuredProject && onSelectProject(featuredProject)}
          >
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden mb-2">
              <img
                src={featuredProject?.image || featuredProject?.cover}
                alt={featuredProject?.title || 'ShadowGuard'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-semibold px-1">
              <span>
                <span className="text-[#F63E04]">✻ </span>
                {featuredProject?.title?.toUpperCase()}
              </span>
              <span className="text-gray-500">/{featuredProject?.category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
