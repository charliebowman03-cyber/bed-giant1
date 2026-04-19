import { reviews } from '@/data/reviews';
import ReviewCard from '@/components/ui/ReviewCard';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';

export default function LatestReviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <ScrollReveal>
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A8880] mb-2">
              Latest Reviews
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[#2A2118] leading-tight">
              What we've been testing
            </h2>
          </div>
          <Link
            href="/reviews"
            className="shrink-0 text-sm font-medium text-[#9A8880] hover:text-[#2A2118] transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline"
          >
            All reviews →
          </Link>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <ReviewCard key={review.id} review={review} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
