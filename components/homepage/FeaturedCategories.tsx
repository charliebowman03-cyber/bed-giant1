import { categories } from '@/data/categories';
import CategoryCard from '@/components/ui/CategoryCard';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <ScrollReveal>
        <SectionHeader
          label="Browse by Category"
          title="Find your best pick"
          viewAllHref="/best-picks"
          viewAllLabel="All categories"
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, i) => (
          <CategoryCard key={category.id} category={category} delay={i * 0.07} />
        ))}
      </div>
    </section>
  );
}
