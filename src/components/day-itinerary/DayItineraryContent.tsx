
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DayItineraryCard from './DayItineraryCard';

interface Day {
  day: number;
  title: string;
  description: string;
  activities: {
    time: string;
    description: string;
  }[];
  image: string;
}

interface DayItineraryContentProps {
  days: Day[];
  tripId: string;
}

const DayItineraryContent = ({ days, tripId }: DayItineraryContentProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Day-by-Day Itinerary</h2>
      
      <div className="space-y-12">
        {days.map((day, index) => (
          <DayItineraryCard 
            key={day.day}
            day={day}
            isLastDay={index === days.length - 1}
            nextDayNumber={index < days.length - 1 ? days[index + 1].day : undefined}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to={`/trip/${tripId}`}>
          <Button className="bg-wanderon-primary hover:bg-wanderon-primary/90">
            Back to Trip Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DayItineraryContent;
