
import { useState } from 'react';

interface TripImageGalleryProps {
  images: string[];
  title: string;
}

const TripImageGallery = ({ images, title }: TripImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Only use up to 4 images
  const displayImages = images.slice(0, 4);
  
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {displayImages.map((image, index) => (
            <div 
              key={index}
              className={`relative rounded-lg overflow-hidden ${
                index === 0 ? 'h-72' : 'h-64'
              } cursor-pointer ${
                currentImageIndex === index ? 'ring-2 ring-tripvidya-primary' : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripImageGallery;
