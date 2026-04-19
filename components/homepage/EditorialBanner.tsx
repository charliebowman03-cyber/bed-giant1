import Image from 'next/image';
import Link from 'next/link';

export default function EditorialBanner() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '60vh' }}>
      {/* Photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1800&q=85"
          alt="Warm cosy bedroom with premium linen and natural light"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#FBF8F5]/25" />
      </div>

      {/* Centred content */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 py-28 lg:py-40">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6B5040] mb-5">
          Tested. Reviewed. Curated.
        </p>

        <h2 className="font-display font-semibold text-[#2A2118] leading-[1.05] tracking-tight
                       text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-2xl">
          Sleep Better.<br />
          <em className="italic font-light">Style Better.</em>
        </h2>

        <p className="mt-5 text-base lg:text-[1.0625rem] text-[#3D2E25] leading-relaxed max-w-sm">
          Curated beds, bedding and bedroom essentials for a better night's sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            href="/best-picks"
            className="inline-flex items-center justify-center bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
          >
            View Best Picks
          </Link>
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-[#D5CCC4] text-[#2A2118] text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
          >
            Read Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
