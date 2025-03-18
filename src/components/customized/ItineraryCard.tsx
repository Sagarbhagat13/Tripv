
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';

interface ItineraryCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  cities: string[];
  isCustomizable?: boolean;
  isSuggested?: boolean;
}

const ItineraryCard = ({ 
  id, 
  title, 
  image, 
  duration, 
  cities, 
  isCustomizable = true,
  isSuggested = false 
}: ItineraryCardProps) => {
  // Determine the link based on whether it's a suggested itinerary
  const linkTo = isSuggested ? `/suggested-trip/${id}` : `/custom-trip/${id}`;
  
  return (
    <Link to={linkTo} className="block group h-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {isCustomizable && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
            Customizable
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 p-3 md:p-4 text-white">
          <h3 className="text-sm md:text-base font-bold mb-1.5 line-clamp-2">{title}</h3>
          
          <div className="flex items-center mb-1.5">
            <Calendar className="h-3.5 w-3.5 mr-1.5" />
            <span className="text-xs">{duration}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            <span className="text-xs line-clamp-1">{cities.join(' • ')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItineraryCard;
