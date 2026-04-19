'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only play once per session
    if (sessionStorage.getItem('bg-intro-played')) return;
    sessionStorage.setItem('bg-intro-played', '1');
    setVisible(true);

    // Dismiss after 1.8s — gives wordmark + line time to fully render
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2A2118] pointer-events-none"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Wordmark */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-white text-3xl sm:text-4xl tracking-tight select-none"
          >
            Bed Giant
          </motion.p>

          {/* Underline — draws in left to right */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="block h-px w-24 bg-[#8B6E5A] mt-3"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
