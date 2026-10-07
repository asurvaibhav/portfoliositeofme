import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { posts } from '../../data/portfolioData';
import { AsteriskGlyph, ResilientImage } from '../Motifs';
import { ArticleModal } from '../ArticleModal';

export function BlogInsights() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(null);

  if (!posts || posts.length === 0) return null;

  const featuredPost = posts[0];
  const sidePosts = posts.slice(1, 3);

  return (
    <section id="blog" className="py-20 px-5 sm:px-12 lg:px-[152px] bg-[#F8F8F8] text-[#0A0A0A]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDEDED] text-[#0A0A0A] font-sora text-xs font-semibold uppercase tracking-wider mb-3">
              <AsteriskGlyph className="text-[#F63E04]" />
              <span>DESIGN INSIGHTS</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mt-2 leading-[0.95] max-w-3xl">
              <span className="text-[#0A0A0A]">LATEST DESIGN &amp; CODE </span>
              <span className="text-[#686868]">INSIGHTS.</span>
            </h2>
          </div>

          <div className="font-sora text-xs text-[#686868] uppercase tracking-wider shrink-0 font-semibold">
            04 / INSIGHTS
          </div>
        </div>

        {/* Featured + Side Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Card */}
          <div
            onClick={() => setSelectedPost(featuredPost)}
            className="lg:col-span-7 group cursor-pointer p-6 sm:p-8 rounded-2xl bg-white border border-black/10 shadow-sm hover:border-[#F63E04]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#F8F8F8]">
                <ResilientImage
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#F8EEEA] text-[#F63E04] text-[11px] font-sora font-semibold uppercase tracking-wider">
                  {featuredPost.category}
                </span>
                <span className="font-sora text-xs text-[#686868]">{featuredPost.date}</span>
                <span className="font-sora text-xs text-[#686868]">· {featuredPost.readTime}</span>
              </div>

              <h3 className="font-sora text-2xl sm:text-3xl font-extrabold uppercase text-[#0A0A0A] group-hover:text-[#F63E04] transition-colors leading-tight">
                {featuredPost.title}
              </h3>

              <p className="font-sora text-xs sm:text-sm text-[#686868] line-clamp-2">
                {featuredPost.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/10 font-sora text-xs font-bold uppercase text-[#0A0A0A] group-hover:text-[#F63E04]">
              <span>READ FULL INSIGHT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

          {/* Side Small Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {sidePosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer p-6 rounded-2xl bg-white border border-black/10 shadow-sm hover:border-[#F63E04]/50 hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between flex-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#F8EEEA] text-[#F63E04] text-[10px] font-sora font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="font-sora text-[11px] text-[#686868]">{post.date}</span>
                  </div>

                  <h4 className="font-sora text-lg font-extrabold uppercase text-[#0A0A0A] group-hover:text-[#F63E04] transition-colors leading-tight">
                    {post.title}
                  </h4>

                  <p className="font-sora text-xs text-[#686868] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/5 font-sora text-xs font-bold uppercase text-[#0A0A0A] group-hover:text-[#F63E04]">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
}
