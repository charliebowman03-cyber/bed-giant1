'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { reviews } from '@/data/reviews';
import { guides } from '@/data/guides';
import { products } from '@/data/products';

type ResultItem = {
  type: 'review' | 'guide' | 'product';
  title: string;
  label: string;
  href: string;
};

function searchAll(query: string): ResultItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const matchedReviews: ResultItem[] = reviews
    .filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.productName.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.excerpt.toLowerCase().includes(q)
    )
    .slice(0, 4)
    .map(r => ({
      type: 'review',
      title: r.title,
      label: r.category,
      href: `/reviews/${r.slug}`,
    }));

  const matchedGuides: ResultItem[] = guides
    .filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.tag.toLowerCase().includes(q) ||
      g.excerpt.toLowerCase().includes(q)
    )
    .slice(0, 3)
    .map(g => ({
      type: 'guide',
      title: g.title,
      label: g.tag,
      href: `/blog/${g.slug}`,
    }));

  const matchedProducts: ResultItem[] = products
    .filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
    .slice(0, 3)
    .map(p => ({
      type: 'product',
      title: p.name,
      label: p.brand,
      href: `/reviews/${p.slug}`,
    }));

  return [...matchedReviews, ...matchedGuides, ...matchedProducts];
}

const TYPE_LABEL: Record<ResultItem['type'], string> = {
  review:  'Review',
  guide:   'Guide',
  product: 'Product',
};

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = searchAll(query);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setActiveIndex(-1);
  }, []);

  // Listen for open-search custom event dispatched by the Header
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-search', handler);
    return () => window.removeEventListener('open-search', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    }
    if (e.key === 'Enter' && activeIndex >= 0 && results[activeIndex]) {
      router.push(results[activeIndex].href);
      close();
    }
  };

  const navigate = (href: string) => {
    router.push(href);
    close();
  };

  const suggestions = ['mattress', 'pillow', 'duvet', 'bed frame', 'linen'];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-start justify-center pt-[10vh] px-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#2A2118]/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-[#FBF8F5] rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            {/* Input row */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EDE8E3]">
              <Search size={18} strokeWidth={1.5} className="text-[#9A8880] shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search reviews, guides, products…"
                className="flex-1 bg-transparent text-[#2A2118] placeholder:text-[#9A8880] text-base outline-none"
                aria-label="Search"
                autoComplete="off"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-[#9A8880] hover:text-[#2A2118] transition-colors duration-150 cursor-pointer shrink-0"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              )}
              <button
                onClick={close}
                className="text-[#9A8880] hover:text-[#2A2118] transition-colors duration-150 cursor-pointer shrink-0 ml-1 hidden sm:block"
                aria-label="Close search"
              >
                <span className="text-[10px] font-semibold border border-[#EDE8E3] rounded px-1.5 py-0.5 text-[#9A8880]">ESC</span>
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.length > 0 && results.length === 0 && (
                <div className="px-5 py-10 text-center">
                  <p className="text-sm text-[#9A8880]">No results for <span className="font-medium text-[#2A2118]">"{query}"</span></p>
                  <p className="text-xs text-[#9A8880] mt-1">Try a different search term.</p>
                </div>
              )}

              {results.length > 0 && (
                <ul role="listbox" aria-label="Search results">
                  {results.map((result, i) => (
                    <li key={result.href} role="option" aria-selected={activeIndex === i}>
                      <button
                        onClick={() => navigate(result.href)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors duration-100 cursor-pointer ${
                          activeIndex === i ? 'bg-[#F5EFE9]' : 'hover:bg-[#F5EFE9]/60'
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#9A8880] w-14 shrink-0">
                          {TYPE_LABEL[result.type]}
                        </span>
                        <span className="flex-1 text-sm font-medium text-[#2A2118] leading-snug line-clamp-1">
                          {result.title}
                        </span>
                        <span className="text-[10px] text-[#9A8880] shrink-0 hidden sm:block">{result.label}</span>
                        <ArrowRight size={14} strokeWidth={1.5} className="text-[#9A8880] shrink-0" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {/* Empty / idle state */}
              {!query && (
                <div className="px-5 py-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9A8880] mb-3">
                    Try searching for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map(s => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="text-xs font-medium text-[#3D2E25] bg-white border border-[#EDE8E3] hover:border-[#2A2118] px-3 py-1.5 rounded-full transition-colors duration-150 cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
