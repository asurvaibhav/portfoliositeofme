import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Check, Copy, ArrowLeft, ArrowRight } from 'lucide-react';
import { ProjectItem, IMAGES } from '../data/portfolioData';
import { ResilientImage, AsteriskGlyph } from './Motifs';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectNext?: () => void;
  onSelectPrev?: () => void;
}

export function CaseStudyModal({ project, onClose, onSelectNext, onSelectPrev }: CaseStudyModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] text-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#F63E04] animate-ping" />
            <span className="font-sora font-semibold text-sm tracking-wider uppercase text-white">
              Case Study Showcase · {project.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {onSelectPrev && (
              <button
                onClick={onSelectPrev}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                title="Previous Project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            {onSelectNext && (
              <button
                onClick={onSelectNext}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                title="Next Project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={handleShare}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#F63E04] hover:text-white transition-all text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 bg-[#0D0D0D]">
          {/* Slide 1: Cover Header */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#F8EEEA] via-[#F7E1DA] to-[#F3D3C9] text-[#0A0A0A] p-6 sm:p-10 border border-white/20">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0A0A0A]/10 pb-6">
              <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-[#686868]">
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
                <span>•</span>
                <span>{caseStudy.location}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/80 text-[#0A0A0A] font-mono text-[11px] font-semibold border border-[#0A0A0A]/10"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <h1 className="font-sora text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#0A0A0A] leading-none">
                  {project.title}
                </h1>
                <p className="font-sora text-lg font-medium text-[#686868] leading-relaxed">
                  {caseStudy.headline}
                </p>
                <div className="pt-4 flex items-center gap-6">
                  {caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="border-l-2 border-[#F63E04] pl-3">
                      <div className="font-sora text-2xl sm:text-3xl font-extrabold text-[#F63E04]">
                        {m.value}
                      </div>
                      <div className="font-mono text-[11px] text-[#686868] uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <ResilientImage
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl shadow-2xl border border-white/40 aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Slide 2: About & Project Summary */}
          <div className="bg-[#141414] rounded-2xl p-6 sm:p-8 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F63E04] uppercase tracking-widest">
                <AsteriskGlyph />
                <span>01 · Executive Summary</span>
              </div>
              <h2 className="font-sora text-2xl font-bold uppercase text-white">
                Project Overview
              </h2>
            </div>
            <div className="md:col-span-8 space-y-4 font-sora text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>{project.summary}</p>
              <p>{caseStudy.problemSummary}</p>
            </div>
          </div>

          {/* Slide 3: Problems & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problems Card */}
            <div className="bg-[#181212] rounded-2xl p-6 border border-[#F63E04]/20 space-y-4">
              <div className="flex items-center gap-2 text-[#F63E04] font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-[#F63E04]" />
                <span>Identified Friction & Pain Points</span>
              </div>
              <h3 className="font-sora text-xl font-bold text-white uppercase">
                {caseStudy.problemTitle}
              </h3>
              <ul className="space-y-3 pt-2">
                {caseStudy.problems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="font-mono text-xs text-[#F63E04] pt-0.5">0{idx + 1}.</span>
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Card */}
            <div className="bg-[#121815] rounded-2xl p-6 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Design Solutions Executed</span>
              </div>
              <h3 className="font-sora text-xl font-bold text-white uppercase">
                Product Architecture Strategy
              </h3>
              <ul className="space-y-3 pt-2">
                {caseStudy.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Slide 4: User Persona */}
          <div className="bg-gradient-to-r from-[#171717] to-[#121212] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs text-[#F63E04] uppercase tracking-widest">
                  02 · User Research Target
                </span>
                <h3 className="font-sora text-2xl font-bold text-white uppercase mt-1">
                  Target User Persona
                </h3>
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-sora text-xs text-gray-300">
                <span className="font-bold text-white">{caseStudy.persona.name}</span> — {caseStudy.persona.role}
              </div>
            </div>

            <blockquote className="p-4 rounded-xl bg-white/5 border-l-4 border-[#F63E04] text-sm sm:text-base italic text-gray-200">
              "{caseStudy.persona.quote}"
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase text-red-400 tracking-wider">
                  Core User Pain Points
                </h4>
                <div className="space-y-2">
                  {caseStudy.persona.painPoints.map((pp, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300">
                      • {pp}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase text-emerald-400 tracking-wider">
                  Target Product Goals
                </h4>
                <div className="space-y-2">
                  {caseStudy.persona.goals.map((g, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-gray-300 flex items-center gap-3">
                      <span className="font-mono text-emerald-400 font-bold">{g.number}</span>
                      <span>{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5: Visual Showcase & System Specs */}
          <div className="bg-[#141414] rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-[#F63E04] uppercase tracking-widest">
                  03 · Visual & Design System
                </span>
                <h3 className="font-sora text-2xl font-bold text-white uppercase mt-1">
                  Design Tokens & Grid Specs
                </h3>
              </div>
              <span className="font-mono text-xs text-gray-400">Sora Display · 8pt Grid</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#F63E04] text-white flex flex-col justify-between h-28">
                <span className="font-mono text-xs uppercase">Primary Accent</span>
                <span className="font-mono text-sm font-bold">#F63E04</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0A0A] text-white border border-white/20 flex flex-col justify-between h-28">
                <span className="font-mono text-xs uppercase text-gray-400">Dark Frame</span>
                <span className="font-mono text-sm font-bold">#0A0A0A</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8EEEA] text-[#0A0A0A] flex flex-col justify-between h-28">
                <span className="font-mono text-xs uppercase text-gray-600">Blush Canvas</span>
                <span className="font-mono text-sm font-bold">#F8EEEA</span>
              </div>
            </div>

            <ResilientImage
              src={IMAGES.shopeaseEditorial}
              alt="Design System Spec"
              className="rounded-xl border border-white/10 aspect-[16/9]"
            />
          </div>

          {/* Footer CTA inside Modal */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#F63E04] to-[#E03500] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-sora text-2xl font-extrabold uppercase">
                Like what you see in {project.title}?
              </h4>
              <p className="text-white/80 font-sora text-sm mt-1">
                Let's discuss how we can transform your product's UX.
              </p>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-3 rounded-full bg-black text-white font-sora font-semibold text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all flex items-center gap-2 shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
