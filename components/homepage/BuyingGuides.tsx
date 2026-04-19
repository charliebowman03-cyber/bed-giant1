import { guides } from '@/data/guides';
import GuideCard from '@/components/ui/GuideCard';
import SectionHeader from '@/components/ui/SectionHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function BuyingGuides() {
  return (
    <section className="bg-[#F5EFE9] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeader
            label="Buying Guides"
            title="Before you buy, read this"
            viewAllHref="/blog"
            viewAllLabel="All guides"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.slice(0, 4).map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
