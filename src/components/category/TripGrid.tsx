
import React from 'react';
import CarouselCard from '@/components/home/CarouselCard';
import { Trip } from '@/data/popularTrips';

interface TripGridProps {
  trips: Trip[];
  path: string;
}

const TripGrid = ({ trips, path }: TripGridProps) => {
  if (trips.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">No trips found for this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {trips.map(trip => {
        // Determine if a month badge should be applied
        const isMonthlyPackage = path.includes('monthly');
        const monthName = isMonthlyPackage ? path.split('-')[0] : undefined;
        
        return (
          <div key={trip.id} className="aspect-[3/4]">
            <CarouselCard
              {...trip}
              stateHighlight={path === 'india' ? trip.stateHighlight : undefined}
              honeymoonSpecial={path === 'honeymoon-packages' ? true : trip.honeymoonSpecial && path === 'popular-trips'}
              international={path === 'international-tours' || path === 'world' ? true : trip.international && path === 'popular-trips'}
              familySpecial={path === 'family-tours' ? true : trip.familySpecial && path === 'popular-trips'}
              bikingPackage={path === 'ladakh-trips' && trip.bikingPackage ? true : trip.bikingPackage && path === 'popular-trips'}
              suvPackage={path === 'ladakh-trips' && trip.suvPackage ? true : trip.suvPackage && path === 'popular-trips'}
              longWeekend={path === 'long-weekend-trips' ? true : trip.longWeekend && path === 'popular-trips'}
              offbeat={path === 'off-beat-trips' ? true : trip.offbeat && path === 'popular-trips'}
              month={monthName}
              className="h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default TripGrid;
