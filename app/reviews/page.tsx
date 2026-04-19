import type { Metadata } from 'next';
import { reviews } from '@/data/reviews';
import ReviewsGrid from '@/components/reviews/ReviewsGrid';

export const metadata: Metadata = {
  title: 'Expert Sleep Product Reviews — Mattresses, Beds & More',
  description: 'In-depth, independent reviews of mattresses, beds, bedding, pillows and sleep accessories. Tested for a minimum of 30 nights. Written honestly.',
  alternates: { canonical: 'https://bedgiant.com/reviews' },
  openGraph: {
    title: 'Expert Sleep Product Reviews | BedGiant',
    description: 'Mattresses, beds, bedding and sleep accessories reviewed by our expert team. Minimum 30 nights testing. No paid placements.',
    url: 'https://bedgiant.com/reviews',
    type: 'website',
  },
};

export default function ReviewsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F5EFE9] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9A8880] mb-5">
            Expert Reviews
          </p>
          <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Tested. Written.{' '}
            <em className="italic">Honest.</em>
          </h1>
          <p className="mt-5 text-base lg:text-[1.0625rem] text-[#6B5040] leading-relaxed max-w-xl mx-auto">
            Every review on this site is based on real use — nights slept, mornings woken up in, and months of follow-up. No press samples returned. No affiliate pressure on scores.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <ReviewsGrid reviews={reviews} />
    </>
  );
}
