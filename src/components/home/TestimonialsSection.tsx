
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';
import TripCarousel from '@/components/TripCarousel';
import { useIsMobile } from '@/hooks/use-mobile';

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="h-6 w-6"
            />
            <h3 className="text-lg font-semibold text-gray-800">Google Reviews</h3>
          </div>
          
          <h2 className="text-2xl font-bold text-tripvidya-dark mb-3">
            What Our Customers Say
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Read authentic reviews from our valued customers who have experienced unforgettable journeys with TripVidya.
          </p>
          
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-tripvidya-dark">4.9</span>
              <span className="text-sm text-gray-600 ml-1">out of 5 based on 200+ reviews</span>
            </div>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="h-5 w-5 text-yellow-400 fill-yellow-400" 
                />
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            onClick={() => window.open('https://www.google.com/search?q=tripvidya+reviews', '_blank')}
            className="gap-2"
          >
            Read More Reviews on Google <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        {isMobile ? (
          <TripCarousel 
            title=""
            itemsPerView={1}
            className="mt-6"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                isGoogleReview={index < 2} 
              />
            ))}
          </TripCarousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                {...testimonial} 
                isGoogleReview={index < 2} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
