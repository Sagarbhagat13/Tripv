
import React from 'react';
import { popularTrips, weekendTrips, internationalTours, honeymoonPackages, ladakhBikingTrips, ladakhSUVTrips, offBeatTrips } from '@/data/tripData';
import SearchInputOverlay from './SearchInputOverlay';
import SearchSuggestionsOverlay from './SearchSuggestionsOverlay';
import PopularKeywords from './PopularKeywords';
import QuickLinks from './QuickLinks';
import { useSearchOverlayLogic } from '@/hooks/useSearchOverlayLogic';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  // Combine all trip data for suggestions
  const allTrips = [
    ...popularTrips,
    ...weekendTrips,
    ...internationalTours,
    ...honeymoonPackages,
    ...ladakhBikingTrips,
    ...ladakhSUVTrips,
    ...offBeatTrips
  ];
  
  const {
    searchTerm,
    setSearchTerm,
    suggestions,
    popularKeywords,
    handleSearch,
    handleKeywordClick,
    handleSuggestionClick
  } = useSearchOverlayLogic(allTrips, onClose);
  
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
      <div className="container mx-auto">
        <SearchInputOverlay 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          onClose={onClose}
        />
        
        {/* Live Suggestions */}
        <SearchSuggestionsOverlay 
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
        
        {/* Popular Keywords */}
        <PopularKeywords 
          keywords={popularKeywords}
          handleKeywordClick={handleKeywordClick}
        />
        
        {/* Quick Links */}
        <QuickLinks />
      </div>
    </div>
  );
};

export default SearchOverlay;
