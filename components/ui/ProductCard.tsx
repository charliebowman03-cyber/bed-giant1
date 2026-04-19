'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/types';
import Badge from './Badge';
import StarRating from './StarRating';
import AffiliateCta from './AffiliateCta';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export default function ProductCard({ product, delay = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-[#EDE8E3] overflow-hidden hover:border-[#B08070]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <Link href={`/reviews/${product.slug}`} className="block relative overflow-hidden aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={product.badge} />
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A8880] mb-1">
            {product.brand}
          </p>
          <Link href={`/reviews/${product.slug}`}>
            <h3 className="font-display text-base font-semibold text-[#2A2118] leading-snug hover:text-[#8B6E5A] transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
        </div>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#EDE8E3]">
          <span className="font-display text-lg font-bold text-[#2A2118]">
            £{product.price.toLocaleString()}
          </span>
          <AffiliateCta
            affiliateLink={product.affiliateLink}
            label="Check Price"
            size="sm"
          />
        </div>
      </div>
    </motion.article>
  );
}
