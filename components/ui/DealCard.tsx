'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Deal } from '@/lib/types';
import AffiliateCta from './AffiliateCta';

interface DealCardProps {
  deal: Deal;
  delay?: number;
}

export default function DealCard({ deal, delay = 0 }: DealCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col bg-white rounded-2xl border border-[#EDE8E3] overflow-hidden hover:border-[#B08070]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#F5EFE9]">
        <Image
          src={deal.image}
          alt={deal.productName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Discount badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-[#2A2118] text-white text-xs font-bold px-3 py-1 rounded-full">
            -{deal.discountPercent}%
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A8880] mb-1">
            {deal.brand}
          </p>
          <h3 className="font-display text-base font-semibold text-[#2A2118] leading-snug line-clamp-2">
            {deal.productName}
          </h3>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-3">
          <span className="font-display text-xl font-bold text-[#2A2118]">
            £{deal.dealPrice.toLocaleString()}
          </span>
          <span className="text-sm text-[#9A8880] line-through">
            £{deal.originalPrice.toLocaleString()}
          </span>
          <span className="text-xs font-semibold text-[#6B5040] bg-[#EDE0D8] px-2 py-0.5 rounded-full">
            Save £{(deal.originalPrice - deal.dealPrice).toLocaleString()}
          </span>
        </div>

        {deal.expiresAt && (
          <p className="text-xs text-[#9A8880]">
            Deal expires{' '}
            {new Date(deal.expiresAt).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        )}

        <div className="mt-auto pt-3 border-t border-[#EDE8E3]">
          <AffiliateCta
            affiliateLink={deal.affiliateLink}
            label="See Deal"
            variant="primary"
            className="w-full justify-center"
          />
        </div>
      </div>
    </motion.article>
  );
}
