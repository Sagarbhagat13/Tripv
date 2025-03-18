
import { useState, useEffect } from 'react';
import BatchDatesTable from './BatchDatesTable';
import BookingForm from './BookingForm';
import { getFormattedTravelerText, generateBatchDates } from '@/utils/travelersUtil';
import DateSelectionDialog from './DateSelectionDialog';
import "@/styles/components/tabs.css";

// Import new components
import TravelersDisplay from './booking/TravelersDisplay';
import PricingTabs, { PricingOption } from './booking/PricingTabs';
import PricingInfo from './booking/PricingInfo';
import TripDetails from './booking/TripDetails';
import ActionButtons from './booking/ActionButtons';
import ContactSection from './booking/ContactSection';

interface TripBookingCardProps {
  price: number;
  discount: number;
  duration: string;
  isCustomizedTrip?: boolean;
  tripName: string;
  isOpen?: boolean;
  onClose?: () => void;
  activePricingId?: string;
  onPricingChange?: (pricingId: string, pricingData: PricingOption) => void;
}

const TripBookingCard = ({ 
  price, 
  discount, 
  duration, 
  isCustomizedTrip = false, 
  tripName, 
  isOpen = false, 
  onClose,
  activePricingId: externalActivePricingId,
  onPricingChange
}: TripBookingCardProps) => {
  const [showDates, setShowDates] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showDateDialog, setShowDateDialog] = useState(false);
  const [activePricingId, setActivePricingId] = useState(externalActivePricingId || 'standard');
  const discountedPrice = price - (price * discount) / 100;
  const travelersText = !isCustomizedTrip ? getFormattedTravelerText() : null;
  const batchDates = !isCustomizedTrip ? generateBatchDates(discountedPrice) : [];
  
  // Define pricing options
  const pricingOptions: PricingOption[] = [
    {
      id: 'standard',
      title: 'Standard',
      price: discountedPrice,
      description: 'Group travel with shared accommodations',
    },
    {
      id: 'comfort',
      title: 'Comfort',
      price: Math.round(discountedPrice * 1.2),
      description: 'Upgraded hotels and private transfers',
      isPopular: true,
    },
    {
      id: 'premium',
      title: 'Premium',
      price: Math.round(discountedPrice * 1.5),
      description: 'Luxury accommodations and exclusive experiences',
    },
    {
      id: 'customized',
      title: 'Custom',
      price: Math.round(discountedPrice * 1.8),
      description: 'Fully customized itinerary and services',
    },
  ];

  // Sync with external active pricing ID if provided
  useEffect(() => {
    if (externalActivePricingId) {
      setActivePricingId(externalActivePricingId);
    }
  }, [externalActivePricingId]);

  const toggleDates = () => {
    setShowDates(prev => !prev);
  };
  
  const openBookingForm = () => {
    setShowBookingForm(true);
  };
  
  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  const openDateDialog = () => {
    setShowDateDialog(true);
  };

  const closeDateDialog = () => {
    setShowDateDialog(false);
  };

  const handlePricingSelect = (pricingId: string) => {
    setActivePricingId(pricingId);
    
    // Propagate pricing change to parent component if callback is provided
    const selectedPricing = pricingOptions.find(option => option.id === pricingId);
    if (selectedPricing && onPricingChange) {
      onPricingChange(pricingId, selectedPricing);
    }
  };

  // Find the active pricing option
  const activePricing = pricingOptions.find(option => option.id === activePricingId) || pricingOptions[0];
  
  return (
    <div className="w-full lg:w-1/3">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sticky top-24">
        <TravelersDisplay travelersText={travelersText} />
        
        <PricingTabs 
          pricingOptions={pricingOptions} 
          activePricingId={activePricingId} 
          onPricingSelect={handlePricingSelect} 
        />
        
        <PricingInfo activePricing={activePricing} discount={discount} />
        
        <TripDetails duration={duration} />
        
        {!isCustomizedTrip && showDates && <BatchDatesTable batchDates={batchDates} />}
        
        <ActionButtons
          onBookingFormOpen={openBookingForm}
          onDateDialogOpen={openDateDialog}
        />
        
        <ContactSection />
      </div>
      
      <BookingForm 
        isOpen={showBookingForm} 
        onClose={closeBookingForm} 
        batchDates={batchDates} 
        tripName={tripName}
      />

      <DateSelectionDialog
        isOpen={showDateDialog}
        onClose={closeDateDialog}
        batchDates={batchDates}
        tripName={tripName}
      />
    </div>
  );
};

export default TripBookingCard;
