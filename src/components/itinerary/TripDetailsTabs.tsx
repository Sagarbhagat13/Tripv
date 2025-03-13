
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripItineraryTab from './tabs/TripItineraryTab';
import TripHighlightsTab from './tabs/TripHighlightsTab';
import TripInclusionsTab from './tabs/TripInclusionsTab';
import TripFaqsTab from './tabs/TripFaqsTab';

interface TripDetailsTabsProps {
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

const TripDetailsTabs = ({
  itinerary,
  highlights,
  inclusions,
  exclusions,
  faqs,
  tripId,
  tripName
}: TripDetailsTabsProps) => {
  return (
    <Tabs defaultValue="itinerary" className="mb-10">
      <TabsList className="w-full grid grid-cols-4 mb-6">
        <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
        <TabsTrigger value="highlights">Highlights</TabsTrigger>
        <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
        <TabsTrigger value="faqs">FAQs</TabsTrigger>
      </TabsList>
      
      <TabsContent value="itinerary">
        <TripItineraryTab itinerary={itinerary} tripId={tripId} tripName={tripName} />
      </TabsContent>
      
      <TabsContent value="highlights">
        <TripHighlightsTab highlights={highlights} />
      </TabsContent>
      
      <TabsContent value="inclusions">
        <TripInclusionsTab inclusions={inclusions} exclusions={exclusions} />
      </TabsContent>
      
      <TabsContent value="faqs">
        <TripFaqsTab faqs={faqs} />
      </TabsContent>
    </Tabs>
  );
};

export default TripDetailsTabs;
