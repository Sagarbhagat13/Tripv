
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface DestinationItineraryCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  className?: string;
}

const DestinationItineraryCard = ({
  id,
  title,
  location,
  image,
  duration,
  price,
  rating,
  reviews,
  className,
}: DestinationItineraryCardProps) => {
  return (
    <Link 
      to={`/custom-trip/${id}`} 
      className={cn("block group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center">
          Customizable
        </div>
      </div>
      <div className="p-3 bg-white">
        <div className="flex items-center mb-1">
          <MapPin className="h-3.5 w-3.5 mr-1 text-purple-500" />
          <span className="text-xs text-gray-600 truncate">{location}</span>
        </div>
        
        <h3 className="text-sm font-bold mb-1.5 text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-1">{title}</h3>
        
        <div className="flex items-center text-amber-500 mb-2">
          <Star className="h-3.5 w-3.5 fill-amber-500 mr-1" />
          <span className="text-xs font-medium">{rating}</span>
          <span className="text-xs text-gray-500 ml-1">({reviews})</span>
        </div>
        
        <div className="flex items-center mb-2">
          <Calendar className="h-3.5 w-3.5 text-gray-500 mr-1" />
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
        
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-xs text-gray-400">Customizable</span>
          <span className="text-sm font-bold text-purple-600">₹{price.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
};

export default DestinationItineraryCard;
