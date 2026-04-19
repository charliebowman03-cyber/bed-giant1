'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import AffiliateCta from '@/components/ui/AffiliateCta';
import StarRating from '@/components/ui/StarRating';

const ALL = 'All';
const categories = [ALL, ...Array.from(new Set(products.map(p => p.category))).sort()];

const badgeLabel: Record<string, string> = {
  'new': 'New In',
  'hot': 'Bestseller',
  'editors-pick': "Editor's Pick",
  'deal': 'On Sale',
};

export default function ShopPage() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(
    () => active === ALL ? products : products.filter(p => p.category === active),
    [active],
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5EFE9] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9A8880] mb-5">
            Shop
          </p>
          <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Every product{' '}
            <em className="italic">we actually rate.</em>
          </h1>
          <p className="mt-5 text-base lg:text-[1.0625rem] text-[#6B5040] leading-relaxed max-w-xl mx-auto">
            Only products our team has reviewed, tested or extensively researched make it here. No filler, no paid placements.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors duration-150 cursor-pointer ${
                active === cat
                  ? 'bg-[#2A2118] border-[#2A2118] text-white'
                  : 'bg-white border-[#EDE8E3] text-[#6B5040] hover:border-[#8B6E5A] hover:text-[#2A2118]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-[#9A8880] mb-8">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          {active !== ALL ? ` in ${active}` : ''}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#EDE8E3] overflow-hidden flex flex-col hover:border-[#B08070]/40 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFE9]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      product.badge === 'editors-pick'
                        ? 'bg-[#2A2118] text-white'
                        : product.badge === 'hot'
                        ? 'bg-[#8B6E5A] text-white'
                        : 'bg-white text-[#2A2118]'
                    }`}>
                      {badgeLabel[product.badge]}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A8880] mb-1">
                  {product.brand}
                </p>
                <h2 className="font-display text-base font-semibold text-[#2A2118] leading-snug mb-2">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-xs text-[#9A8880]">
                    {product.rating} ({product.reviewCount.toLocaleString()})
                  </span>
                </div>

                <p className="font-display text-xl font-bold text-[#2A2118] mb-4">
                  £{product.price.toLocaleString()}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  <AffiliateCta
                    affiliateLink={product.affiliateLink}
                    label={`Buy at ${product.affiliateLink.retailer}`}
                    variant="primary"
                    className="w-full justify-center text-xs"
                  />
                  {/* Link to review if one exists */}
                  <Link
                    href={`/reviews/${product.slug}`}
                    className="text-xs text-center text-[#9A8880] hover:text-[#2A2118] transition-colors duration-150 underline-offset-2 hover:underline cursor-pointer py-1"
                  >
                    Read our review →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate note */}
        <p className="mt-14 text-xs text-[#9A8880] leading-relaxed text-center max-w-lg mx-auto">
          Some links are affiliate links. If you purchase through them we may earn a small commission — at no extra cost to you. Prices correct at time of publishing.
        </p>
      </div>
    </>
  );
}
