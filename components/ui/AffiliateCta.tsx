import { ExternalLink } from 'lucide-react';
import { buildAffiliateUrl } from '@/lib/affiliate';
import type { AffiliateLink } from '@/lib/types';

interface AffiliateCtaProps {
  affiliateLink: AffiliateLink;
  label?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  className?: string;
}

export default function AffiliateCta({
  affiliateLink,
  label,
  variant = 'primary',
  size = 'md',
  className = '',
}: AffiliateCtaProps) {
  const url = buildAffiliateUrl(affiliateLink);
  const displayLabel = label ?? `Check Best Price at ${affiliateLink.retailer}`;

  const base = 'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer';

  const variants = {
    primary: 'bg-[#8B6E5A] hover:bg-[#7A5E4A] text-white',
    outline: 'border border-[#2A2118] text-[#2A2118] hover:bg-[#2A2118] hover:text-white',
    ghost: 'text-[#8B6E5A] hover:text-[#7A5E4A] underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-5 py-2.5',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={`${displayLabel} (opens in new tab)`}
    >
      <span>{displayLabel}</span>
      <ExternalLink size={13} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
