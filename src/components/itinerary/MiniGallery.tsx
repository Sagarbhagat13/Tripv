
import { useEffect, useState } from 'react';
import { galleryPhotos } from '@/components/home/PhotoGallery';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';

interface MiniGalleryProps {
  count?: number;
}

const MiniGallery = ({ count = 6 }: MiniGalleryProps) => {
  const [randomPhotos, setRandomPhotos] = useState<typeof galleryPhotos>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Get random photos from the gallery
    const getRandomPhotos = () => {
      const photos = [...galleryPhotos];
      const result = [];
      
      for (let i = 0; i < count && photos.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        result.push(photos.splice(randomIndex, 1)[0]);
      }
      
      return result;
    };
    
    setRandomPhotos(getRandomPhotos());
  }, [count]);
  
  if (randomPhotos.length === 0) return null;
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <TripCarousel 
          title="Travel Inspiration"
          description="Capture the beauty of your next adventure"
          itemsPerView={isMobile ? 2 : 4}
        >
          {randomPhotos.map(photo => (
            <div key={photo.id} className="relative overflow-hidden rounded-lg h-full">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={photo.url} 
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </TripCarousel>
      </div>
    </div>
  );
};

export default MiniGallery;
