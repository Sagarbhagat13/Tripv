
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DayItineraryHero from '@/components/day-itinerary/DayItineraryHero';
import DayItineraryContent from '@/components/day-itinerary/DayItineraryContent';
import DayItineraryNotFound from '@/components/day-itinerary/DayItineraryNotFound';
import { getItineraryById } from '@/services/dayItineraryService';

const DayItineraryPage = () => {
  const { tripId } = useParams();
  const itinerary = tripId ? getItineraryById(tripId) : undefined;
  
  if (!itinerary) {
    return <DayItineraryNotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <DayItineraryHero
        coverImage={itinerary.coverImage}
        title={itinerary.title}
        duration={itinerary.duration}
      />
      
      <DayItineraryContent 
        days={itinerary.days}
        tripId={tripId || ''}
      />
      
      <Footer />
    </div>
  );
};

export default DayItineraryPage;
