'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
  delay?: number;
}

export default function CategoryCard({ category, delay = 0 }: CategoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/best-picks/${category.slug}`}
        className="group relative block overflow-hidden rounded-2xl aspect-[3/2] cursor-pointer"
        aria-label={`Browse ${category.name}`}
      >
        {/* Image */}
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay — always present, deepens on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2118]/80 via-[#2A2118]/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Text — slides up slightly on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-display text-lg font-bold text-white leading-tight">
            {category.name}
          </h3>
          <p className="text-xs text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {category.productCount} picks →
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
