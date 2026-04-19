'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import { AnimatePresence, motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileNav({ isOpen, onClose, links }: MobileNavProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#2A2118]/20 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#FBF8F5] shadow-xl lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#EDE8E3]">
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2.5 text-[#9A8880] hover:text-[#2A2118] hover:bg-[#EDE8E3]/60 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B6E5A]"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block py-3 px-2 text-base font-medium border-b border-[#EDE8E3] transition-colors duration-150 cursor-pointer ${
                      pathname === link.href
                        ? 'text-[#2A2118]'
                        : 'text-[#9A8880] hover:text-[#2A2118]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer note */}
            <div className="mt-auto px-6 pb-8">
              <p className="text-xs text-[#9A8880] leading-relaxed">
                Expert reviews & curated picks for better sleep.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
