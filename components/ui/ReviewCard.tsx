'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Review } from '@/lib/types';
import StarRating from './StarRating';
import Badge from './Badge';

interface ReviewCardProps {
  review: Review;
  delay?: number;
}

export default function ReviewCard({ review, delay = 0 }: ReviewCardProps) {
  const verdict = review.rating >= 4.7
    ? 'highly-recommended'
    : review.rating >= 4.0
    ? 'recommended'
    : 'recommended';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-[#EDE8E3] overflow-hidden hover:border-[#B08070]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/reviews/${review.slug}`} className="block relative overflow-hidden aspect-[4/3]">
        <Image
          src={review.image}
          alt={review.productName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={verdict} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A8880]">
          {review.category}
        </p>

        <Link href={`/reviews/${review.slug}`}>
          <h3 className="font-display text-base font-semibold text-[#2A2118] leading-snug hover:text-[#8B6E5A] transition-colors duration-200 line-clamp-2">
            {review.title}
          </h3>
        </Link>

        <StarRating rating={review.rating} size="sm" />

        <p className="text-sm text-[#9A8880] leading-relaxed line-clamp-2 flex-1">
          {review.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-[#EDE8E3]">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#9A8880]">{review.author}</span>
            <span className="text-[#EDE8E3]">·</span>
            <span className="text-xs text-[#9A8880]">{review.readTime} min read</span>
          </div>
          <Link
            href={`/reviews/${review.slug}`}
            className="text-xs font-medium text-[#8B6E5A] hover:text-[#7A5E4A] transition-colors duration-200 cursor-pointer"
          >
            Read →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
