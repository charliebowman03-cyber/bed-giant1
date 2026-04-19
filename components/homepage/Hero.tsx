'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full -mt-16 lg:-mt-[4.5rem] min-h-screen flex flex-col overflow-hidden">

      {/* ── Background photo ── */}
      <div className="absolute inset-0">
        <Image
          src="https://dusk.com/cdn/shop/files/berkeley-ottoman-storage-bed-natural-797384.jpg?v=1748346528&width=1646"
          alt="Beautifully styled bedroom with Berkeley Ottoman bed in natural linen, layered neutral bedding and warm ambient light"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Warm translucent veil — keeps photo alive but ensures legibility */}
        <div className="absolute inset-0 bg-[#FBF8F5]/30" />

        {/* Edge vignette — draws eye to centre */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 130% 110% at 50% 45%, transparent 35%, rgba(42,33,24,0.18) 100%)',
          }}
        />

        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-[#FBF8F5] to-transparent" />
      </div>

      {/* ── Hero content ── */}
      <div className="relative flex flex-col flex-1 items-center justify-center text-center px-6 pt-32 lg:pt-48 pb-40">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6B5040] mb-6"
        >
          Expert Reviews · Curated Picks · Best Deals
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-[#2A2118] leading-[1.02] tracking-tight
                     text-[3rem] sm:text-[4.25rem] lg:text-[5.75rem] xl:text-[6.75rem]
                     max-w-4xl"
        >
          Sleep{' '}
          <em className="italic">Beautifully.</em>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[1rem] lg:text-[1.0625rem] text-[#3D2E25] leading-relaxed
                     font-light max-w-[26rem]"
        >
          Expert-tested beds, mattresses, bedding and bedroom accessories —
          curated for the sleep you deserve.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-3 mt-10"
        >
          <Link
            href="/best-picks"
            className="inline-flex items-center justify-center
                       bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white
                       text-sm font-medium px-9 py-[0.9rem] rounded-full
                       shadow-lg shadow-[#8B6E5A]/30
                       transition-all duration-200 cursor-pointer"
          >
            Explore Best Picks
          </Link>
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center
                       bg-white/60 hover:bg-white/80 backdrop-blur-sm
                       border border-[#C8BFB6] text-[#2A2118]
                       text-sm font-medium px-9 py-[0.9rem] rounded-full
                       transition-all duration-200 cursor-pointer"
          >
            Read Reviews
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="flex items-center gap-10 mt-14"
        >
          {[
            { value: '200+', label: 'Products Tested' },
            { value: '50+',  label: 'Expert Reviews'  },
            { value: '100%', label: 'Independent'      },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-xl font-semibold text-[#2A2118] leading-none">
                {stat.value}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6B5040] mt-1.5">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative flex justify-center pb-10"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-[#9A8880]/80 to-transparent" />
      </motion.div>

    </section>
  );
}
