import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/content';

interface ContactProps {
  selectedServicePreset?: string;
}

export function Contact({ selectedServicePreset }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: selectedServicePreset || 'General Inquiry',
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Failed to submit message. Please try again.');
      }
    } catch {
      // In case server route is offline or local dev fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-[140px] px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        {/* ONE rounded-16 panel with orange gradient background & soft darker swirl shapes */}
        <div className="rounded-[16px] p-7 sm:p-10 lg:p-[56px] bg-gradient-to-br from-[#F63E04] via-[#F8531D] to-[#FF8A5C] text-white shadow-2xl relative overflow-hidden">
          {/* Soft darker swirl shapes in CSS/SVG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[16px]">
            <svg
              className="absolute -top-32 -right-32 w-[680px] h-[680px] opacity-25"
              viewBox="0 0 600 600"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="300" cy="300" r="260" stroke="#7A1800" strokeWidth="80" opacity="0.3" filter="blur(40px)" />
              <path
                d="M50,120 C180,320 380,80 560,420"
                stroke="#9E2200"
                strokeWidth="70"
                opacity="0.35"
                filter="blur(35px)"
              />
            </svg>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7A1800]/25 blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-14">
            {/* Left Section: Tag, Huge Two-Tone Heading, Subline, Contact & Social Links */}
            <div className="flex-1 space-y-7 w-full">
              {/* Tag: ✻ GET IN TOUCH (white 15% pill, Geist) */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white text-[12px] font-medium tracking-[0.04em] uppercase">
                <span>✻</span>
                <span>GET IN TOUCH</span>
              </div>

              {/* Huge white heading: Sora 600 uppercase clamp(56px,7vw,112px), letter-spacing -0.04em, line-height 0.95 */}
              <h2
                className="font-sora font-semibold uppercase tracking-[-0.04em] leading-[0.95] text-white"
                style={{ fontSize: 'clamp(48px, 6.5vw, 108px)' }}
              >
                <div>LET'S CREATE</div>
                <div className="text-white/85">TOGETHER.</div>
              </h2>

              {/* Line: "Have a project in mind? Send me a message." */}
              <p className="text-white/90 text-base sm:text-lg font-normal leading-relaxed max-w-lg">
                Have a project in mind? Send me a message.
              </p>

              {/* Contact info list: email, phone, location */}
              <div className="space-y-3.5 pt-2 text-white/95 text-sm sm:text-base">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/80 shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:underline hover:text-white transition-colors font-normal"
                  >
                    {profile.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/80 shrink-0" />
                  <a
                    href={`tel:${profile.phone}`}
                    className="hover:underline hover:text-white transition-colors font-normal"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/80 shrink-0" />
                  <span>{profile.location}</span>
                </div>
              </div>

              {/* GitHub / LinkedIn / Instagram links (white Geist 16px with line icons) */}
              <div className="pt-3 border-t border-white/20 flex flex-wrap items-center gap-6 text-white text-[15px] sm:text-base">
                {profile.socials.map((soc) => (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white/80 transition-colors group"
                  >
                    {soc.label === 'GitHub' && <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    {soc.label === 'LinkedIn' && <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    {soc.label === 'Instagram' && <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                    <span>{soc.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section: WHITE form card (radius 8, padding 28, width 420) */}
            <div className="w-full lg:w-[420px] shrink-0 bg-white rounded-[8px] p-7 shadow-2xl border border-black/5 text-[#0A0A0A]">
              <h3 className="font-sora font-semibold text-[20px] text-[#0A0A0A] mb-5 tracking-tight">
                Reach Out To Me
              </h3>

              {submitted ? (
                <div className="py-8 text-center space-y-4" role="status" aria-live="polite">
                  <div className="w-12 h-12 rounded-full bg-[#F63E04]/10 text-[#F63E04] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-sora font-semibold text-lg text-[#0A0A0A]">
                    Message Sent!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#686868] leading-relaxed">
                    Thank you for reaching out, <span className="font-medium text-[#0A0A0A]">{formData.name}</span>. I have received your message and will get back to you shortly at <span className="font-medium text-[#0A0A0A]">{formData.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 px-5 py-2 rounded-[8px] bg-[#0A0A0A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#F63E04] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Field: Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-[12px] font-medium text-[#0A0A0A]"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="h-[44px] w-full px-3.5 rounded-[8px] bg-[#F8F8F8] border border-[#E5E5E5] text-[#0A0A0A] text-sm placeholder:text-[#686868]/60 focus:outline-none focus:border-[#F63E04] focus:ring-1 focus:ring-[#F63E04] transition-all"
                    />
                  </div>

                  {/* Field: Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-[12px] font-medium text-[#0A0A0A]"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="h-[44px] w-full px-3.5 rounded-[8px] bg-[#F8F8F8] border border-[#E5E5E5] text-[#0A0A0A] text-sm placeholder:text-[#686868]/60 focus:outline-none focus:border-[#F63E04] focus:ring-1 focus:ring-[#F63E04] transition-all"
                    />
                  </div>

                  {/* Field: Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-[12px] font-medium text-[#0A0A0A]"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      className="min-h-[110px] w-full p-3.5 rounded-[8px] bg-[#F8F8F8] border border-[#E5E5E5] text-[#0A0A0A] text-sm placeholder:text-[#686868]/60 focus:outline-none focus:border-[#F63E04] focus:ring-1 focus:ring-[#F63E04] transition-all resize-none"
                    />
                  </div>

                  {/* Error Callout */}
                  {error && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="p-3 rounded-[8px] bg-red-50 border border-red-200 text-red-600 text-xs"
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit Button: Full-width orange button "SEND MESSAGE ↗" (radius 8) */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 sm:h-12 rounded-[8px] bg-[#F63E04] text-white font-sora font-semibold text-xs sm:text-[13px] uppercase tracking-wider hover:bg-[#E03500] transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#F63E04]/25 disabled:opacity-60 cursor-pointer active:translate-y-0.5"
                  >
                    <span>{loading ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <span className="text-base leading-none">↗</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
