import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Share2, Clock, Calendar } from 'lucide-react';
import { BlogPostItem } from '../types/portfolio';
import { AsteriskGlyph } from './Motifs';

interface BlogReaderModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
}

export function BlogReaderModal({ post, onClose }: BlogReaderModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#F8F8F8] text-[#0A0A0A] rounded-2xl overflow-hidden shadow-2xl border border-black/10 my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#F8F8F8]/90 backdrop-blur-md border-b border-black/10">
          <div className="flex items-center gap-2">
            <AsteriskGlyph />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-[#0A0A0A]">
              Design Insight · {post.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full bg-black/5 hover:bg-black/10 text-[#0A0A0A] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? 'Copied Link' : 'Share'}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/5 hover:bg-[#F63E04] hover:text-white transition-all text-[#0A0A0A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8">
          {/* Header info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono text-[#686868]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F63E04]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F63E04]" />
                {post.readTime}
              </span>
            </div>
            <h1 className="font-sora text-2xl sm:text-4xl font-extrabold uppercase text-[#0A0A0A] leading-tight">
              {post.title}
            </h1>
            <p className="font-sora text-base sm:text-lg text-[#686868] font-medium leading-relaxed">
              {post.subtitle}
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-black/10 aspect-[16/9] bg-[#0A0A0A]">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Intro */}
          <div className="p-6 rounded-xl bg-[#F8EEEA] border border-[#F7E1DA] font-sora text-base leading-relaxed text-[#0A0A0A]">
            {post.content.intro}
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {post.content.sections.map((sec: { heading: string; body: string }, idx: number) => (
              <div key={idx} className="space-y-2">
                <h2 className="font-sora text-xl font-bold uppercase text-[#0A0A0A]">
                  0{idx + 1}. {sec.heading}
                </h2>
                <p className="font-sora text-sm sm:text-base text-[#686868] leading-relaxed">
                  {sec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-6 rounded-xl bg-[#0A0A0A] text-white space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F63E04]">
              <AsteriskGlyph />
              <span>Key Takeaways for Designers</span>
            </div>
            <ul className="space-y-2 font-sora text-sm text-gray-300">
              {post.content.takeaways.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#F63E04] font-mono font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F63E04] animate-ping" />
            <span className="font-sora font-semibold text-xs uppercase tracking-widest text-white">
              Watch My Work · Design & Motion Reel
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#F63E04] hover:text-white text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-[16/9] bg-black flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#120502] via-[#2A0C05] to-[#0A0A0A] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full border border-[#F63E04]/40 flex items-center justify-center mb-6 animate-pulse">
              <div className="w-16 h-16 rounded-full bg-[#F63E04] flex items-center justify-center text-white shadow-lg shadow-[#F63E04]/50">
                {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
              </div>
            </div>
            <h3 className="font-sora text-3xl font-extrabold uppercase tracking-tight text-white max-w-lg">
              Crafting High-Impact Product Experiences
            </h3>
            <p className="font-mono text-xs text-[#F63E04] tracking-widest uppercase mt-2">
              Full-Stack · UI/UX · REST APIs
            </p>

            <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 bg-black/60 p-3 rounded-xl border border-white/10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-[#F63E04] transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#F63E04] w-2/3 animate-pulse" />
              </div>
              <span className="font-mono text-[10px] text-gray-400">01:24 / 02:15</span>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-white hover:text-[#F63E04] transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
