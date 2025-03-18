
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';

interface DayItineraryHeroProps {
  coverImage: string;
  title: string;
  duration: string;
}

const DayItineraryHero = ({ coverImage, title, duration }: DayItineraryHeroProps) => {
  const { tripId } = useParams();
  
  return (
    <div className="relative h-64 md:h-96">
      <img 
        src={coverImage} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 md:p-12">
        <Link to={`/trip/${tripId}`} className="flex items-center text-white mb-4 hover:underline">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Trip Details
        </Link>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        <div className="flex items-center text-white">
          <Calendar className="h-5 w-5 mr-2" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default DayItineraryHero;
