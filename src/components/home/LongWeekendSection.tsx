
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TripCarousel from '@/components/TripCarousel';
import { longWeekendTrips } from '@/data/longWeekendTrips';
import { Calendar } from 'lucide-react';

// Custom trip card component for long weekend trips
const LongWeekendTripCard = ({ id, title, location, image, duration, price }) => {
  return (
    <Link to={`/trip/${id}`} className="block group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Long Weekend Badge */}
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-0.5 rounded-full text-xs font-medium flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          Long Weekend
        </div>
        
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-base font-bold mb-1.5">{title}</h3>
          
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            <span className="text-xs">{location}</span>
          </div>
          
          <div className="flex items-baseline mt-1.5">
            <span className="text-xs">{duration} • </span>
            <span className="text-xs font-medium ml-1">₹{price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const LongWeekendSection = () => {
  return (
    <section className="py-10 bg-[#F8F4FF]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Long Weekend & Festive Special</h2>
        
        <TripCarousel 
          title=""
          description=""
          itemsPerView={4.5}
        >
          {longWeekendTrips.map((trip) => (
            <LongWeekendTripCard 
              key={trip.id} 
              {...trip}
            />
          ))}
        </TripCarousel>
        
        <div className="text-center mt-8">
          <Link to="/long-weekend-trips">
            <Button variant="outline" size="sm" className="border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white">
              Explore All Weekend Getaways
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LongWeekendSection;
