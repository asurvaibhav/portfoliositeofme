import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Github, Mail } from 'lucide-react';
import { ProjectItem, PROJECTS } from '../data/portfolioData';
import { AsteriskGlyph, ResilientImage } from './Motifs';
import { Footer } from './sections/Footer';

interface ProjectPageProps {
  project: ProjectItem;
  onBack: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export function ProjectPage({ project, onBack, onNavigate }: ProjectPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const { caseStudy } = project;
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#0A0A0A] font-sora selection:bg-[#F63E04] selection:text-white flex flex-col justify-between">
      {/* 1. Dedicated Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#F8F8F8]/90 backdrop-blur-md border-b border-black/10 py-4 px-5 sm:px-12 lg:px-[152px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Wordmark & Back Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 hover:border-[#F63E04] text-[#0A0A0A] font-sora text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow"
            >
              <ArrowLeft className="w-4 h-4 text-[#F63E04] group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Projects</span>
            </button>

            <span className="hidden md:inline-block text-black/20">|</span>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="hidden md:flex items-baseline font-sora font-semibold text-lg tracking-tight text-[#0A0A0A]"
            >
              <span>Vaibhav</span>
              <span className="text-[10px] font-normal align-super ml-0.5">®</span>
            </a>
          </div>

          {/* Right: Prev / Next Navigation & Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onNavigate('prev')}
              className="p-2 rounded-full bg-white border border-black/10 hover:border-black/30 hover:bg-gray-50 transition-colors text-[#0A0A0A]"
              title={`Previous: ${prevProject.title}`}
              aria-label="Previous Project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('next')}
              className="p-2 rounded-full bg-white border border-black/10 hover:border-black/30 hover:bg-gray-50 transition-colors text-[#0A0A0A]"
              title={`Next: ${nextProject.title}`}
              aria-label="Next Project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onBack();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A0A0A] text-white font-sora text-xs font-semibold uppercase tracking-wider hover:bg-[#F63E04] transition-colors ml-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Main Case Study Content Container */}
      <main className="flex-1 py-10 sm:py-16 px-5 sm:px-12 lg:px-[152px]">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          
          {/* Header Block: Title, Headline, Meta & Metrics */}
          <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-12 shadow-sm space-y-8">
            {/* Top row: Category, Industry & Year */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F8EEEA] text-[#F63E04] font-sora text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-xs font-sora text-[#686868] uppercase tracking-wider font-semibold">
                  Case Study
                </span>
              </div>

              <div className="flex items-center gap-3 font-sora text-xs text-[#686868] font-medium">
                <span>{caseStudy.industry}</span>
                <span>•</span>
                <span>{caseStudy.year}</span>
                <span>•</span>
                <span>{caseStudy.location}</span>
              </div>
            </div>

            {/* Title & Headline */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AsteriskGlyph className="w-6 h-6 text-[#F63E04]" />
                <h1 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A]">
                  {project.title}
                </h1>
              </div>
              <p className="font-sora text-lg sm:text-2xl text-[#686868] font-normal leading-relaxed max-w-4xl">
                {caseStudy.headline}
              </p>
            </div>

            {/* Metrics Row */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/10">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="border-l-2 border-[#F63E04] pl-4 space-y-1">
                    <div className="font-sora text-2xl sm:text-4xl font-extrabold text-[#F63E04]">
                      {metric.value}
                    </div>
                    <div className="font-sora text-xs uppercase tracking-wider text-[#686868] font-semibold">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Featured Image Showcase */}
          <div className="rounded-3xl overflow-hidden bg-white border border-black/10 p-3 sm:p-5 shadow-sm">
            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-[#F8F8F8] border border-black/5">
              <ResilientImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Executive Summary Section */}
          <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <div className="inline-flex items-center gap-2 font-sora text-xs text-[#F63E04] uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F63E04]" />
                <span>Executive Overview</span>
              </div>
              <h2 className="font-sora text-2xl sm:text-3xl font-extrabold uppercase text-[#0A0A0A]">
                The Scope &amp; Problem
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 font-sora text-base text-[#686868] leading-relaxed">
              <p className="text-lg text-[#0A0A0A] font-medium">
                {project.summary}
              </p>
              <p>{caseStudy.problemSummary}</p>
            </div>
          </div>

          {/* Problems vs Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge Card */}
            <div className="rounded-3xl bg-[#FDFBFB] border border-[#F63E04]/20 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-[#F63E04] font-sora text-xs uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F63E04]" />
                <span>Friction &amp; Challenges</span>
              </div>
              <h3 className="font-sora text-xl sm:text-2xl font-extrabold uppercase text-[#0A0A0A]">
                {caseStudy.problemTitle}
              </h3>
              <ul className="space-y-4 pt-2">
                {(caseStudy.problems || []).map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#686868]">
                    <span className="font-sora text-xs font-bold text-[#F63E04] bg-[#F8EEEA] px-2 py-0.5 rounded-md shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Solutions Card */}
            <div className="rounded-3xl bg-[#FBFDFB] border border-emerald-600/20 p-6 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-emerald-600 font-sora text-xs uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <span>Solutions Delivered</span>
              </div>
              <h3 className="font-sora text-xl sm:text-2xl font-extrabold uppercase text-[#0A0A0A]">
                Product Architecture Strategy
              </h3>
              <ul className="space-y-4 pt-2">
                {(caseStudy.solutions || []).map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-[#686868]">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Persona & Insights Card */}
          {caseStudy.persona && (
            <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 shadow-sm space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
                <div>
                  <div className="text-xs font-sora uppercase font-bold text-[#F63E04] tracking-wider">
                    User Research
                  </div>
                  <h3 className="font-sora text-2xl sm:text-3xl font-extrabold uppercase text-[#0A0A0A] mt-1">
                    Target User Persona
                  </h3>
                </div>

                <div className="px-4 py-2 rounded-full bg-[#F8F8F8] border border-black/10 font-sora text-xs text-[#0A0A0A]">
                  <span className="font-bold">{caseStudy.persona.name}</span> — {caseStudy.persona.role}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="p-6 rounded-2xl bg-[#F8EEEA]/50 border-l-4 border-[#F63E04] text-base sm:text-lg italic text-[#0A0A0A] leading-relaxed">
                "{caseStudy.persona.quote}"
              </blockquote>

              {/* Pain points and Goals */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="space-y-3">
                  <h4 className="font-sora text-xs uppercase text-[#F63E04] font-bold tracking-wider">
                    Identified User Pain Points
                  </h4>
                  <div className="space-y-2">
                    {caseStudy.persona.painPoints.map((pain, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#F8F8F8] border border-black/5 text-xs sm:text-sm text-[#686868]"
                      >
                        • {pain}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-sora text-xs uppercase text-emerald-600 font-bold tracking-wider">
                    Primary Product Goals
                  </h4>
                  <div className="space-y-2">
                    {caseStudy.persona.goals.map((goal, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#F8F8F8] border border-black/5 text-xs sm:text-sm text-[#0A0A0A] flex items-center gap-3"
                      >
                        <span className="font-sora font-extrabold text-emerald-600 text-xs">
                          {goal.number}
                        </span>
                        <span>{goal.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables & Technology Stack */}
          <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 shadow-sm space-y-6">
            <h3 className="font-sora text-xl sm:text-2xl font-extrabold uppercase text-[#0A0A0A]">
              Project Deliverables &amp; Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {(caseStudy.services || []).map((service, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-sora text-xs font-semibold uppercase tracking-wider"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Project Navigator & Contact CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Next Project Teaser */}
            <div
              onClick={() => onNavigate('next')}
              className="lg:col-span-7 rounded-3xl bg-white border border-black/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#F63E04]/50 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-sora text-[#686868] uppercase font-bold tracking-wider">
                  <span>Up Next</span>
                  <span className="text-[#F63E04] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-sora text-2xl sm:text-4xl font-extrabold uppercase text-[#0A0A0A] group-hover:text-[#F63E04] transition-colors">
                  {nextProject.title}
                </h3>
                <p className="font-sora text-sm text-[#686868] line-clamp-2">
                  {nextProject.summary}
                </p>
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden aspect-[21/9] bg-[#F8F8F8] border border-black/5">
                <ResilientImage
                  src={nextProject.image}
                  alt={nextProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Let's Collaborate CTA */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#F8EEEA] via-[#F7E1DA] to-[#F8DAD2] border border-[#F63E04]/20 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#F63E04] font-sora text-xs font-bold uppercase tracking-wider">
                  <AsteriskGlyph className="w-3.5 h-3.5" />
                  <span>Start A Project</span>
                </div>
                <h3 className="font-sora text-2xl sm:text-3xl font-extrabold uppercase text-[#0A0A0A]">
                  Have a similar project in mind?
                </h3>
                <p className="font-sora text-sm text-[#686868] leading-relaxed">
                  I take ideas from concept to deployment — designing the interface, building the frontend &amp; backend, and shipping it live.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onBack();
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full py-4 px-6 rounded-full bg-[#0A0A0A] text-white font-sora text-xs font-extrabold uppercase tracking-widest hover:bg-[#F63E04] transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Let's Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
