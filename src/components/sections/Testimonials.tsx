import React, { useState } from 'react';
import { Star, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/portfolioData';
import { AsteriskGlyph } from '../Motifs';

export function Testimonials() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-sora text-xs font-semibold uppercase tracking-wider mb-3">
              <AsteriskGlyph className="text-[#F63E04]" />
              <span>DESIGNS CLIENTS LOVE</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mt-2 leading-[0.95] max-w-3xl">
              <span className="text-[#0A0A0A]">WHAT MY CLIENTS </span>
              <span className="text-[#686868]">SAY.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-black/10 text-[#0A0A0A] hover:bg-[#F63E04] hover:text-white hover:border-[#F63E04] transition-colors flex items-center justify-center shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-black/10 text-[#0A0A0A] hover:bg-[#F63E04] hover:text-white hover:border-[#F63E04] transition-colors flex items-center justify-center shadow-sm"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className={`p-8 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#F63E04]/50 hover:shadow-xl ${
                  idx === currentIndex ? 'ring-2 ring-[#F63E04]/40' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-[#F63E04] text-[#F63E04]" />
                      ))}
                    </div>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="w-8 h-8 rounded-full bg-[#F8F8F8] text-[#0A0A0A] hover:bg-[#F63E04] hover:text-white transition-colors flex items-center justify-center"
                      aria-label="Toggle full testimonial"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <p
                    className={`font-sora text-sm text-[#0A0A0A] font-medium leading-relaxed italic ${
                      isExpanded ? '' : 'line-clamp-4'
                    }`}
                  >
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0 border border-black/10">
                    <img
                      src={item.avatar || '/images/about_motion_portrait_1791048134262.jpg'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-sora font-extrabold text-sm text-[#0A0A0A]">
                      {item.name}
                    </div>
                    <div className="font-sora text-xs text-[#686868]">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
