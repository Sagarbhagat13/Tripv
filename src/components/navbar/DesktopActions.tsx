
import { Search, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DesktopActionsProps {
  isScrolled: boolean;
  toggleSearch: () => void;
}

const DesktopActions = ({ isScrolled, toggleSearch }: DesktopActionsProps) => {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "p-0 hover:bg-transparent",
          isScrolled ? "text-tripvidya-dark" : "text-white"
        )}
        onClick={toggleSearch}
      >
        <Search className="h-5 w-5" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "p-0 hover:bg-transparent",
          isScrolled ? "text-tripvidya-dark" : "text-white"
        )}
      >
        <User className="h-5 w-5" />
      </Button>
      <Button 
        variant="default"
        size="sm" 
        className="bg-tripvidya-primary hover:bg-tripvidya-primary/90"
      >
        <MapPin className="h-4 w-4 mr-2" />
        Plan My Trip
      </Button>
    </div>
  );
};

export default DesktopActions;
