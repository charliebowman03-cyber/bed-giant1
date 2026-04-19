import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/data/guides';
import GuideCard from '@/components/ui/GuideCard';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) return {};
  const canonical = `${SITE_URL}/blog/${slug}`;
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: canonical,
      type: 'article',
      images: [{ url: guide.image, width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.excerpt,
      images: [guide.image],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find(g => g.slug === slug);
  if (!guide) notFound();

  const related = guides
    .filter(g => g.slug !== guide.slug && g.tag === guide.tag)
    .slice(0, 3);

  const fallback = guides
    .filter(g => g.slug !== guide.slug)
    .slice(0, 3 - related.length);

  const relatedGuides = [...related, ...fallback].slice(0, 3);

  const publishedDate = new Date(guide.publishedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    url: `${SITE_URL}/blog/${guide.slug}`,
    image: guide.image,
    author: {
      '@type': 'Person',
      name: guide.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BedGiant',
      url: SITE_URL,
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
          <Link href="/blog" className="hover:text-[#2A2118] transition-colors duration-150">Guides</Link>
          <span>/</span>
          <span className="text-[#2A2118] truncate max-w-[200px]">{guide.title}</span>
        </nav>
      </div>

      {/* Hero image */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        <div className="relative w-full overflow-hidden rounded-2xl aspect-[21/9]">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2118]/40 via-transparent to-transparent" />
          {/* Tag pill */}
          <div className="absolute top-5 left-5">
            <span className="text-[10px] font-semibold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-[#3D2E25] px-3 py-1.5 rounded-full">
              {guide.tag}
            </span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">

          {/* Main content */}
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              {guide.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-[#EDE8E3]">
              <span className="text-sm text-[#9A8880]">
                By <span className="font-medium text-[#3D2E25]">{guide.author}</span>
              </span>
              <span className="text-[#EDE8E3]">|</span>
              <span className="text-sm text-[#9A8880]">{publishedDate}</span>
              <span className="text-[#EDE8E3]">|</span>
              <span className="text-sm text-[#9A8880]">{guide.readTime} min read</span>
            </div>

            {/* Intro / excerpt */}
            <p className="text-lg text-[#3D2E25] leading-relaxed mb-12 font-light">
              {guide.excerpt}
            </p>

            {/* Body sections */}
            {guide.sections && guide.sections.length > 0 && (
              <div className="flex flex-col gap-10">
                {guide.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-[#2A2118] leading-snug mb-4">
                      {section.heading}
                    </h2>
                    <div className="flex flex-col gap-4">
                      {section.body.split('\n\n').map((para, j) => (
                        <p key={j} className="text-base text-[#6B5040] leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Editorial note */}
            <div className="mt-12 bg-[#F5EFE9] rounded-xl px-5 py-4 text-sm text-[#6B5040] leading-relaxed">
              <span className="font-semibold text-[#2A2118]">Our editorial standards: </span>
              Buying guides on Bed Giant are written by our editorial team based on hands-on testing and independent research. We are not paid to recommend specific products. Some links may be affiliate links — if you purchase through them, we may earn a small commission at no extra cost to you.{' '}
              <Link href="/about" className="underline hover:text-[#2A2118] transition-colors duration-150">
                How we work
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-5">
            {/* Table of contents */}
            {guide.sections && guide.sections.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#EDE8E3] p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
                  In this guide
                </p>
                <ol className="flex flex-col gap-3">
                  {guide.sections.map((section, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-display text-xs text-[#9A8880] mt-0.5 shrink-0 w-4">
                        {i + 1}
                      </span>
                      <span className="text-sm text-[#6B5040] leading-snug">
                        {section.heading}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Browse reviews CTA */}
            <div className="bg-[#2A2118] rounded-2xl p-6 text-center">
              <p className="font-display text-lg font-light text-white leading-tight mb-2">
                Ready to buy?
              </p>
              <p className="text-xs text-[#9A8880] leading-relaxed mb-5">
                See our expert-tested reviews before you spend a penny.
              </p>
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200 w-full cursor-pointer"
              >
                Browse reviews
              </Link>
            </div>
          </aside>
        </div>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#EDE8E3]">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-2">
                  More Guides
                </p>
                <h2 className="font-display text-2xl font-semibold text-[#2A2118]">
                  Keep reading
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-[#9A8880] hover:text-[#2A2118] transition-colors duration-200 underline-offset-4 hover:underline cursor-pointer"
              >
                All guides →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGuides.map((g, i) => (
                <GuideCard key={g.id} guide={g} delay={i * 0.08} />
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
