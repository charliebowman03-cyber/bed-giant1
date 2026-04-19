'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-[#3D2E25] py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
            The Sleep Edit
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
            Better sleep,<br />
            <em className="italic font-light">in your inbox</em>
          </h2>
          <p className="text-[#9A8880] text-base leading-relaxed mb-8">
            New reviews, best picks and deals worth knowing about — weekly. No fluff, no spam.
          </p>

          {submitted ? (
            <p className="text-[#EDE0D8] font-medium">You're in. Talk soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/15 text-white placeholder:text-[#9A8880] text-sm px-5 py-3 rounded-full outline-none focus:border-[#EDE0D8] transition-colors duration-200"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer shrink-0"
              >
                Subscribe
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            </form>
          )}

          <p className="text-xs text-[#9A8880]/60 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
