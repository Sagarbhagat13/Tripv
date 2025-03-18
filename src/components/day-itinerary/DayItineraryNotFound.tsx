
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DayItineraryNotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Itinerary not found</h1>
        <p className="mb-6">The itinerary you're looking for doesn't exist or has been removed.</p>
        <Link to="/"><Button>Back to Home</Button></Link>
      </div>
      <Footer />
    </div>
  );
};

export default DayItineraryNotFound;
