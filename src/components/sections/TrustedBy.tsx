import React from 'react';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

const techStack = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'Supabase',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'Vercel',
  'Netlify',
];

export function TrustedBy() {
  return (
    <section className="bg-[#F8F8F8] text-[#0A0A0A] py-10 sm:py-12 border-y border-black/10 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-[152px] flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Left Label: BUILT WITH (two lines, Geist/Sora Medium 16px uppercase, #0A0A0A) */}
        <div className="font-sora font-semibold text-sm sm:text-base uppercase tracking-wider text-[#0A0A0A] whitespace-nowrap shrink-0 border-r-0 md:border-r border-black/10 pr-0 md:pr-8 flex flex-col leading-tight">
          <span>BUILT</span>
          <span>WITH</span>
        </div>

        {/* Infinite Slider with Progressive Blur */}
        <div className="flex-1 overflow-hidden w-full relative h-12 flex items-center">
          <InfiniteSlider duration={32} gap={28} durationOnHover={60} className="w-full">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 font-sora font-medium text-lg sm:text-xl tracking-tight text-[#686868] whitespace-nowrap shrink-0"
              >
                <span>{tech}</span>
                <span className="text-[#F63E04] text-xs">✻</span>
              </div>
            ))}
          </InfiniteSlider>

          {/* Left Progressive Blur */}
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 left-0 h-full w-16 sm:w-28 z-10"
            direction="left"
            blurIntensity={1}
          />

          {/* Right Progressive Blur */}
          <ProgressiveBlur
            className="pointer-events-none absolute top-0 right-0 h-full w-16 sm:w-28 z-10"
            direction="right"
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}
