
import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';

const CategorySection = () => {
  const isMobile = useIsMobile();

  const categoryCards = categories.map((category, index) => (
    <CategoryCard key={index} {...category} />
  ));

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {isMobile ? (
          <TripCarousel 
            title="Explore Trip Categories"
            itemsPerView={1.2}
          >
            {categoryCards}
          </TripCarousel>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-wanderon-dark mb-6">Explore Trip Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryCards}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CategorySection;
