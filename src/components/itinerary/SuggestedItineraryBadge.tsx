
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SuggestedItineraryBadge = () => {
  return (
    <Badge className="absolute top-4 right-4 z-10 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 flex items-center gap-1.5 rounded-full text-sm font-medium shadow-md">
      <Sparkles className="h-4 w-4" />
      Suggested Itinerary
    </Badge>
  );
};

export default SuggestedItineraryBadge;
