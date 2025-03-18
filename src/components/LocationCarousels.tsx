
import React from 'react';
import TripCarousel from './TripCarousel';
import CarouselCard from './home/CarouselCard';
import { Trip } from '@/data/popularTrips';

interface LocationCarouselsProps {
  groupTours: Trip[];
  customTrips: Trip[];
  locationName: string;
}

const LocationCarousels = ({ groupTours, customTrips, locationName }: LocationCarouselsProps) => {
  return (
    <div className="space-y-16 max-w-[1400px] mx-auto">
      {/* Group Tours Carousel */}
      <section>
        <TripCarousel
          title={`Group Tours in ${locationName}`}
          description={`Join other travelers on our popular group tours in ${locationName}`}
          itemsPerView={4}
        >
          {groupTours.map((trip) => (
            <CarouselCard
              key={trip.id}
              {...trip}
            />
          ))}
        </TripCarousel>
      </section>

      {/* Custom Itineraries Carousel */}
      <section className="bg-purple-50/50 py-16 px-4 md:px-8 rounded-2xl">
        <TripCarousel
          title={`Customized Itineraries for ${locationName}`}
          description="Design your perfect journey with our expert travel planners"
          itemsPerView={3}
          className="max-w-[1200px] mx-auto"
        >
          {customTrips.map((trip) => (
            <CarouselCard
              key={trip.id}
              {...trip}
              className="aspect-[3/4]"
            />
          ))}
        </TripCarousel>
      </section>
    </div>
  );
};

export default LocationCarousels;
