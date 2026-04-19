import type { Metadata } from 'next';
import { deals } from '@/data/deals';
import DealCard from '@/components/ui/DealCard';

export const metadata: Metadata = {
  title: 'Best Mattress & Bed Deals — Verified Sales & Discounts',
  description: 'The best current deals on mattresses, beds, bedding and sleep accessories. Every discount verified — no fake "was" prices.',
  alternates: { canonical: 'https://bedgiant.co.uk/deals' },
  openGraph: {
    title: 'Best Mattress & Bed Deals | BedGiant',
    description: 'Verified deals on mattresses, beds and bedding. No manufactured urgency, no fake discounts.',
    url: 'https://bedgiant.co.uk/deals',
    type: 'website',
  },
};

export default function DealsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#2A2118] pt-20 pb-16 lg:pt-28 lg:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(139,110,90,0.18) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#8B6E5A]/20 border border-[#8B6E5A]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EDE0D8] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#EDE0D8]">
              {deals.length} active deals
            </span>
          </div>
          <h1 className="font-display font-light text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-5">
            Deals worth{' '}
            <em className="italic">waking up for.</em>
          </h1>
          <p className="text-base lg:text-[1.0625rem] text-[#9A8880] leading-relaxed max-w-xl mx-auto">
            We track sales across all the brands we review. Every deal here has been verified — no fake "was" prices, no manufactured urgency.
          </p>
        </div>
      </section>

      {/* Deals grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-1">
              Current Deals
            </p>
            <h2 className="font-display text-2xl font-semibold text-[#2A2118]">
              {deals.length} deals found
            </h2>
          </div>
          <p className="text-xs text-[#9A8880]">Updated regularly</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <DealCard key={deal.id} deal={deal} delay={i * 0.07} />
          ))}
        </div>

        <p className="mt-12 text-xs text-[#9A8880] leading-relaxed text-center max-w-xl mx-auto">
          Prices and availability are accurate at time of publishing but may change. Some links are affiliate links — if you purchase through them, we may earn a small commission at no extra cost to you.
        </p>
      </div>
    </>
  );
}
