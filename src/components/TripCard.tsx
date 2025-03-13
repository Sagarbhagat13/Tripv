
import { DefaultTripCard } from './trip-card/DefaultTripCard';
import { HorizontalTripCard } from './trip-card/HorizontalTripCard';
import { CompactTripCard } from './trip-card/CompactTripCard';
import { TripCardProps } from './trip-card/types';

const TripCard = (props: TripCardProps) => {
  const { variant = 'default' } = props;
  
  if (variant === 'horizontal') {
    return <HorizontalTripCard {...props} />;
  }
  
  if (variant === 'compact') {
    return <CompactTripCard {...props} />;
  }
  
  return <DefaultTripCard {...props} />;
};

export default TripCard;
