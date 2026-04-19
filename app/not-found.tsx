import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'We couldn\'t find what you were looking for. Browse our reviews, guides and best picks instead.',
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      {/* Giant 404 */}
      <p className="font-display text-[120px] sm:text-[180px] font-semibold leading-none text-[#EDE8E3] select-none mb-0">
        404
      </p>

      <div className="-mt-4 mb-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9A8880] mb-4">
          Page not found
        </p>
        <h1 className="font-display font-light text-[#2A2118] text-3xl sm:text-4xl leading-tight mb-4">
          This page has left the building.{' '}
          <em className="italic">And the bedroom.</em>
        </h1>
        <p className="text-base text-[#6B5040] leading-relaxed max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved. Here's somewhere useful to go instead.
        </p>
      </div>

      {/* Nav options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl w-full mb-10">
        {[
          { label: 'Reviews', href: '/reviews', desc: 'Expert-tested product reviews' },
          { label: 'Best Picks', href: '/best-picks', desc: 'Editor-curated top products' },
          { label: 'Buying Guides', href: '/blog', desc: 'Straight-talking advice' },
        ].map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white border border-[#EDE8E3] rounded-2xl p-5 text-left hover:border-[#B08070]/40 hover:shadow-md hover:shadow-black/5 transition-all duration-200 group cursor-pointer"
          >
            <p className="font-display font-semibold text-[#2A2118] text-base mb-1 group-hover:text-[#8B6E5A] transition-colors duration-150">
              {link.label}
            </p>
            <p className="text-xs text-[#9A8880] leading-snug">{link.desc}</p>
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
      >
        Back to home
      </Link>
    </section>
  );
}
