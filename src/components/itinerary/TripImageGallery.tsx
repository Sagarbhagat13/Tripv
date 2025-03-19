
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
  
  // Pre-load images for smoother transitions
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
  
  return (
    <section className="relative bg-gray-100 overflow-hidden w-full">
      <div className="w-full px-0 py-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center will-change-transform"
                    style={{ backgroundImage: `url(${image})` }}
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
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-150",
                  currentImageIndex === index ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious className="absolute left-4 top-1/2 h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity" />
          <CarouselNext className="absolute right-4 top-1/2 h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity" />
        </Carousel>
      </div>
    </section>
  );
};

export default TripImageGallery;
