
import TripDetails from '@/components/itinerary/TripDetails';
import TripBookingCard from '@/components/itinerary/TripBookingCard';
import { PricingOption } from './booking/PricingTabs';

interface TripContentSectionProps {
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    meals: string[];
    accommodation: string;
  }[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  price: number;
  discount: number;
  duration: string;
  tripId?: string;
  tripName: string;
  isCustomizedTrip?: boolean;
  showBookingForm?: boolean;
  setShowBookingForm?: (show: boolean) => void;
  activePricingId?: string;
  onPricingChange?: (pricingId: string, pricingData: PricingOption) => void;
}

const TripContentSection = ({
  description,
  itinerary,
  highlights,
  inclusions,
  exclusions,
  faqs,
  price,
  discount,
  duration,
  tripId,
  tripName,
  isCustomizedTrip = false,
  showBookingForm,
  setShowBookingForm,
  activePricingId,
  onPricingChange
}: TripContentSectionProps) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <TripDetails 
            description={description}
            itinerary={itinerary}
            highlights={highlights}
            inclusions={inclusions}
            exclusions={exclusions}
            faqs={faqs}
            tripId={tripId}
            tripName={tripName}
          />
          
          <TripBookingCard 
            price={price}
            discount={discount}
            duration={duration}
            isCustomizedTrip={isCustomizedTrip}
            tripName={tripName}
            isOpen={showBookingForm}
            onClose={() => setShowBookingForm?.(false)}
            activePricingId={activePricingId}
            onPricingChange={onPricingChange}
          />
        </div>
      </div>
    </section>
  );
};

export default TripContentSection;
