
import { Skeleton } from '@/components/ui/skeleton';

const ReviewsLoadingState = () => {
  return (
    <div className="flex gap-4 overflow-x-auto py-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex-none w-[320px] p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
};

export default ReviewsLoadingState;
