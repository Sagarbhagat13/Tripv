
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BannerSliderProps {
  images: string[];
}

const BannerSlider = ({ images }: BannerSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Preload all images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = "high";
    });
  }, [images]);
  
  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 10s ease-out, opacity 1.5s ease-in-out',
          }}
          role="img"
          aria-label={`Banner image ${index + 1}`}
        ></div>
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              index === currentImageIndex ? "bg-white w-8" : "bg-white/50 w-2.5 hover:bg-white/70"
            )}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default BannerSlider;
