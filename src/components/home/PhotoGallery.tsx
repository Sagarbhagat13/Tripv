
import { useState } from 'react';
import { Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

// Photo data with unsplash images
export const galleryPhotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    alt: 'Mountain view with fog',
    location: 'Himalayas, India'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=800&q=80',
    alt: 'Beach sunset',
    location: 'Goa, India'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1567253549588-6d50ad1e0938?auto=format&fit=crop&w=800&q=80',
    alt: 'Desert camel ride',
    location: 'Rajasthan, India'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1576487248805-cf45219d84ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Houseboat on water',
    location: 'Kerala, India'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    alt: 'Temple architecture',
    location: 'Tamil Nadu, India'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80',
    alt: 'Tea plantations',
    location: 'Munnar, India'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1543158266-0066955047b0?auto=format&fit=crop&w=800&q=80',
    alt: 'Snow mountains',
    location: 'Ladakh, India'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    alt: 'City view',
    location: 'Mumbai, India'
  }
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Travel Moments</h2>
        
        <div className="flex justify-center items-center gap-3 mb-4">
          <a 
            href="https://www.instagram.com/wanderon.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-wanderon-primary hover:text-wanderon-dark transition-colors duration-200"
          >
            <Instagram size={16} />
            <span className="font-medium text-sm">@wanderon.in</span>
          </a>
        </div>
        
        {isMobile ? (
          // Mobile layout with simple carousel - reduced sizes
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 0,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryPhotos.map((photo) => (
                <CarouselItem key={photo.id} className="basis-3/4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-lg overflow-hidden h-52">
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="text-xs font-medium">{photo.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end mt-3">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2 h-8 w-8" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        ) : (
          // Desktop layout with reduced carousel
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              duration: 0,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryPhotos.map((photo) => (
                <CarouselItem key={photo.id} className="basis-full md:basis-1/2 lg:basis-1/4">
                  <div className="relative rounded-lg overflow-hidden h-56 mx-1.5">
                    <img 
                      src={photo.url} 
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="text-xs font-medium">{photo.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end mt-3">
              <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2 h-8 w-8" />
              <CarouselNext className="relative static right-0 left-auto translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
