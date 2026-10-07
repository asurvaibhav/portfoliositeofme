import React, { useState } from 'react';

export function AsteriskGlyph({
  className = 'w-3.5 h-3.5 text-[#F63E04]',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
    </svg>
  );
}

export function Crosshair({ className = 'text-[#686868]/40' }: { className?: string }) {
  return (
    <span className={`font-mono text-xs select-none ${className}`}>+</span>
  );
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackBg = 'bg-[#181818]',
  aspectRatio = '',
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackBg?: string;
  aspectRatio?: string;
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-[#1A1A1A]/10 dark:border-white/10 ${fallbackBg} ${className} ${aspectRatio}`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
        <AsteriskGlyph className="w-8 h-8 text-[#F63E04] mb-3 animate-spin-slow opacity-80" />
        <span className="font-sora font-semibold text-xs tracking-wider uppercase text-[#0A0A0A] dark:text-white/80 max-w-[200px]">
          {alt || 'Portfolio® Visual Asset'}
        </span>
        <span className="text-[10px] font-mono text-[#686868] mt-1 uppercase tracking-widest">
          Figma / Studio Spec
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#EAEAEA] animate-pulse z-10 flex items-center justify-center">
          <AsteriskGlyph className="w-5 h-5 text-[#F63E04]/40 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export function PortfolioLogo({
  className = 'font-sora font-semibold tracking-tighter text-[#0A0A0A]',
  size = 'text-xl',
}: {
  className?: string;
  size?: string;
}) {
  return (
    <div className={`inline-flex items-baseline gap-0.5 select-none ${className} ${size}`}>
      <span>Portfolio</span>
      <span className="text-[0.6em] font-normal align-super text-[#F63E04]">®</span>
    </div>
  );
}
