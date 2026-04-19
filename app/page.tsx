import type { Metadata } from 'next';
import Hero from '@/components/homepage/Hero';
import LatestReviews from '@/components/homepage/LatestReviews';
import SleepStyles from '@/components/homepage/SleepStyles';
import HotPicks from '@/components/homepage/HotPicks';
import FeaturedCategories from '@/components/homepage/FeaturedCategories';
import EditorialBanner from '@/components/homepage/EditorialBanner';
import BuyingGuides from '@/components/homepage/BuyingGuides';
import FeaturedDeals from '@/components/homepage/FeaturedDeals';
import Newsletter from '@/components/homepage/Newsletter';

export const metadata: Metadata = {
  title: 'BedGiant — Expert Sleep & Bedroom Reviews',
  description: 'Expert-tested beds, mattresses, bedding and sleep accessories. Independent reviews, curated best picks and verified deals — all in one place.',
  alternates: { canonical: 'https://bedgiant.com' },
  openGraph: {
    title: 'BedGiant — Expert Sleep & Bedroom Reviews',
    description: 'Expert-tested beds, mattresses, bedding and sleep accessories. Independent reviews, curated best picks and verified deals.',
    url: 'https://bedgiant.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LatestReviews />
      <SleepStyles />
      <HotPicks />
      <FeaturedCategories />
      <EditorialBanner />
      <BuyingGuides />
      <FeaturedDeals />
      <Newsletter />
    </>
  );
}
