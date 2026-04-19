import type { Metadata } from 'next';

export const SITE_URL = 'https://bedgiant.com'; // swap when domain is live
export const SITE_NAME = 'BedGiant';
export const SITE_DESCRIPTION =
  'Expert-tested reviews and curated picks for beds, mattresses, bedding and sleep accessories. Independent, honest, updated regularly.';
export const OG_IMAGE_DEFAULT =
  'https://dusk.com/cdn/shop/files/berkeley-ottoman-storage-bed-natural-797384.jpg?v=1748346528&width=1200';

/** Merge page-level metadata with site-wide defaults */
export function buildMetadata(overrides: Partial<Metadata> & {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalPath?: string;
}): Metadata {
  const {
    title,
    description,
    ogImage = OG_IMAGE_DEFAULT,
    ogType = 'website',
    canonicalPath,
    ...rest
  } = overrides;

  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: canonicalPath
      ? { canonical: `${SITE_URL}${canonicalPath}` }
      : undefined,
    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      type: ogType,
      locale: 'en_GB',
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...rest,
  };
}
