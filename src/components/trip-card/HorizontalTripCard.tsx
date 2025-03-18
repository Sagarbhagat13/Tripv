
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { CardBadge } from './CardBadge';
import { FavoriteButton } from './FavoriteButton';
import { TripCardContent } from './TripCardContent';
import { TripCardProps } from './types';

export const HorizontalTripCard = ({
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
  offbeat,
}: TripCardProps) => {
  const discountedPrice = price - (price * discount) / 100;
  
  // Determine if this is a Ladakh biking or SUV package based on the className
  const isLadakhBiking = className?.includes('biking-package');
  const isLadakhSUV = className?.includes('suv-package');
  
  // Set the badge props based on the className
  const badgeBikingPackage = bikingPackage || isLadakhBiking;
  const badgeSUVPackage = suvPackage || isLadakhSUV;
  
  return (
    <Link to={`/trip/${id}`} className={cn(
      "block overflow-hidden rounded-lg bg-white trip-card-shadow",
      className
    )}>
      <div className="flex flex-col md:flex-row h-full">
        <div className="relative md:w-2/5">
          <div className="aspect-[3/4] md:h-full">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <FavoriteButton />
          <CardBadge 
            discount={discount}
            stateHighlight={stateHighlight}
            honeymoonSpecial={honeymoonSpecial}
            international={international}
            familySpecial={familySpecial}
            bikingPackage={badgeBikingPackage}
            suvPackage={badgeSUVPackage}
            offbeat={offbeat}
          />
        </div>
        
        <div className="md:w-3/5">
          <TripCardContent
            title={title}
            location={location}
            duration={duration}
            price={price}
            discountedPrice={discountedPrice}
            discount={discount}
            rating={rating}
            reviews={reviews}
            variant="horizontal"
            stateHighlight={stateHighlight}
            honeymoonSpecial={honeymoonSpecial}
            international={international}
            familySpecial={familySpecial}
            offbeat={offbeat}
          />
        </div>
      </div>
    </Link>
  );
};
