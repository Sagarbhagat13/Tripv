
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CardBadge } from './CardBadge';
import { FavoriteButton } from './FavoriteButton';
import { TripCardContent } from './TripCardContent';
import { TripCardProps } from './types';

export const DefaultTripCard = ({
  id,
  title,
  location,
  price,
  discount = 0,
  duration,
  image,
  rating,
  reviews,
  className,
  stateHighlight,
  honeymoonSpecial,
  international,
  familySpecial,
  bikingPackage,
  suvPackage,
}: TripCardProps) => {
  const discountedPrice = price - (price * discount) / 100;
  
  // Determine if this is a Ladakh biking or SUV package based on the className
  const isLadakhBiking = className?.includes('biking-package');
  const isLadakhSUV = className?.includes('suv-package');
  
  // Set the badge props based on the className
  const badgeBikingPackage = bikingPackage || isLadakhBiking;
  const badgeSUVPackage = suvPackage || isLadakhSUV;
  
  return (
    <div className={cn(
      "block overflow-hidden rounded-lg bg-white trip-card-shadow transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      className
    )}>
      <Link to={`/trip/${id}`} className="block">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover"
          />
          <FavoriteButton />
          <CardBadge 
            discount={discount}
            stateHighlight={stateHighlight}
            honeymoonSpecial={honeymoonSpecial}
            international={international}
            familySpecial={familySpecial}
            bikingPackage={badgeBikingPackage}
            suvPackage={badgeSUVPackage}
          />
          
          {familySpecial && (
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-transparent"></div>
          )}
          
          {honeymoonSpecial && (
            <div className="absolute inset-0 bg-gradient-to-t from-rose-500/30 to-transparent"></div>
          )}
          
          {international && (
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
          )}
          
          {badgeBikingPackage && (
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent"></div>
          )}
          
          {badgeSUVPackage && (
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
          )}
        </div>
      </Link>
      
      <TripCardContent
        title={title}
        location={location}
        duration={duration}
        price={price}
        discountedPrice={discountedPrice}
        discount={discount}
        rating={rating}
        reviews={reviews}
        variant="default"
        stateHighlight={stateHighlight}
        honeymoonSpecial={honeymoonSpecial}
        international={international}
        familySpecial={familySpecial}
      />
    </div>
  );
};
