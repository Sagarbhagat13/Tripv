
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Activity {
  time: string;
  description: string;
}

interface DayItineraryCardProps {
  day: {
    day: number;
    title: string;
    description: string;
    activities: Activity[];
    image: string;
  };
  isLastDay: boolean;
  nextDayNumber?: number;
}

const DayItineraryCard = ({ day, isLastDay, nextDayNumber }: DayItineraryCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={day.image} 
            alt={`Day ${day.day}: ${day.title}`} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-2/3">
          <div className="inline-block bg-wanderon-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
            Day {day.day}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-3">{day.title}</h3>
          <p className="text-gray-600 mb-6">{day.description}</p>
          
          <div className="space-y-4">
            {day.activities.map((activity, actIndex) => (
              <div key={actIndex} className="flex">
                <div className="mr-4">
                  <Clock className="h-5 w-5 text-wanderon-primary" />
                </div>
                <div>
                  <span className="font-semibold">{activity.time}</span>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {!isLastDay && nextDayNumber && (
            <div className="mt-6 flex justify-end">
              <Button variant="ghost" className="flex items-center text-wanderon-primary" asChild>
                <a href={`#day-${nextDayNumber}`}>
                  Next Day <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayItineraryCard;
