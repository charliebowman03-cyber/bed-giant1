import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About BedGiant — How We Test & How We Work',
  description: 'Who we are, how we test sleep products, and how we make money. Full transparency on our editorial process and affiliate relationships.',
  alternates: { canonical: 'https://bedgiant.co.uk/about' },
  openGraph: {
    title: 'About BedGiant — How We Test & How We Work',
    description: 'Full transparency on our editorial process, testing methodology and affiliate relationships.',
    url: 'https://bedgiant.co.uk/about',
    type: 'website',
  },
};

const team = [
  {
    name: 'Charlotte Webb',
    role: 'Lead Reviewer — Mattresses & Bedding',
    bio: 'Charlotte has tested over 80 mattresses in the last four years. She sleeps on her side, runs warm, and has strong opinions about thread counts. Previously a product buyer for a major UK department store.',
    initials: 'CW',
  },
  {
    name: 'James Alderton',
    role: 'Senior Reviewer — Beds & Accessories',
    bio: 'James covers bed frames, sleep tech and bedroom lighting. A former furniture designer, he brings a trained eye to build quality and materials. He is deeply suspicious of any mattress with a celebrity endorsement.',
    initials: 'JA',
  },
  {
    name: 'Amelia Foster',
    role: 'Reviewer — Pillows, Duvets & Linen',
    bio: 'Amelia has an almost clinical obsession with soft furnishings. She has washed the same linen duvet cover 60 times to test durability and once spent three weeks comparing pillow fill powers. She does not apologise for this.',
    initials: 'AF',
  },
];

const values = [
  {
    title: 'We test for real.',
    body: 'Every product we review is used for a minimum of 30 nights before we write a word. We don\'t review from press releases. We don\'t accept free samples in exchange for positive coverage.',
  },
  {
    title: 'Scores aren\'t for sale.',
    body: 'Affiliate partnerships pay our bills — but they have zero influence on our ratings. A product with a high commission that performs poorly gets a low score. That\'s not negotiable.',
  },
  {
    title: 'We update old reviews.',
    body: 'A mattress reviewed 18 months ago may have changed in quality or price. We revisit our top picks regularly and update scores, verdict copy and affiliate links to reflect the current product.',
  },
  {
    title: 'We say when we don\'t know.',
    body: 'If we haven\'t personally tested something, we say so. Roundup lists are clearly labelled as research-based rather than hands-on reviews. We\'d rather be honest than comprehensive.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F5EFE9] pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9A8880] mb-5">
            About Bed Giant
          </p>
          <h1 className="font-display font-light text-[#2A2118] leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6">
            We lose sleep{' '}
            <em className="italic">so you don't have to.</em>
          </h1>
          <p className="text-base lg:text-[1.0625rem] text-[#6B5040] leading-relaxed">
            Bed Giant is an independent review and buying guide for sleep and bedroom products. We test mattresses, beds, bedding and accessories so you can spend your money with confidence.
          </p>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-[#EDE8E3] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { value: '200+', label: 'Products tested' },
            { value: '30+', label: 'Nights minimum per review' },
            { value: '100%', label: 'Editorially independent' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-semibold text-[#2A2118] mb-1">{stat.value}</p>
              <p className="text-sm text-[#9A8880]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-light text-[#2A2118] leading-tight">
            The rules we write{' '}
            <em className="italic">every review by.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-white rounded-2xl border border-[#EDE8E3] p-7"
            >
              <p className="font-display text-[#9A8880] text-sm mb-3">0{i + 1}</p>
              <h3 className="font-display text-lg font-semibold text-[#2A2118] mb-3 leading-snug">
                {v.title}
              </h3>
              <p className="text-sm text-[#6B5040] leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F5EFE9] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-4">
              The Team
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-[#2A2118] leading-tight">
              The people behind{' '}
              <em className="italic">the reviews.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-[#EDE8E3] p-7 flex flex-col gap-5"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#2A2118] flex items-center justify-center shrink-0">
                  <span className="font-display text-sm font-semibold text-white tracking-wide">
                    {member.initials}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold text-[#2A2118] leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[#9A8880] mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#6B5040] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate disclosure */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="border-l-2 border-[#8B6E5A] pl-8 mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-3">
              Affiliate Disclosure
            </p>
            <h2 className="font-display text-2xl lg:text-3xl font-light text-[#2A2118] leading-tight">
              How we pay the bills —{' '}
              <em className="italic">honestly explained.</em>
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[#6B5040] leading-relaxed text-base">
            <p>
              Some links on Bed Giant are affiliate links. This means if you click a link and make a purchase, we receive a small commission from the retailer — at no extra cost to you. The price you pay is always the same whether you click through from our site or go directly.
            </p>
            <p>
              Affiliate commissions fund our testing, keep the site running, and pay the people who spend weeks sleeping on mattresses for your benefit. We think that&apos;s a fair trade.
            </p>
            <p>
              <strong className="font-semibold text-[#2A2118]">What affiliate relationships do not affect:</strong> review scores, editorial verdicts, product placement in roundups, or whether we cover a brand at all. Products are included because they earned it — not because they pay a higher commission.
            </p>
            <p>
              We are members of the Amazon Associates programme and work with several other affiliate networks including Awin and CJ. Affiliate links are always clearly marked with a disclosure notice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#2A2118] py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-light text-white mb-4">
            Ready to sleep{' '}
            <em className="italic">better?</em>
          </h2>
          <p className="text-[#9A8880] text-sm leading-relaxed mb-8">
            Start with our expert reviews, or browse curated picks across every category.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              Read Reviews
            </Link>
            <Link
              href="/best-picks"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              View Best Picks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
