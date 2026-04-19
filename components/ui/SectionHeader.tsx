import Link from 'next/link';

interface SectionHeaderProps {
  label?: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  viewAllHref,
  viewAllLabel = 'View all',
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`flex items-end justify-between gap-4 mb-8 lg:mb-10 ${centered ? 'flex-col items-center text-center' : ''}`}>
      <div>
        {label && (
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9A8880] mb-2">
            {label}
          </p>
        )}
        <h2 className="font-display text-2xl lg:text-3xl font-semibold text-[#2A2118] leading-tight">
          {title}
        </h2>
      </div>

      {viewAllHref && !centered && (
        <Link
          href={viewAllHref}
          className="shrink-0 text-sm font-medium text-[#9A8880] hover:text-[#2A2118] transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline"
        >
          {viewAllLabel} →
        </Link>
      )}
    </div>
  );
}
