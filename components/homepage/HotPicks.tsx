import { hotProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HotPicks() {
  return (
    <section className="bg-[#F5EFE9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Hot Right Now"
            title="Our top-rated picks"
            viewAllHref="/best-picks"
            viewAllLabel="View all picks"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotProducts.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
