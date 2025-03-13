
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TripImageGallery from '@/components/itinerary/TripImageGallery';
import TripHeaderSection from '@/components/itinerary/TripHeaderSection';
import TripContentSection from '@/components/itinerary/TripContentSection';
import SimilarTripsSection from '@/components/itinerary/SimilarTripsSection';
import MiniGallery from '@/components/itinerary/MiniGallery';
import { getTripData } from '@/services/tripService';
import { useTripActions } from '@/hooks/use-trip-actions';

const ItineraryPage = () => {
  const { id } = useParams<{ id: string }>();
  const tripId = id || '1';
  const tripData = getTripData(tripId);
  const { isFavorite, toggleFavorite, handleShare } = useTripActions();
  
  // Check if we're on a customized trip page by checking the URL
  const isCustomizedTripPage = window.location.pathname.includes('/custom-trip/');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <TripImageGallery images={tripData.images} title={tripData.title} />
        
        <div className="container mx-auto px-4 py-6">
          <TripHeaderSection 
            title={tripData.title}
            location={tripData.location}
            duration={tripData.duration}
            rating={tripData.rating}
            reviews={tripData.reviews}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            handleShare={handleShare}
          />
        </div>
        
        <TripContentSection 
          description={tripData.description}
          itinerary={tripData.itinerary}
          highlights={tripData.highlights}
          inclusions={tripData.inclusions}
          exclusions={tripData.exclusions}
          faqs={tripData.faqs}
          price={tripData.price}
          discount={tripData.discount}
          duration={tripData.duration}
          tripId={tripId}
          tripName={tripData.title}
          isCustomizedTrip={isCustomizedTripPage}
        />
        
        <SimilarTripsSection 
          currentTripId={tripId} 
          currentLocation={tripData.location} 
        />
        
        <MiniGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default ItineraryPage;
