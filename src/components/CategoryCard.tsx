
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  image: string;
  subtitle?: string;
  link: string;
  className?: string;
  itineraryLink?: boolean;
  suggestedItinerary?: boolean;
}

const CategoryCard = ({
  title,
  image,
  subtitle,
  link,
  className,
  itineraryLink,
  suggestedItinerary,
}: CategoryCardProps) => {
  const [imgError, setImgError] = useState(false);
  
  // Determine the appropriate link based on props
  let actualLink = link;
  if (itineraryLink) {
    actualLink = `/day-itinerary/${link.split('/').pop()}`;
  } else if (suggestedItinerary) {
    actualLink = `/suggested-trip/${link.split('/').pop()}`;
  }
  
  // Fallback image if the original image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80";
  
  return (
    <Link
      to={actualLink}
      className={cn(
        "group relative overflow-hidden rounded-lg block h-full trip-card-shadow",
        className
      )}
    >
      <img
        src={imgError ? fallbackImage : image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={() => setImgError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-lg font-bold text-white mb-0.5">{title}</h3>
        {subtitle && (
          <p className="text-white/80 text-xs">{subtitle}</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;
