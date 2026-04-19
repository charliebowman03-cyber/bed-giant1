export type AffiliateNetwork = 'amazon' | 'awin' | 'cj' | 'rakuten' | 'direct';

export interface AffiliateLink {
  url: string;
  network: AffiliateNetwork;
  retailer: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: 'new' | 'hot' | 'deal' | 'editors-pick';
  affiliateLink: AffiliateLink;
  slug: string;
}

export interface ReviewScore {
  comfort: number;
  value: number;
  durability: number;
  design: number;
}

export interface Review {
  id: string;
  title: string;
  productName: string;
  brand?: string;
  category: string;
  rating: number;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  slug: string;
  // Rich content
  pros?: string[];
  cons?: string[];
  verdict?: string;
  scores?: ReviewScore;
  affiliateLink?: AffiliateLink;
  priceFrom?: number;
}

export interface GuideSection {
  heading: string;
  body: string; // paragraphs separated by \n\n
}

export interface Guide {
  id: string;
  title: string;
  tag: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
  slug: string;
  sections?: GuideSection[];
}

export interface Deal {
  id: string;
  productName: string;
  brand: string;
  originalPrice: number;
  dealPrice: number;
  discountPercent: number;
  image: string;
  expiresAt?: string;
  affiliateLink: AffiliateLink;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
  slug: string;
}
