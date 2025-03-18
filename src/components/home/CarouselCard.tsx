
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock3 } from 'lucide-react';
import { CardBadge } from '../trip-card/CardBadge';

interface CarouselCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  discount?: number;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  longWeekend?: boolean;
  offbeat?: boolean;
  className?: string;
  month?: string;
}

const CarouselCard = ({
  id,
  title,
  location,
  image,
  duration,
  price,
  discount = 0,
  stateHighlight,
  honeymoonSpecial,
  international,
  familySpecial,
  bikingPackage,
  suvPackage,
  longWeekend,
  offbeat,
  className,
  month,
}: CarouselCardProps) => {
  // Calculate the discounted price
  const discountedPrice = price - (price * (discount || 0)) / 100;
  
  return (
    <Link to={`/trip/${id}`} className="block group h-full">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <CardBadge 
          discount={discount}
          stateHighlight={stateHighlight}
          honeymoonSpecial={honeymoonSpecial}
          international={international}
          familySpecial={familySpecial}
          bikingPackage={bikingPackage}
          suvPackage={suvPackage}
          longWeekend={longWeekend}
          offbeat={offbeat}
          className={className}
          month={month}
        />
        
        <div className="absolute bottom-0 left-0 p-3 md:p-4 text-white">
          <h3 className="text-sm md:text-base font-bold mb-1 line-clamp-2">{title}</h3>
          
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span className="text-xs truncate">{location}</span>
          </div>
          
          <div className="flex items-baseline mt-1.5">
            <span className="text-xs">{duration} • </span>
            <span className="text-xs font-medium ml-1">₹{discountedPrice.toLocaleString()}</span>
            {discount > 0 && (
              <span className="text-xs text-gray-300 line-through ml-1.5">₹{price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarouselCard;
