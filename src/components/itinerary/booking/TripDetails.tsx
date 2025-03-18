
import { Calendar, Clock, Users } from 'lucide-react';

interface TripDetailsProps {
  duration: string;
}

const TripDetails = ({ duration }: TripDetailsProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between py-2 border-b border-gray-200">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-tripvidya-primary mr-2" />
          <span className="text-gray-700">Duration</span>
        </div>
        <span className="font-medium">{duration}</span>
      </div>
      
      <div className="flex items-center justify-between py-2 border-b border-gray-200">
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-tripvidya-primary mr-2" />
          <span className="text-gray-700">Departure</span>
        </div>
        <span className="font-medium">Multiple dates</span>
      </div>
      
      <div className="flex items-center justify-between py-2 border-b border-gray-200">
        <div className="flex items-center">
          <Users className="h-5 w-5 text-tripvidya-primary mr-2" />
          <span className="text-gray-700">Group Size</span>
        </div>
        <span className="font-medium">12-15 People</span>
      </div>
    </div>
  );
};

export default TripDetails;
