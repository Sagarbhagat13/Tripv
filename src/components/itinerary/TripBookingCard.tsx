
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, Users, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import BatchDatesTable from './BatchDatesTable';
import { getFormattedTravelerText, generateBatchDates } from '@/utils/travelersUtil';

interface TripBookingCardProps {
  price: number;
  discount: number;
  duration: string;
  isCustomizedTrip?: boolean;
}

const TripBookingCard = ({ price, discount, duration, isCustomizedTrip = false }: TripBookingCardProps) => {
  const [showDates, setShowDates] = useState(false);
  const discountedPrice = price - (price * discount) / 100;
  const travelersText = !isCustomizedTrip ? getFormattedTravelerText() : null;
  const batchDates = !isCustomizedTrip ? generateBatchDates(discountedPrice) : [];
  
  const toggleDates = () => {
    setShowDates(prev => !prev);
  };
  
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-24">
        {!isCustomizedTrip && travelersText && (
          <div className="mb-4">
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="h-5 w-5 text-tripvidya-primary mr-2" />
              <p className="italic text-sm">{travelersText}</p>
            </div>
          </div>
        )}
        
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-tripvidya-primary">₹{discountedPrice.toLocaleString()}</span>
          {discount > 0 && (
            <span className="text-base text-gray-500 line-through ml-2">₹{price.toLocaleString()}</span>
          )}
          {discount > 0 && (
            <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
              {discount}% OFF
            </span>
          )}
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-tripvidya-primary mr-2" />
              <span className="text-gray-700">Duration</span>
            </div>
            <span className="font-medium">{duration}</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-tripvidya-primary mr-2" />
              <span className="text-gray-700">Departure</span>
            </div>
            <span className="font-medium">Multiple dates</span>
          </div>
          
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-tripvidya-primary mr-2" />
              <span className="text-gray-700">Group Size</span>
            </div>
            <span className="font-medium">12-15 People</span>
          </div>
        </div>
        
        {!isCustomizedTrip && showDates && <BatchDatesTable batchDates={batchDates} />}
        
        <Button 
          size="lg" 
          className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90 mb-4"
        >
          Book Now
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white flex items-center justify-center"
          onClick={toggleDates}
        >
          Check Available Dates
          {showDates ? (
            <ChevronUp className="ml-2 h-5 w-5" />
          ) : (
            <ChevronDown className="ml-2 h-5 w-5" />
          )}
        </Button>
        
        <Separator className="my-6" />
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">Have questions about this trip?</p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="border-tripvidya-primary text-tripvidya-primary hover:bg-tripvidya-primary hover:text-white"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripBookingCard;
