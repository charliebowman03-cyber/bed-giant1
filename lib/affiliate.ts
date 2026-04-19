import type { AffiliateLink, AffiliateNetwork } from './types';

const TAGS: Record<AffiliateNetwork, string> = {
  amazon: 'bedgiant-21',
  awin: '',
  cj: '',
  rakuten: '',
  direct: '',
};

export function buildAffiliateUrl(link: AffiliateLink): string {
  const tag = TAGS[link.network];
  if (!tag) return link.url;

  if (link.network === 'amazon') {
    const url = new URL(link.url);
    url.searchParams.set('tag', tag);
    return url.toString();
  }

  return link.url;
}
