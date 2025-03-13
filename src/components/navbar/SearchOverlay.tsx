
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
      <div className="container mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search destinations, trips, experiences..."
            className="w-full py-3 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tripvidya-primary focus:border-transparent"
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
          <Button 
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2.5 text-gray-500 hover:text-tripvidya-primary hover:bg-tripvidya-light"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
