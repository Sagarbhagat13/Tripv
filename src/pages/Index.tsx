
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';
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
import { searchTrips } from '@/services/searchService';
import { getTripData } from '@/services/tripService';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState<Trip[] | null>(null);
  const [currentSearchTerm, setCurrentSearchTerm] = useState<string>("");
  
  const allTrips = [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  // Check for search parameter on mount and when URL changes
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setSearchResults(null);
      setCurrentSearchTerm("");
    }
  }, [searchParams]);
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults(null);
      setCurrentSearchTerm("");
      return;
    }
    
    setCurrentSearchTerm(query);
    
    // Use the searchTrips service function
    const results = searchTrips(allTrips, query);
    setSearchResults(results);
    
    // Update the URL with the search parameter
    setSearchParams({ search: query });
    
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
  
  const clearSearchResults = () => {
    setSearchResults(null);
    setCurrentSearchTerm("");
    // Remove the search parameter from the URL
    setSearchParams({});
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Banner onSearch={handleSearch} />
      
      <main className="flex-grow">
        {searchResults ? (
          <SearchResults 
            searchResults={searchResults} 
            clearResults={clearSearchResults} 
            searchTerm={currentSearchTerm}
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
