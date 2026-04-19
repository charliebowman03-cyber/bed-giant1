'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import type { Guide } from '@/lib/types';

interface GuideCardProps {
  guide: Guide;
  delay?: number;
}

export default function GuideCard({ guide, delay = 0 }: GuideCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-[#EDE8E3] overflow-hidden hover:border-[#B08070]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/blog/${guide.slug}`} className="block relative overflow-hidden aspect-[16/9]">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Tag pill overlay */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-[#3D2E25] px-2.5 py-1 rounded-full">
            {guide.tag}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <Link href={`/blog/${guide.slug}`}>
          <h3 className="font-display text-base font-semibold text-[#2A2118] leading-snug hover:text-[#8B6E5A] transition-colors duration-200 line-clamp-2">
            {guide.title}
          </h3>
        </Link>

        <p className="text-sm text-[#9A8880] leading-relaxed line-clamp-2 flex-1">
          {guide.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#EDE8E3]">
          <div className="flex items-center gap-1.5 text-xs text-[#9A8880]">
            <Clock size={12} strokeWidth={1.5} aria-hidden="true" />
            <span>{guide.readTime} min read</span>
          </div>
          <Link
            href={`/blog/${guide.slug}`}
            className="text-xs font-medium text-[#8B6E5A] hover:text-[#7A5E4A] transition-colors duration-200 cursor-pointer"
          >
            Read Guide →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
