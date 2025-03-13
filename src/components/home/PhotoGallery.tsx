
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  
  // Number of photos to show at once
  const visibleCount = isMobile ? 3 : 5;
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex + 1 >= galleryPhotos.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex - 1 < 0 ? galleryPhotos.length - 1 : prevIndex - 1
    );
  };
  
  // Create an array of visible photos based on the active index
  const getVisiblePhotos = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % galleryPhotos.length;
      result.push(galleryPhotos[index]);
    }
    return result;
  };
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl font-bold text-wanderon-dark mb-2">Travel Moments</h2>
            <p className="text-wanderon-gray">Captured by our wanderers</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/wanderon.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-wanderon-primary hover:text-wanderon-dark transition-colors"
            >
              <Instagram size={18} />
              <span className="font-medium">@wanderon.in</span>
            </a>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevSlide}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-wanderon-primary hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-wanderon-primary hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {isMobile ? (
          // Mobile layout with fixed height images
          <div className="grid grid-cols-1 gap-4">
            {getVisiblePhotos().map((photo) => (
              <div 
                key={photo.id}
                className="relative rounded-lg overflow-hidden h-56"
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-sm font-medium">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop layout with the existing grid
          <div className="hidden md:grid grid-cols-5 gap-4">
            {getVisiblePhotos().map((photo, index) => (
              <div 
                key={photo.id}
                className={cn(
                  "relative overflow-hidden rounded-lg transition-all duration-300",
                  index === 2 ? "col-span-1 row-span-2 h-auto" : "h-64",
                  index === 0 ? "col-span-2" : "",
                  index === 1 ? "col-span-2" : ""
                )}
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <p className="text-sm font-medium">{photo.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
