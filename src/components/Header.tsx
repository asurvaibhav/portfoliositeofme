import React, { useState, useEffect } from 'react';
import { nav, profile } from '../data/content';

interface HeaderProps {
  activeSection?: string;
}

export function Header({ activeSection = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1400
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      const stageHeight =
        window.innerWidth >= 1200
          ? window.innerWidth * 0.75
          : window.innerHeight * 0.75;
      setScrolled(window.scrollY > stageHeight - 80);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Body scroll lock and Esc key handler for mobile overlay
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const isDesktop = windowWidth >= 1200;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'bg-[rgba(248,248,248,0.8)] backdrop-blur-md shadow-sm border-b border-black/5 text-[#0A0A0A]'
            : 'bg-transparent text-white'
        }`}
        style={{
          containerType: 'inline-size',
          height: isDesktop && !scrolled ? '5.7cqw' : '64px',
        }}
      >
        <div className="w-full h-full relative flex items-center justify-between">
          {/* Logo "Vaibhav®" - left 4%, Sora 600, 1.85cqw, white; ® raised superscript 0.8cqw */}
          <a
            href="#home"
            className="flex items-baseline font-sora font-semibold tracking-tight transition-colors hover:opacity-90 z-10"
            style={{
              position: 'absolute',
              left: '4%',
              fontSize: isDesktop && !scrolled ? '1.85cqw' : '1.35rem',
              lineHeight: 1,
              color: scrolled ? '#0A0A0A' : '#FFFFFF',
            }}
          >
            <span>Vaibhav</span>
            <sup
              className="font-sora font-semibold align-super"
              style={{
                fontSize: isDesktop && !scrolled ? '0.8cqw' : '0.7rem',
                marginLeft: '1px',
              }}
            >
              ®
            </sup>
          </a>

          {/* Desktop Navigation - Centered at 50%, Geist 500, 1.2cqw (min 14px), gap 3.2cqw */}
          <nav
            className="hidden lg:flex items-center justify-center font-sora transition-colors z-10"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              gap: isDesktop && !scrolled ? '3.2cqw' : '2.2rem',
              fontFamily: 'Geist, Sora, sans-serif',
              fontWeight: 500,
              fontSize: isDesktop && !scrolled ? 'max(14px, 1.2cqw)' : '1rem',
            }}
          >
            {nav.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive =
                activeSection === sectionId || (sectionId === 'home' && !scrolled);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative group flex items-baseline py-1 transition-opacity hover:opacity-90"
                  style={{
                    color: scrolled ? '#0A0A0A' : '#FFFFFF',
                  }}
                >
                  <span>{item.label}</span>
                  {typeof (item as { count?: number }).count === 'number' && (
                    <sup
                      className="font-normal opacity-60 ml-0.5"
                      style={{
                        fontSize: isDesktop && !scrolled ? '0.75cqw' : '0.75rem',
                      }}
                    >
                      {(item as { count?: number }).count}
                    </sup>
                  )}

                  {/* Active White Underline (0.35cqw below text) */}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 block pointer-events-none"
                      style={{
                        bottom: isDesktop && !scrolled ? '-0.35cqw' : '-4px',
                        height: '1px',
                        backgroundColor: scrolled ? '#0A0A0A' : '#FFFFFF',
                      }}
                    />
                  )}

                  {/* Hover Underline Animation (Left to Right) */}
                  {!isActive && (
                    <span
                      className="absolute left-0 right-0 block scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none"
                      style={{
                        bottom: isDesktop && !scrolled ? '-0.35cqw' : '-4px',
                        height: '1px',
                        backgroundColor: scrolled ? '#0A0A0A' : '#FFFFFF',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Hamburger Icon - right edge at 96%, two lines each 3.4cqw x 0.2cqw, 0.75cqw apart */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col justify-between p-1 cursor-pointer hover:opacity-80 transition-opacity z-10"
            aria-label="Open Navigation Menu"
            style={{
              position: 'absolute',
              right: '4%',
              width: isDesktop && !scrolled ? '3.4cqw' : '28px',
              height:
                isDesktop && !scrolled
                  ? 'calc(0.2cqw + 0.75cqw + 0.2cqw)'
                  : '14px',
            }}
          >
            <span
              className="block w-full transition-colors"
              style={{
                height: isDesktop && !scrolled ? '0.2cqw' : '2px',
                backgroundColor: scrolled ? '#0A0A0A' : '#FFFFFF',
              }}
            />
            <span
              className="block w-full transition-colors"
              style={{
                height: isDesktop && !scrolled ? '0.2cqw' : '2px',
                backgroundColor: scrolled ? '#0A0A0A' : '#FFFFFF',
                marginTop: isDesktop && !scrolled ? '0.75cqw' : '6px',
              }}
            />
          </button>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A0A0A] text-white p-6 sm:p-12 flex flex-col justify-between animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-6 max-w-6xl w-full mx-auto">
            <span className="font-sora font-semibold text-2xl">Vaibhav®</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-gray-300 transition-colors text-3xl font-light"
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>

          <div className="space-y-6 my-auto max-w-6xl w-full mx-auto">
            {nav.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-sora font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase hover:text-gray-300 transition-colors flex items-center justify-between group border-b border-white/5 pb-4"
              >
                <span>{item.label}</span>
                <span className="font-sora font-bold text-base sm:text-xl text-[#F63E04] transition-colors">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs font-sora text-gray-400 gap-4 max-w-6xl w-full mx-auto">
            <div className="flex items-center gap-6">
              {profile.socials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {soc.label}
                </a>
              ))}
            </div>
            <span>{profile.email}</span>
          </div>
        </div>
      )}
    </>
  );
}
