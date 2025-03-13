
import TripDescription from './TripDescription';
import TripDetailsTabs from './TripDetailsTabs';

interface TripDetailsProps {
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
  tripId?: string;
  tripName: string;
}

const TripDetails = ({ 
  description, 
  itinerary, 
  highlights, 
  inclusions, 
  exclusions,
  faqs, 
  tripId, 
  tripName 
}: TripDetailsProps) => {
  return (
    <div className="w-full lg:w-2/3">
      <TripDescription description={description} />
      
      <TripDetailsTabs 
        itinerary={itinerary}
        highlights={highlights}
        inclusions={inclusions}
        exclusions={exclusions}
        faqs={faqs}
        tripId={tripId}
        tripName={tripName}
      />
    </div>
  );
};

export default TripDetails;
