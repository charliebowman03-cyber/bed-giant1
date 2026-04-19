import { deals } from '@/data/deals';
import DealCard from '@/components/ui/DealCard';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FeaturedDeals() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <ScrollReveal>
        <SectionHeader
          label="Best Deals"
          title="Price drops on picks we love"
          viewAllHref="/deals"
          viewAllLabel="All deals"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal, i) => (
          <DealCard key={deal.id} deal={deal} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
