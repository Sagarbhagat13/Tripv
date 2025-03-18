
import { useState, useEffect } from 'react';
import { Trip } from '@/data/popularTrips';
import { searchKeywords } from '@/data/searchKeywords';
import { useNavigate } from 'react-router-dom';

export const useSearchOverlayLogic = (allTrips: Trip[], onClose: () => void) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Trip[]>([]);
  const navigate = useNavigate();
  
  // Get a list of popular search keywords
  const popularKeywords = searchKeywords
    .slice(0, 10)
    .map(k => k.keyword);
  
  // Filter suggestions as user types
  useEffect(() => {
    if (searchTerm.length > 1) {
      const lowercaseSearch = searchTerm.toLowerCase();
      const filteredTrips = allTrips
        .filter(trip => 
          trip.title.toLowerCase().includes(lowercaseSearch) || 
          trip.location.toLowerCase().includes(lowercaseSearch)
        )
        .slice(0, 5); // Limit to 5 suggestions
      
      setSuggestions(filteredTrips);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, allTrips]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search results page
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
      onClose();
      setSearchTerm(''); // Auto clear the search field after search
    }
  };
  
  const handleKeywordClick = (keyword: string) => {
    setSearchTerm(keyword);
  };
  
  const handleSuggestionClick = (trip: Trip) => {
    navigate(`/?search=${encodeURIComponent(trip.title)}`);
    onClose();
    setSearchTerm(''); // Auto clear when a suggestion is clicked
  };

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    popularKeywords,
    handleSearch,
    handleKeywordClick,
    handleSuggestionClick
  };
};
