import Link from 'next/link';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const labelColor = variant === 'light' ? '#C4A898' : '#8B6E5A';
  const wordColor  = variant === 'light' ? '#FFFFFF' : '#2A2118';

  return (
    <Link
      href="/"
      aria-label="BedGiant home"
      className={`flex flex-col leading-none cursor-pointer group shrink-0 ${className}`}
    >
      <span
        className="text-[10px] font-semibold uppercase tracking-[0.38em] transition-colors duration-200 pl-px"
        style={{ color: labelColor }}
      >
        Bed
      </span>
      <span
        className="font-display font-semibold leading-none tracking-tight transition-colors duration-200"
        style={{ fontSize: 'clamp(1.4rem, 2vw, 1.7rem)', color: wordColor }}
      >
        Giant
      </span>
    </Link>
  );
}
