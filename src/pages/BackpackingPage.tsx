import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripGrid from '@/components/category/TripGrid';
import MinimalHero from '@/components/MinimalHero';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';

const BackpackingPage = () => {
  // Combine all trips to display on the backpacking page
  const allTrips = [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      <main className="flex-grow">
        <MinimalHero title="Backpacking Trips" />
        
        <div className="container mx-auto px-4 py-12">
          <TripGrid 
            trips={allTrips} 
            path="backpacking"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BackpackingPage;
