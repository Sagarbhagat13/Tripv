
import { Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripHeader from '@/components/itinerary/TripHeader';

interface TripHeaderSectionProps {
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
  toggleFavorite: () => void;
  handleShare: () => void;
}

const TripHeaderSection = ({
  title,
  location,
  duration,
  rating,
  reviews,
  isFavorite,
  toggleFavorite,
  handleShare
}: TripHeaderSectionProps) => {
  return (
    <TripHeader
      title={title}
      location={location}
      duration={duration}
      rating={rating}
      reviews={reviews}
      isFavorite={isFavorite}
      toggleFavorite={toggleFavorite}
      handleShare={handleShare}
    />
  );
};

export default TripHeaderSection;
