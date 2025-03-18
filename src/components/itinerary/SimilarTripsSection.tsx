
import { useEffect, useState } from 'react';
import { getSimilarTrips } from '@/utils/tripRecommendations';
import { Trip } from '@/data/popularTrips';
import { useIsMobile } from '@/hooks/use-mobile';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from '@/components/home/CarouselCard';

interface SimilarTripsSectionProps {
  currentTripId: string;
  currentLocation: string;
}

const SimilarTripsSection = ({ currentTripId, currentLocation }: SimilarTripsSectionProps) => {
  const [similarTrips, setSimilarTrips] = useState<Trip[]>([]);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const recommendations = getSimilarTrips(currentTripId, currentLocation, 4);
    setSimilarTrips(recommendations);
  }, [currentTripId, currentLocation]);

  if (similarTrips.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <TripCarousel 
          title="You Might Also Like"
          description="Similar trips that match your interests"
          itemsPerView={isMobile ? 1 : 3}
        >
          {similarTrips.map((trip) => (
            <div key={trip.id} className="h-full">
              <CarouselCard {...trip} />
            </div>
          ))}
        </TripCarousel>
      </div>
    </section>
  );
};

export default SimilarTripsSection;
