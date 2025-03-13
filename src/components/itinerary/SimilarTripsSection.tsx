
import TripCarousel from '@/components/TripCarousel';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSimilarTrips } from '@/utils/tripRecommendations';
import { Trip } from '@/data/popularTrips';
import { useEffect, useState } from 'react';

interface SimilarTripsSectionProps {
  currentTripId: string;
  currentLocation: string;
}

// Custom card for similar trips that matches customized and offbeat trip cards
const SimilarTripCard = ({ id, title, location, image, duration, price }) => {
  return (
    <Link to={`/trip/${id}`} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="flex items-baseline mt-2">
            <span className="text-sm">{duration} • </span>
            <span className="text-sm font-medium ml-1">₹{price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SimilarTripsSection = ({ currentTripId, currentLocation }: SimilarTripsSectionProps) => {
  const [similarTrips, setSimilarTrips] = useState<Trip[]>([]);
  
  useEffect(() => {
    // Get similar trips based on the current trip
    const recommendations = getSimilarTrips(currentTripId, currentLocation, 3);
    setSimilarTrips(recommendations);
  }, [currentTripId, currentLocation]);

  // Don't render if we don't have similar trips
  if (similarTrips.length === 0) {
    return null;
  }
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <TripCarousel 
          title="You Might Also Like" 
          description="Similar trips you might enjoy"
          itemsPerView={3}
        >
          {similarTrips.map((trip) => (
            <SimilarTripCard 
              key={trip.id}
              id={trip.id}
              title={trip.title}
              location={trip.location}
              duration={trip.duration}
              price={trip.price}
              image={trip.image}
            />
          ))}
        </TripCarousel>
      </div>
    </section>
  );
};

export default SimilarTripsSection;
