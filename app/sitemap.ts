import type { MetadataRoute } from 'next';
import { reviews } from '@/data/reviews';
import { guides } from '@/data/guides';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/best-picks`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/deals`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/shop`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const reviewRoutes: MetadataRoute.Sitemap = reviews.map(r => ({
    url: `${SITE_URL}/reviews/${r.slug}`,
    lastModified: new Date(r.publishedAt).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map(g => ({
    url: `${SITE_URL}/blog/${g.slug}`,
    lastModified: new Date(g.publishedAt).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...reviewRoutes, ...guideRoutes];
}
