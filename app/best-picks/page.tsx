import type { Metadata } from 'next';
import { products } from '@/data/products';
import BestPicksGrid from '@/components/best-picks/BestPicksGrid';

export const metadata: Metadata = {
  title: 'Best Sleep Products 2026 — Editor-Curated Picks',
  description: 'Our editor-curated best picks across mattresses, beds, bedding, pillows and sleep accessories. Every product independently tested and approved.',
  alternates: { canonical: 'https://bedgiant.co.uk/best-picks' },
  openGraph: {
    title: 'Best Sleep Products 2026 | BedGiant',
    description: 'Editor-curated picks across mattresses, beds, bedding and sleep accessories. Independently tested, no paid placements.',
    url: 'https://bedgiant.co.uk/best-picks',
    type: 'website',
  },
};

export default function BestPicksPage() {
  return (
    <>
      <section className="bg-[#2A2118] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9A8880] mb-5">
            Curated Picks
          </p>
          <h1 className="font-display font-light text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Only the{' '}
            <em className="italic">best</em>{' '}
            make it here.
          </h1>
          <p className="mt-5 text-base lg:text-[1.0625rem] text-[#9A8880] leading-relaxed max-w-xl mx-auto">
            Every product in our Best Picks list has been reviewed, tested or extensively researched by our team. No paid placements. No padding.
          </p>
        </div>
      </section>

      <BestPicksGrid products={products} />
    </>
  );
}
