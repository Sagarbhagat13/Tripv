
import { useEffect, useState } from 'react';
import { galleryPhotos } from '@/components/home/PhotoGallery';
import { useIsMobile } from '@/hooks/use-mobile';

interface MiniGalleryProps {
  count?: number;
}

const MiniGallery = ({ count = 3 }: MiniGalleryProps) => {
  const [randomPhotos, setRandomPhotos] = useState<typeof galleryPhotos>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Get random photos from the gallery
    const getRandomPhotos = () => {
      const photos = [...galleryPhotos];
      const result = [];
      
      // Shuffle array and get first 'count' elements
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
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold text-wanderon-dark mb-4">Travel Inspiration</h3>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-3 gap-4'}`}>
          {randomPhotos.map(photo => (
            <div 
              key={photo.id} 
              className="relative rounded-lg overflow-hidden h-48"
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="text-sm font-medium">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniGallery;
