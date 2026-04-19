interface StarRatingProps {
  rating: number;       // e.g. 4.7
  reviewCount?: number;
  size?: 'sm' | 'md';
  showNumber?: boolean;
}

export default function StarRating({
  rating,
  reviewCount,
  size = 'sm',
  showNumber = true,
}: StarRatingProps) {
  const starSize = size === 'sm' ? 12 : 15;
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.4 && rating % 1 < 0.9;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
        {/* Full stars */}
        {Array.from({ length: full }).map((_, i) => (
          <StarIcon key={`full-${i}`} type="full" size={starSize} />
        ))}
        {/* Half star */}
        {half && <StarIcon type="half" size={starSize} />}
        {/* Empty stars */}
        {Array.from({ length: empty }).map((_, i) => (
          <StarIcon key={`empty-${i}`} type="empty" size={starSize} />
        ))}
      </div>

      {showNumber && (
        <span className="text-xs font-medium text-[#3D2E25]">{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-[#9A8880]">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}

function StarIcon({ type, size }: { type: 'full' | 'half' | 'empty'; size: number }) {
  if (type === 'full') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" fill="#B08070" aria-hidden="true">
        <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75L8 1z" />
      </svg>
    );
  }
  if (type === 'half') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="#B08070" />
            <stop offset="50%" stopColor="#EDE8E3" />
          </linearGradient>
        </defs>
        <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75L8 1z" fill="url(#half-grad)" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="#EDE8E3" aria-hidden="true">
      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.4l-3.71 2.15L5 8.42 2 5.5l4.15-.75L8 1z" />
    </svg>
  );
}
