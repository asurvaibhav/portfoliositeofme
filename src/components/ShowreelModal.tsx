import React from 'react';
import { X, Play } from 'lucide-react';
import { AsteriskGlyph } from './Motifs';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0A0A0A]">
          <div className="flex items-center gap-2 text-[#F63E04] font-sora text-xs uppercase tracking-widest font-bold">
            <AsteriskGlyph />
            <span>VAIBHAV® SHOWREEL 2026</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close Showreel"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Animated Interactive Showreel Canvas / Demo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C6490F] via-[#E8501F] to-[#F56030] opacity-30 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#F63E04] text-white flex items-center justify-center shadow-2xl animate-pulse">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <h3 className="font-sora text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
              FULL-STACK &amp; UI/UX SHOWCASE
            </h3>
            <p className="font-sora text-sm text-white/80 max-w-lg">
              Highlighting high-performance web applications, cybersecurity file inspection systems, and responsive brand design systems.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 sm:p-6 bg-[#0A0A0A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sora text-gray-400">
          <span>© 2026 Vaibhav Gunaga. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#F63E04] text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            Close Player
          </button>
        </div>
      </div>
    </div>
  );
}
