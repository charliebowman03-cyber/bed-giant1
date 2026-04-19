import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const styles = [
  {
    label: 'Modern Minimal',
    description: 'Clean lines, neutral tones, nothing wasted.',
    image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80',
    href: '/best-picks/beds-frames',
  },
  {
    label: 'Cosy Country',
    description: 'Layered textures, warm fabrics, lived-in comfort.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    href: '/best-picks/bedding-linen',
  },
  {
    label: 'Hotel Luxury',
    description: 'Crisp whites, deep pillows, five-star every night.',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80',
    href: '/best-picks/mattresses',
  },
];

export default function SleepStyles() {
  return (
    <section className="bg-[#F5EFE9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Editorial centred header */}
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
              Browse by Aesthetic
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-[#2A2118] leading-tight max-w-xl mx-auto">
              Find Your <em className="italic font-light">Sleep Style</em>
            </h2>
            <p className="mt-4 text-base text-[#9A8880] leading-relaxed max-w-md mx-auto">
              Whether you're drawn to clean lines or layered textures, find the picks
              that match your bedroom vision.
            </p>

            {/* Pill CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link
                href="/best-picks"
                className="inline-flex items-center justify-center bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-7 py-3 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Explore Best Picks
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center border border-[#3D2E25] text-[#3D2E25] hover:bg-[#3D2E25] hover:text-white text-sm font-medium px-7 py-3 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 3-col style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
          {styles.map((style, i) => (
            <ScrollReveal key={style.label} delay={i * 0.1}>
              <Link
                href={style.href}
                className="group block cursor-pointer"
                aria-label={`Browse ${style.label} bedroom picks`}
              >
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src={style.image}
                    alt={style.label}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Very subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#2A2118]/0 group-hover:bg-[#2A2118]/10 transition-colors duration-300" />
                </div>

                {/* Label */}
                <div className="pt-4 text-center">
                  <h3 className="font-display text-xl font-semibold text-[#2A2118] group-hover:text-[#8B6E5A] transition-colors duration-200">
                    {style.label}
                  </h3>
                  <p className="mt-1 text-sm text-[#9A8880] leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
