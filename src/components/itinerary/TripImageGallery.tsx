
import { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface TripImageGalleryProps {
  images: string[];
  title: string;
  places?: string[];
}

const TripImageGallery = ({ images, title, places }: TripImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [api, setApi] = useState<any>(null);
  
  // Pre-load images for better performance
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Handle slide change
  useEffect(() => {
    if (!api) return;
    
    api.on('select', () => {
      setCurrentImageIndex(api.selectedScrollSnap());
    });
  }, [api]);
  
  // Handle navigation
  const handlePrevious = () => {
    api?.scrollPrev();
  };
  
  const handleNext = () => {
    api?.scrollNext();
  };
  
  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };
  
  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-0 md:px-4 py-0 md:py-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: false,
            duration: 0, // No animation duration
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="overflow-hidden">
                <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden rounded-none md:rounded-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${image})`,
                      opacity: currentImageIndex === index ? 1 : 0.8,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-2 rounded-full",
                  currentImageIndex === index ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious 
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 opacity-70 hover:opacity-100" 
          />
          <CarouselNext 
            onClick={handleNext}
            className="absolute right-4 top-1/2 h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 opacity-70 hover:opacity-100" 
          />
        </Carousel>
      </div>
    </section>
  );
};

export default TripImageGallery;
