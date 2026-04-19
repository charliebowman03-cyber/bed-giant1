'use client';

import { useState, useMemo } from 'react';
import type { Review } from '@/lib/types';
import ReviewCard from '@/components/ui/ReviewCard';

const CATEGORIES = [
  'All',
  'Mattresses',
  'Beds & Frames',
  'Bedding & Linen',
  'Duvets',
  'Pillows',
  'Sleep Accessories',
] as const;

const SORT_OPTIONS = [
  { value: 'latest',     label: 'Latest'     },
  { value: 'top-rated', label: 'Top Rated'  },
  { value: 'quickest',  label: 'Quick Reads' },
] as const;

type SortValue = typeof SORT_OPTIONS[number]['value'];

interface Props {
  reviews: Review[];
}

export default function ReviewsGrid({ reviews }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sort, setSort] = useState<SortValue>('latest');

  const filtered = useMemo(() => {
    let result = activeCategory === 'All'
      ? [...reviews]
      : reviews.filter(r => r.category === activeCategory);

    if (sort === 'latest') {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (sort === 'top-rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'quickest') {
      result.sort((a, b) => a.readTime - b.readTime);
    }

    return result;
  }, [reviews, activeCategory, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A] focus-visible:ring-offset-1 ${
                activeCategory === cat
                  ? 'bg-[#2A2118] text-white border-[#2A2118]'
                  : 'bg-white text-[#3D2E25] border-[#EDE8E3] hover:border-[#2A2118]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#9A8880] font-medium">Sort:</span>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortValue)}
            className="text-xs font-medium text-[#2A2118] bg-white border border-[#EDE8E3] rounded-full px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A] focus-visible:ring-offset-1 focus:border-[#2A2118] transition-colors duration-200 cursor-pointer appearance-none pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239A8880' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-[#9A8880] font-medium mb-8">
        {filtered.length} {filtered.length === 1 ? 'review' : 'reviews'}
        {activeCategory !== 'All' && ` in ${activeCategory}`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.06} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="font-display text-2xl text-[#2A2118] mb-2">No reviews yet</p>
          <p className="text-sm text-[#9A8880]">We're working on it — check back soon.</p>
        </div>
      )}

    </div>
  );
}
