import React from 'react';
import { process } from '../../data/content';
import { AsteriskGlyph } from '../Motifs';

export function Process() {
  return (
    <section id="process" className="py-[140px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top center Tag */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-sora text-[11px] font-semibold uppercase tracking-wider">
            <AsteriskGlyph className="w-3 h-3 text-[#F63E04]" />
            <span>MY PROCESS</span>
          </span>
        </div>

        {/* Centered Heading (2 lines, Sora 600 uppercase, clamp(48px,6vw,96px), tracking -0.04em) */}
        <h2 className="text-center font-sora font-semibold text-[clamp(48px,6vw,96px)] uppercase tracking-[-0.04em] leading-[0.95] mb-16">
          <span className="block text-[#0A0A0A]">FROM CONCEPT</span>
          <span className="block text-[#686868]">TO DEPLOYMENT</span>
        </h2>

        {/* 4 Equal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full">
          {process.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0A0A0A] rounded-[8px] p-[24px] min-h-[300px] flex flex-col justify-between border border-transparent hover:border-[#F63E04] hover:-translate-y-[6px] transition-all duration-300 cursor-pointer shadow-md"
            >
              {/* Top-left: Orange Asterisk Icon ONLY */}
              <div className="flex items-start">
                <AsteriskGlyph className="w-5 h-5 text-[#F63E04] group-hover:rotate-90 transition-transform duration-300" />
              </div>

              {/* Bottom: Title & Description */}
              <div className="space-y-2 mt-auto">
                <h3 className="font-sora font-semibold text-[18px] uppercase text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sora text-[13px] text-[#9A9A9A] leading-relaxed line-clamp-3">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
