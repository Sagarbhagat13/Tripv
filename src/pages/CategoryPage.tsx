
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CompactTripCard } from '@/components/trip-card/CompactTripCard';
import { Trip } from '@/data/popularTrips';
import { popularTrips } from '@/data/popularTrips';
import { weekendTrips } from '@/data/weekendTrips';
import { offBeatTrips } from '@/data/offBeatTrips';
import { longWeekendTrips } from '@/data/longWeekendTrips';
import { internationalTours } from '@/data/internationalTours';
import { familyTours } from '@/data/familyTours';
import { ladakhBikingTrips, ladakhSUVTrips } from '@/data/ladakhTrips';
import { regionalTrips } from '@/data/regionalTrips';
import { honeymoonPackages } from '@/data/honeymoonPackages';
import { monthlyTrips } from '@/data/monthlyTrips';

interface CategoryInfo {
  title: string;
  description: string;
  image: string;
  trips: any[];
  className?: string;
}

const CategoryPage = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  
  // Define available categories and their data sources
  const categories: Record<string, CategoryInfo> = {
    'popular-trips': {
      title: 'Popular Backpacking Trips',
      description: 'Explore our most loved adventures across India',
      image: 'https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?auto=format&fit=crop&w=1200&q=80',
      trips: popularTrips
    },
    'off-beat-trips': {
      title: 'Off-Beat Destinations',
      description: 'Discover hidden gems and unexplored territories',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
      trips: offBeatTrips
    },
    'short-trips': {
      title: 'Short Trips',
      description: 'Perfect getaways for quick breaks and weekend escapes',
      image: 'https://images.unsplash.com/photo-1530866495561-456252f9f28a?auto=format&fit=crop&w=1200&q=80',
      trips: weekendTrips,
      className: 'short-trip'
    },
    'long-weekend-trips': {
      title: 'Long Weekend & Festive Special',
      description: 'Perfect getaways for long weekends and festive celebrations',
      image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc953?auto=format&fit=crop&w=1200&q=80',
      trips: longWeekendTrips
    },
    'international-tours': {
      title: 'International Tours',
      description: 'Explore the world with our carefully curated international packages',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      trips: internationalTours,
      className: 'international-package'
    },
    'family-tours': {
      title: 'Family Group Tours',
      description: 'Create unforgettable memories with your loved ones',
      image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
      trips: familyTours
    },
    'ladakh-trips': {
      title: 'Ladakh Departures',
      description: 'Experience the breathtaking landscapes and serene monasteries of Ladakh',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
      trips: [...ladakhBikingTrips, ...ladakhSUVTrips]
    },
    'regional-tours': {
      title: 'Regional Tours',
      description: 'Discover India\'s diversity across its regions',
      image: 'https://images.unsplash.com/photo-1531810137169-0fc9ae3a4c47?auto=format&fit=crop&w=1200&q=80',
      trips: regionalTrips.flatMap(region => region.trips)
    },
    'honeymoon-packages': {
      title: 'Honeymoon Specials',
      description: 'Begin your journey of love with our romantic getaways',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
      trips: honeymoonPackages
    },
    'monthly-packages': {
      title: 'Monthly Packages',
      description: 'Discover the best destinations for each month of the year',
      image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80',
      trips: monthlyTrips.flatMap(month => month.trips)
    }
  };
  
  useEffect(() => {
    // Extract the category from the pathname if no categoryId param
    if (!categoryId) {
      const path = location.pathname.split('/')[1]; // Extract first segment after /
      
      if (categories[path]) {
        setCurrentCategory(path);
      } else {
        // If no matching category found, redirect to 404
        navigate('/not-found');
      }
    } else {
      setCurrentCategory(categoryId);
    }
  }, [categoryId, location.pathname, navigate]);
  
  // Get the selected category info
  const category = currentCategory ? categories[currentCategory] : null;
  
  if (!category) return null;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={category.image} 
            alt={category.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{category.description}</p>
        </div>
      </div>
      
      {/* Trips Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.trips.map((trip) => (
            <CompactTripCard 
              key={trip.id} 
              {...trip} 
              className={category.className}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
