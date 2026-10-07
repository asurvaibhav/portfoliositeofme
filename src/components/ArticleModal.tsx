import React from 'react';
import { X, Calendar, Clock, ArrowLeft } from 'lucide-react';
import { AsteriskGlyph, ResilientImage } from './Motifs';

interface PostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}

interface ArticleModalProps {
  post: PostItem | null;
  onClose: () => void;
}

export function ArticleModal({ post, onClose }: ArticleModalProps) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white text-[#0A0A0A] rounded-2xl overflow-hidden shadow-2xl border border-black/10 flex flex-col">
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-white/90 backdrop-blur border-b border-black/10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 font-sora text-xs uppercase font-bold text-[#686868] hover:text-[#F63E04] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-black hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close Article"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#F8EEEA] text-[#F63E04] text-[11px] font-sora font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs font-sora text-[#686868]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-xs font-sora text-[#686868]">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl font-extrabold uppercase text-[#0A0A0A] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="font-sora text-base sm:text-lg text-[#686868] font-medium leading-relaxed italic">
              "{post.excerpt}"
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#F8F8F8] border border-black/10 shadow-md">
            <ResilientImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 font-sora text-base text-[#0A0A0A]/90 leading-relaxed pt-4 border-t border-black/10">
            <p>{post.content}</p>
            <p>
              In my work across full-stack applications and user interface engineering, I've found that prioritizing clarity and performance creates lasting engagement. Every design token, API response payload, and CSS layout rule should contribute to an effortless user journey.
            </p>
            <div className="p-6 rounded-xl bg-[#F8EEEA] border border-[#F8DAD2] text-[#0A0A0A] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#F63E04] uppercase text-xs">
                <AsteriskGlyph />
                <span>KEY TAKEAWAY</span>
              </div>
              <p className="text-sm font-medium">
                Designing for speed, accessibility, and visual harmony elevates digital products from good to unforgettable.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F8F8F8] border-t border-black/10 flex items-center justify-between font-sora text-xs text-[#686868]">
          <span>Written by Vaibhav Gunaga</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#0A0A0A] text-white font-bold uppercase hover:bg-[#F63E04] transition-colors"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
