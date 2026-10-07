import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { profile } from '../../data/portfolioData';

// Custom circled "R" matching the exact heavy border and bold letter in the screenshot
function CircledR({ className = "w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Registered Trademark"
    >
      <circle cx="50" cy="50" r="44" stroke="#0A0A0A" strokeWidth="9" />
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontFamily="Sora, sans-serif"
        fontWeight="800"
        fontSize="48"
        fill="#0A0A0A"
      >
        R
      </text>
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Newsletter Subscriber',
            email: email.trim(),
            service: 'Newsletter & Updates',
            message: 'User subscribed from Footer Newsletter form.',
          }),
        });
      } catch {
        // Dev fallback
      }
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#F8F8F8] text-[#0A0A0A] border-t border-black/[0.06]">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-[152px] pt-16 sm:pt-24 pb-12 sm:pb-16 space-y-16 sm:space-y-24">
        
        {/* UPPER ROW: Left Mission & Contact Info, Right Newsletter Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Focused on crafting... + Phone & Email */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            <p className="font-sora text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-snug sm:leading-relaxed text-[#4B5563] max-w-xl font-normal">
              Focused on crafting clean and intuitive experiences that blend creativity, usability, and functionality to{' '}
              <strong className="font-extrabold text-[#0A0A0A]">help brands connect</strong> better their users.
            </p>

            <div className="space-y-2 sm:space-y-3">
              <div className="font-sora text-xs sm:text-sm font-medium text-[#71717A]">
                {profile.phone}
              </div>
              <div>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-sora text-xl sm:text-2xl md:text-[28px] font-extrabold text-[#0A0A0A] underline underline-offset-4 sm:underline-offset-8 decoration-2 decoration-[#0A0A0A] hover:text-[#F63E04] hover:decoration-[#F63E04] transition-colors inline-block"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Newsletter Card */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-neutral-100 max-w-[440px] w-full">
              <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-[#0A0A0A] mb-4">
                Newsletter
              </h3>

              {submitted ? (
                <div className="p-4 rounded-[6px] bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sora font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been received.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#F4F4F5] rounded-[6px] px-4 py-3.5 text-xs sm:text-sm text-[#0A0A0A] placeholder-[#9CA3AF] outline-none border border-transparent focus:border-black/20 focus:bg-white transition-all font-sora"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#0A0A0A] hover:bg-[#F63E04] text-white font-sora font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-[6px] text-center transition-colors cursor-pointer shadow-sm active:scale-[0.99]"
                  >
                    YOUR MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* LOWER ROW: Navigation Columns (Left) & Giant Wordmark "Vaibhav ®" (Right) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pt-10 sm:pt-14 border-t border-black/[0.06]">
          
          {/* Left Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-14 shrink-0">
            {/* Column 1: Internal Pages */}
            <div className="space-y-3 sm:space-y-4">
              <div className="font-sora text-xs text-[#9CA3AF] font-medium tracking-wide">
                Navigation
              </div>
              <div className="flex flex-col space-y-2.5 font-sora font-semibold text-sm sm:text-base text-[#0A0A0A]">
                <a href="#home" className="hover:text-[#F63E04] transition-colors">
                  Home
                </a>
                <a href="#about" className="hover:text-[#F63E04] transition-colors">
                  About Me
                </a>
                <a href="#blog" className="hover:text-[#F63E04] transition-colors">
                  Blog
                </a>
                <a href="#contact" className="hover:text-[#F63E04] transition-colors">
                  Contact Us
                </a>
              </div>
            </div>

            {/* Column 2: Socials with ↗ icons */}
            <div className="space-y-3 sm:space-y-4">
              <div className="font-sora text-xs text-[#9CA3AF] font-medium tracking-wide">
                Navigation
              </div>
              <div className="flex flex-col space-y-2.5 font-sora font-semibold text-sm sm:text-base text-[#0A0A0A]">
                {/* 1. GitHub (with orange arrow and underline matching Dribbble in screenshot) */}
                <a
                  href="https://github.com/asurvaibhav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between pb-0.5 border-b border-black/20 hover:border-[#F63E04] transition-colors min-w-[110px]"
                >
                  <span className="hover:text-[#F63E04] transition-colors">GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F63E04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 2. LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vaibhav-vighneshwar-gunaga-a06129338"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between hover:text-[#F63E04] transition-colors min-w-[110px]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:text-[#F63E04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 3. Instagram */}
                <a
                  href="https://www.instagram.com/vaibhav.gunaga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between hover:text-[#F63E04] transition-colors min-w-[110px]"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:text-[#F63E04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* 4. Contact / Email */}
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center justify-between hover:text-[#F63E04] transition-colors min-w-[110px]"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:text-[#F63E04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Giant Wordmark: Vaibhav ® */}
          <div className="flex-1 flex items-center justify-start lg:justify-end min-w-0 pt-4 lg:pt-0 pl-2">
            <div className="inline-flex items-center gap-2 sm:gap-3 lg:gap-4 select-none max-w-full">
              <span className="font-sora font-extrabold text-[clamp(42px,7.5vw,126px)] leading-none tracking-[-0.03em] text-[#0A0A0A] whitespace-nowrap pl-1">
                Vaibhav
              </span>
              <CircledR className="w-9 h-9 sm:w-12 sm:h-12 lg:w-16 lg:h-16 shrink-0" />
            </div>
          </div>

        </div>

      </div>

      {/* FULL-WIDTH SOLID BLACK BOTTOM BAR */}
      <div className="w-full bg-[#0A0A0A] py-4 sm:py-5 px-5 text-center text-xs sm:text-[13px] font-sora text-white/90 font-medium">
        © {profile.year} Vaibhav. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
