
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Thermometer } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location?: string;
  temperature?: string;
  month?: string;
  slug: string;
}

const BlogCard = ({
  title,
  description,
  image,
  category,
  location,
  temperature,
  month,
  slug,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <div className="rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-tripvidya-primary text-white text-sm rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-wanderon-dark mb-2 line-clamp-2">{title}</h3>
          <p className="text-wanderon-gray text-sm mb-4 line-clamp-2">{description}</p>
          
          {(location || temperature || month) && (
            <div className="flex flex-wrap gap-3 text-sm text-wanderon-gray">
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{location}</span>
                </div>
              )}
              {temperature && (
                <div className="flex items-center gap-1">
                  <Thermometer className="h-4 w-4" />
                  <span>{temperature}</span>
                </div>
              )}
              {month && (
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  <span>{month}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
