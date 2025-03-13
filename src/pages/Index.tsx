
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import EarlyBirdBanner from '@/components/EarlyBirdBanner';
import GroupDiscountBanner from '@/components/GroupDiscountBanner';
import { Trip } from '@/data/popularTrips';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { offBeatTrips } from '@/data/offBeatTrips';

import SearchResults from '@/components/home/SearchResults';
import LongWeekendSection from '@/components/home/LongWeekendSection';
import PopularTripsSection from '@/components/home/PopularTripsSection';
import StatePackagesSection from '@/components/home/StatePackagesSection';
import DreamTripCta from '@/components/home/DreamTripCta';
import FamilyToursSection from '@/components/home/FamilyToursSection';
import RegionalTripsSection from '@/components/home/RegionalTripsSection';
import HoneymoonSection from '@/components/home/HoneymoonSection';
import WeekendTripsSection from '@/components/home/WeekendTripsSection';
import InternationalToursSection from '@/components/home/InternationalToursSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import LadakhDeparturesSection from '@/components/home/LadakhDeparturesSection';
import OffBeatTripsSection from '@/components/home/OffBeatTripsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import CustomizedTripsSection from '@/components/home/CustomizedTripsSection';
import PhotoGallery from '@/components/home/PhotoGallery';
import GovAffiliationsSection from '@/components/home/GovAffiliationsSection';

const Index = () => {
  const { toast } = useToast();
  const [searchResults, setSearchResults] = useState<Trip[] | null>(null);
  
  const allTrips = [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const results = allTrips.filter(trip => {
      const title = trip.title.toLowerCase();
      const location = trip.location.toLowerCase();
      const duration = trip.duration.toLowerCase();
      const price = trip.price.toString().toLowerCase();
      const discount = trip.discount ? trip.discount.toString().toLowerCase() : '';
      
      const allContent = `${title} ${location} ${duration} ${price} ${discount}`;
      
      return searchTerms.some(term => allContent.includes(term));
    });
    
    setSearchResults(results);
    
    if (results.length === 0) {
      toast({
        title: "No trips found",
        description: "Try different search terms or explore our featured trips",
        variant: "destructive",
      });
    } else {
      toast({
        title: `Found ${results.length} trips`,
        description: `Showing results for "${query}"`,
      });
    }
  };
  
  const clearSearchResults = () => setSearchResults(null);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Banner onSearch={handleSearch} />
      
      <main className="flex-grow">
        {searchResults ? (
          <SearchResults 
            searchResults={searchResults} 
            clearResults={clearSearchResults} 
          />
        ) : (
          <>
            <LongWeekendSection />
            
            <PopularTripsSection />
            
            <EarlyBirdBanner />
            
            <StatePackagesSection />
            
            <RegionalTripsSection />
            
            <CustomizedTripsSection />
            
            <LadakhDeparturesSection />
            
            <OffBeatTripsSection />
            
            <GroupDiscountBanner />
            
            <FamilyToursSection />
            
            <HoneymoonSection />
            
            <WeekendTripsSection />
            
            <InternationalToursSection />
            
            <TestimonialsSection />
            
            <WhyUsSection />
            
            <PhotoGallery />
            
            <GovAffiliationsSection />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
