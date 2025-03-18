
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface ActionButtonsProps {
  onBookingFormOpen: () => void;
  onDateDialogOpen: () => void;
}

const ActionButtons = ({ onBookingFormOpen, onDateDialogOpen }: ActionButtonsProps) => {
  return (
    <div className="space-y-4 mb-2">
      <Button 
        size="lg" 
        className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90"
        onClick={onBookingFormOpen}
      >
        Know More
      </Button>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white flex items-center justify-center"
        onClick={onDateDialogOpen}
      >
        Check Available Dates
        <ChevronDown className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default ActionButtons;
