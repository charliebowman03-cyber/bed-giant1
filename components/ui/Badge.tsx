type BadgeVariant = 'new' | 'hot' | 'editors-pick' | 'deal' | 'recommended' | 'highly-recommended';

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const config: Record<BadgeVariant, { label: string; classes: string }> = {
  'new': {
    label: 'New',
    classes: 'bg-[#EDE8E3] text-[#3D2E25]',
  },
  'hot': {
    label: 'Hot Right Now',
    classes: 'bg-[#2A2118] text-white',
  },
  'editors-pick': {
    label: "Editor's Pick",
    classes: 'bg-[#8B6E5A] text-white',
  },
  'deal': {
    label: 'Deal',
    classes: 'bg-[#EDE0D8] text-[#6B5040]',
  },
  'recommended': {
    label: 'Recommended',
    classes: 'bg-[#EDE8E3] text-[#3D2E25]',
  },
  'highly-recommended': {
    label: 'Highly Recommended',
    classes: 'bg-[#2A2118] text-white',
  },
};

export default function Badge({ variant, className = '' }: BadgeProps) {
  const { label, classes } = config[variant];
  return (
    <span
      className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${classes} ${className}`}
    >
      {label}
    </span>
  );
}
