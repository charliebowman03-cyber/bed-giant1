'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
import MobileNav from './MobileNav';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Best Picks', href: '/best-picks' },
  { label: 'Guides', href: '/blog' },
  { label: 'Deals', href: '/deals' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#FBF8F5]/96 backdrop-blur-md border-b border-[#EDE8E3]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">

            {/* Logo */}
            <Logo variant={scrolled ? 'dark' : 'light'} />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 cursor-pointer tracking-wide px-3 py-1.5 rounded-full ${
                    scrolled
                      ? 'text-[#3D2E25] hover:text-[#2A2118] hover:bg-[#EDE8E3]'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-2">
              <button
                aria-label="Search"
                onClick={() => window.dispatchEvent(new CustomEvent('open-search'))}
                className={`p-2.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A] focus-visible:ring-offset-1 ${
                  scrolled
                    ? 'text-[#3D2E25] hover:text-[#2A2118] hover:bg-[#EDE8E3]/60'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                className={`lg:hidden p-2.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A] focus-visible:ring-offset-1 ${
                  scrolled
                    ? 'text-[#3D2E25] hover:text-[#2A2118] hover:bg-[#EDE8E3]/60'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {mobileOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Spacer — keeps non-hero pages from going behind fixed header */}
      <div className="h-16 lg:h-[4.5rem]" aria-hidden="true" />

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  );
}
