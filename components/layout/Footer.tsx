import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  Explore: [
    { label: 'Latest Reviews', href: '/reviews' },
    { label: 'Best Picks', href: '/best-picks' },
    { label: 'Buying Guides', href: '/blog' },
    { label: 'Best Deals', href: '/deals' },
  ],
  Categories: [
    { label: 'Best Mattresses', href: '/best-picks/mattresses' },
    { label: 'Best Beds & Frames', href: '/best-picks/beds-frames' },
    { label: 'Best Bedding', href: '/best-picks/bedding-linen' },
    { label: 'Sleep Accessories', href: '/best-picks/sleep-accessories' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'How We Test', href: '/about#how-we-test' },
    { label: 'Affiliate Disclosure', href: '/about#disclosure' },
    { label: 'Contact', href: '/about#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2A2118] text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">

        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-[#9A8880] leading-relaxed max-w-xs">
              Expert reviews, curated picks, and the best deals on beds, mattresses, and bedroom accessories.
            </p>
            {/* Affiliate disclosure */}
            <p className="mt-6 text-xs text-[#9A8880]/70 leading-relaxed max-w-xs">
              BedGiant is reader-supported. When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#9A8880] mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#9A8880] hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[#9A8880]/60">
            © {new Date().getFullYear()} BedGiant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-[#9A8880]/60 hover:text-white transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#9A8880]/60 hover:text-white transition-colors duration-200 cursor-pointer">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
