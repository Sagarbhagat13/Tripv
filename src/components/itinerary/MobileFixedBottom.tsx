
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/utils/travelersUtil';
import { PricingOption } from './booking/PricingTabs';
import { BatchDate } from './booking/types';

interface MobileFixedBottomProps {
  price: number;
  discount: number;
  onCheckDates: () => void;
  batchDates?: BatchDate[];
  tripName: string;
  activePricing: PricingOption | null;
  className?: string;
}

const MobileFixedBottom = ({ 
  price, 
  discount, 
  onCheckDates, 
  batchDates = [],
  tripName,
  activePricing,
  className = ''
}: MobileFixedBottomProps) => {
  const discountedPrice = activePricing?.price || price - (price * discount) / 100;
  const formattedPrice = formatPrice(discountedPrice);
  
  const hasAvailableDates = batchDates.length > 0 && batchDates.some(date => date.availableSlots > 0);
  
  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between z-50 ${className}`}>
      <div>
        <p className="text-xs text-gray-600">Starting from</p>
        <p className="text-lg font-bold">{formattedPrice}</p>
        {discount > 0 && (
          <p className="text-xs line-through text-gray-500">
            {formatPrice(price)}
          </p>
        )}
      </div>
      
      <Button 
        onClick={onCheckDates}
        className="bg-tripvidya-primary hover:bg-tripvidya-primary/90 flex items-center"
      >
        <Calendar className="h-4 w-4 mr-2" />
        {hasAvailableDates ? 'Select Dates' : 'Book Now'}
      </Button>
    </div>
  );
};

export default MobileFixedBottom;
