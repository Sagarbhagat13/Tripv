
import { renderStars } from './ReviewCard';

const ReviewHeader = () => {
  return (
    <div className="flex items-center gap-3 py-2">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="Google"
        className="h-6 w-6"
      />
      <h3 className="text-base font-medium text-gray-800">Google Reviews</h3>
      <div className="flex items-center">
        <span className="text-base font-medium mr-1.5">4.9</span>
        <div className="flex">{renderStars(5)}</div>
      </div>
    </div>
  );
};

export default ReviewHeader;
