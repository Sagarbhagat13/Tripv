
import React from 'react';
import { Button } from '@/components/ui/button';
import TripCard from '@/components/TripCard';
import { Trip } from '@/data/popularTrips';
import { AlertTriangle } from 'lucide-react';

interface SearchResultsProps {
  searchResults: Trip[];
  clearResults: () => void;
}

const SearchResults = ({ searchResults, clearResults }: SearchResultsProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-wanderon-dark">
              Search Results
            </h2>
            <p className="text-gray-600 mt-1">
              Found {searchResults.length} {searchResults.length === 1 ? 'trip' : 'trips'} matching your search
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={clearResults}
            className="border-wanderon-primary text-wanderon-primary hover:bg-wanderon-primary hover:text-white"
          >
            Back to Home
          </Button>
        </div>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No trips found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              We couldn't find any trips matching your search criteria. Try different keywords or browse our featured trips.
            </p>
            <Button onClick={clearResults} className="bg-wanderon-primary hover:bg-wanderon-primary/90">
              Explore Featured Trips
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
