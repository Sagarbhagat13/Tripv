
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Trip } from '@/data/popularTrips';
import SearchSuggestions from './SearchSuggestions';

interface BannerSearchBarProps {
  onSearch: (query: string) => void;
  allTrips: Trip[];
}

const BannerSearchBar = ({ onSearch, allTrips }: BannerSearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Trip[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchInputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
      
      const filtered = allTrips.filter(trip => {
        const title = trip.title.toLowerCase();
        const location = trip.location.toLowerCase();
        const duration = trip.duration.toLowerCase();
        const price = trip.price.toString().toLowerCase();
        const discount = trip.discount ? trip.discount.toString().toLowerCase() : '';
        
        const allContent = `${title} ${location} ${duration} ${price} ${discount}`;
        
        return searchTerms.some(term => allContent.includes(term));
      }).slice(0, 6);
      
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
    // Reset active index when search query changes
    setActiveIndex(-1);
  }, [searchQuery, allTrips]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;
    
    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prevIndex => 
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
    // Enter
    else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[activeIndex]);
    }
    // Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionClick = (suggestion: Trip) => {
    const searchTerm = suggestion.title;
    setSearchQuery(searchTerm);
    onSearch(searchTerm);
    setShowSuggestions(false);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };
  
  return (
    <div ref={searchInputRef} className="w-full max-w-2xl relative">
      <form 
        onSubmit={handleSearch} 
        className="bg-white/95 rounded-xl shadow-2xl overflow-hidden animate-fade-in backdrop-blur-sm border border-gray-200 transition-all duration-300 focus-within:shadow-wanderon-primary/20"
      >
        <div className="flex items-center px-5 py-2">
          <Search className="h-5 w-5 text-tripvidya-primary mr-3" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Where do you want to go? Try 'Manali' or 'Ladakh'..."
            className="flex-1 py-3 border-none focus-visible:ring-0 text-base placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {searchQuery && (
            <Button 
              type="button" 
              variant="ghost" 
              className="p-1 h-auto" 
              onClick={clearSearch}
            >
              <X className="h-4 w-4 text-gray-500" />
            </Button>
          )}
          <Button 
            type="submit"
            className="bg-tripvidya-primary hover:bg-tripvidya-primary/90 ml-2 transition-all duration-300 transform hover:scale-105"
          >
            <span className="hidden sm:inline mr-2">Search</span>
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </form>
      
      <SearchSuggestions
        showSuggestions={showSuggestions}
        filteredSuggestions={filteredSuggestions}
        handleSuggestionClick={handleSuggestionClick}
        activeIndex={activeIndex}
      />
    </div>
  );
};

export default BannerSearchBar;
