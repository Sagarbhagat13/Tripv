
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bike, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';

type TransportType = 'biking' | 'suv';

const LadakhDeparturesSection = () => {
  const [transportType, setTransportType] = useState<TransportType>('biking');
  
  const trips = transportType === 'biking' ? ladakhBikingTrips : ladakhSUVTrips;
  
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-800">Ladakh Departures</h2>
            <p className="text-blue-700">Choose your preferred mode of transport</p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Toggle
              pressed={transportType === 'biking'}
              onPressedChange={() => setTransportType('biking')}
              className={cn(
                "data-[state=on]:bg-orange-500 data-[state=on]:text-white",
                "border border-orange-400 text-orange-600 hover:bg-orange-100"
              )}
            >
              <Bike className="mr-2 h-4 w-4" />
              Biking
            </Toggle>
            
            <Toggle
              pressed={transportType === 'suv'}
              onPressedChange={() => setTransportType('suv')}
              className={cn(
                "data-[state=on]:bg-blue-500 data-[state=on]:text-white",
                "border border-blue-400 text-blue-600 hover:bg-blue-100"
              )}
            >
              <Car className="mr-2 h-4 w-4" />
              SUV
            </Toggle>
          </div>
        </div>
        
        <TripCarousel 
          title={transportType === 'biking' ? "Ladakh Biking Expeditions" : "Ladakh SUV Tours"} 
          description="Guaranteed departures for the upcoming season"
          itemsPerView={4}
        >
          {trips.map((trip) => (
            <CarouselCard 
              key={trip.id} 
              {...trip} 
              bikingPackage={transportType === 'biking'}
              suvPackage={transportType === 'suv'}
              className={transportType === 'biking' ? 'biking-package' : 'suv-package'}
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/ladakh-trips">
            <Button variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white">
              View All Ladakh Trips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LadakhDeparturesSection;
