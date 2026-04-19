'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/ui/ProductCard';

const CATEGORIES = ['All', 'Mattresses', 'Beds & Frames', 'Bedding & Linen', 'Pillows', 'Sleep Accessories', 'Bedroom Lighting'] as const;
const SORT_OPTIONS = [
  { value: 'top-rated', label: 'Top Rated' },
  { value: 'price-asc',  label: 'Price: Low–High' },
  { value: 'price-desc', label: 'Price: High–Low' },
] as const;

type SortValue = typeof SORT_OPTIONS[number]['value'];

export default function BestPicksGrid({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sort, setSort] = useState<SortValue>('top-rated');

  const filtered = useMemo(() => {
    let result = activeCategory === 'All'
      ? [...products]
      : products.filter(p => p.category === activeCategory);

    if (sort === 'top-rated')   result.sort((a, b) => b.rating - a.rating);
    if (sort === 'price-asc')   result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc')  result.sort((a, b) => b.price - a.price);

    return result;
  }, [products, activeCategory, sort]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
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
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#9A8880] font-medium">Sort:</span>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortValue)}
            className="text-xs font-medium text-[#2A2118] bg-white border border-[#EDE8E3] rounded-full px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A] focus-visible:ring-offset-1 focus:border-[#2A2118] transition-colors duration-200 cursor-pointer appearance-none pr-8"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239A8880' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
          >
            {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <p className="text-xs text-[#9A8880] font-medium mb-8">
        {filtered.length} {filtered.length === 1 ? 'pick' : 'picks'}
        {activeCategory !== 'All' && ` in ${activeCategory}`}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}
