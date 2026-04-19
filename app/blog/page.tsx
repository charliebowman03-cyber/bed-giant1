import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { guides } from '@/data/guides';
import GuideCard from '@/components/ui/GuideCard';

export const metadata: Metadata = {
  title: 'Mattress & Bed Buying Guides — Expert Advice',
  description: 'Straight-talking buying guides for mattresses, beds, bedding, pillows and sleep accessories. No jargon. Just what you need to know before you buy.',
  alternates: { canonical: 'https://bedgiant.com/blog' },
  openGraph: {
    title: 'Mattress & Bed Buying Guides | BedGiant',
    description: 'Expert buying guides for every sleep product category. Cut through the noise and spend your money wisely.',
    url: 'https://bedgiant.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const featured = guides[0];
  const rest = guides.slice(1);

  return (
    <>
      {/* Page hero */}
      <section className="bg-[#F5EFE9] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-5">
            Buying Guides
          </p>
          <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Spend your money{' '}
            <em className="italic">wisely.</em>
          </h1>
          <p className="mt-5 text-base lg:text-[1.0625rem] text-[#6B5040] leading-relaxed max-w-xl mx-auto">
            No jargon, no filler. Our guides cut straight to what matters so you can make a confident decision without reading twelve different websites.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">

        {/* Featured guide */}
        <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[#EDE8E3] hover:border-[#B08070]/40 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 mb-14">
          <Link href={`/blog/${featured.slug}`} className="block relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest bg-white/90 backdrop-blur-sm text-[#3D2E25] px-2.5 py-1 rounded-full">
                {featured.tag}
              </span>
            </div>
          </Link>
          <div className="flex flex-col justify-center bg-white p-8 lg:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-3">
              Featured Guide
            </p>
            <Link href={`/blog/${featured.slug}`}>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[#2A2118] leading-tight mb-4 group-hover:text-[#8B6E5A] transition-colors duration-200">
                {featured.title}
              </h2>
            </Link>
            <p className="text-base text-[#6B5040] leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-[#9A8880]">
                <span className="font-medium text-[#3D2E25]">{featured.author}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="text-sm font-medium text-[#8B6E5A] hover:text-[#7A5E4A] transition-colors duration-200 cursor-pointer"
              >
                Read guide →
              </Link>
            </div>
          </div>
        </div>

        {/* Rest of guides */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-[#2A2118]">All Guides</h2>
          <span className="text-xs text-[#9A8880]">{guides.length} guides</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </>
  );
}
