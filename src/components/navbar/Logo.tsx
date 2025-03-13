
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-tripvidya-primary">TripVidya</span>
    </Link>
  );
};

export default Logo;
