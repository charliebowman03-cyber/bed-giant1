import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviews } from '@/data/reviews';
import StarRating from '@/components/ui/StarRating';
import AffiliateCta from '@/components/ui/AffiliateCta';
import ReviewCard from '@/components/ui/ReviewCard';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  return reviews.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = reviews.find(r => r.slug === slug);
  if (!review) return {};
  const canonical = `${SITE_URL}/reviews/${slug}`;
  return {
    title: review.title,
    description: review.excerpt,
    alternates: { canonical },
    openGraph: {
      title: review.title,
      description: review.excerpt,
      url: canonical,
      type: 'article',
      images: [{ url: review.image, width: 1200, height: 800, alt: review.productName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: review.title,
      description: review.excerpt,
      images: [review.image],
    },
  };
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  const pct = (value / 10) * 100;
  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium text-[#6B5040] w-24 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-[#EDE8E3] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#8B6E5A] rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-bold text-[#2A2118] w-6 text-right shrink-0">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const review = reviews.find(r => r.slug === slug);
  if (!review) notFound();

  const related = reviews
    .filter(r => r.id !== review.id && r.category === review.category)
    .slice(0, 3);

  const fallbackRelated = reviews
    .filter(r => r.id !== review.id)
    .slice(0, 3 - related.length);

  const relatedReviews = [...related, ...fallbackRelated].slice(0, 3);

  const publishedDate = new Date(review.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: review.title,
    description: review.excerpt,
    datePublished: review.publishedAt,
    url: `${SITE_URL}/reviews/${review.slug}`,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BedGiant',
      url: SITE_URL,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'Product',
      name: review.productName,
      brand: review.brand ? { '@type': 'Brand', name: review.brand } : undefined,
      image: review.image,
      offers: review.priceFrom ? {
        '@type': 'Offer',
        priceCurrency: 'GBP',
        price: review.priceFrom,
        availability: 'https://schema.org/InStock',
        url: review.affiliateLink?.url,
      } : undefined,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
        reviewCount: 1,
      },
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-0">
        <nav className="flex items-center gap-2 text-xs text-[#9A8880]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#2A2118] transition-colors duration-150">Home</Link>
          <span>/</span>
          <Link href="/reviews" className="hover:text-[#2A2118] transition-colors duration-150">Reviews</Link>
          <span>/</span>
          <span className="text-[#2A2118]">{review.productName}</span>
        </nav>
      </div>

      {/* Article hero */}
      <article className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pb-24">

        {/* Two-col layout: content left, sticky sidebar right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">

          {/* ── Main content ── */}
          <div>
            {/* Category + title */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
              {review.category}
            </p>
            <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              {review.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-[#EDE8E3]">
              <StarRating rating={review.rating} size="md" />
              <span className="text-sm font-bold text-[#2A2118]">{review.rating} / 5</span>
              <span className="text-[#EDE8E3]">|</span>
              <span className="text-sm text-[#9A8880]">By <span className="text-[#3D2E25] font-medium">{review.author}</span></span>
              <span className="text-[#EDE8E3]">|</span>
              <span className="text-sm text-[#9A8880]">{publishedDate}</span>
              <span className="text-[#EDE8E3]">|</span>
              <span className="text-sm text-[#9A8880]">{review.readTime} min read</span>
            </div>

            {/* Hero image */}
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] mb-10">
              <Image
                src={review.image}
                alt={review.productName}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
                priority
              />
            </div>

            {/* Excerpt / intro */}
            <p className="text-lg text-[#3D2E25] leading-relaxed mb-10 font-light">
              {review.excerpt}
            </p>

            {/* Score breakdown */}
            {review.scores && (
              <div className="bg-[#F5EFE9] rounded-2xl p-6 mb-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-1">
                      Overall Score
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-semibold text-[#2A2118]">
                        {review.rating}
                      </span>
                      <span className="text-sm text-[#9A8880]">/ 5</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <StarRating rating={review.rating} size="md" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <ScoreBar label="Comfort" value={review.scores.comfort} />
                  <ScoreBar label="Value" value={review.scores.value} />
                  <ScoreBar label="Durability" value={review.scores.durability} />
                  <ScoreBar label="Design" value={review.scores.design} />
                </div>
              </div>
            )}

            {/* Pros & Cons */}
            {(review.pros || review.cons) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {review.pros && (
                  <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6B5040] mb-4">
                      What we loved
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {review.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#3D2E25] leading-relaxed">
                          <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#EDE0D8] flex items-center justify-center text-[#6B5040]">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                              <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {review.cons && (
                  <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#9A8880] mb-4">
                      Worth knowing
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {review.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#3D2E25] leading-relaxed">
                          <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full bg-[#F5EFE9] flex items-center justify-center text-[#9A8880]">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                              <path d="M2 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Verdict */}
            {review.verdict && (
              <div className="border-l-2 border-[#8B6E5A] pl-6 mb-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-2">
                  Our Verdict
                </p>
                <p className="font-display text-xl font-light text-[#2A2118] leading-relaxed italic">
                  "{review.verdict}"
                </p>
              </div>
            )}

            {/* Methodology note */}
            <div className="bg-[#F5EFE9] rounded-xl px-5 py-4 text-sm text-[#6B5040] leading-relaxed">
              <span className="font-semibold">How we test: </span>
              All products reviewed on Bed Giant are tested by our editorial team for a minimum of 30 nights before publishing. We are not paid for positive reviews. Some links on this page may be affiliate links — if you buy through them, we may earn a small commission at no extra cost to you.
            </div>
          </div>

          {/* ── Sticky sidebar ── */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-5">
            {/* Buy box */}
            <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-1">
                {review.brand}
              </p>
              <h2 className="font-display text-xl font-semibold text-[#2A2118] leading-tight mb-3">
                {review.productName}
              </h2>
              <StarRating rating={review.rating} size="sm" />
              {review.priceFrom && (
                <p className="mt-4 text-sm text-[#6B5040]">
                  From{' '}
                  <span className="font-display text-2xl font-bold text-[#2A2118]">
                    £{review.priceFrom.toLocaleString()}
                  </span>
                </p>
              )}
              {review.affiliateLink && (
                <div className="mt-5">
                  <AffiliateCta
                    affiliateLink={review.affiliateLink}
                    label={`Buy at ${review.affiliateLink.retailer}`}
                    variant="primary"
                    className="w-full justify-center"
                  />
                </div>
              )}
              <p className="mt-3 text-[10px] text-[#9A8880] text-center leading-relaxed">
                Affiliate link — we may earn a commission.{' '}
                <Link href="/about" className="underline hover:text-[#6B5040] transition-colors duration-150">
                  How this works
                </Link>
              </p>
            </div>

            {/* Quick stats */}
            {review.scores && (
              <div className="bg-[#F5EFE9] rounded-2xl p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
                  At a glance
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Comfort', value: review.scores.comfort },
                    { label: 'Value', value: review.scores.value },
                    { label: 'Durability', value: review.scores.durability },
                    { label: 'Design', value: review.scores.design },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white rounded-xl p-3 text-center">
                      <span className="font-display text-2xl font-bold text-[#2A2118]">
                        {stat.value.toFixed(1)}
                      </span>
                      <p className="text-[10px] font-medium text-[#9A8880] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related reviews */}
        {relatedReviews.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#EDE8E3]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-2">
                  More Reviews
                </p>
                <h2 className="font-display text-2xl font-semibold text-[#2A2118]">
                  You might also like
                </h2>
              </div>
              <Link
                href="/reviews"
                className="text-sm font-medium text-[#9A8880] hover:text-[#2A2118] transition-colors duration-200 underline-offset-4 hover:underline cursor-pointer"
              >
                All reviews →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedReviews.map((r, i) => (
                <ReviewCard key={r.id} review={r} delay={i * 0.08} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
