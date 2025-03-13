
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { popularTrips } from '@/data/popularTrips';

const PopularTripsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <TripCarousel 
          title="Popular Backpacking Trips" 
          description="Explore our most loved adventures across India"
          itemsPerView={4}
        >
          {popularTrips.map((trip) => (
            <CarouselCard key={trip.id} {...trip} />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-10">
          <Link to="/popular-trips">
            <Button variant="outline" className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white">
              View All Popular Trips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTripsSection;
