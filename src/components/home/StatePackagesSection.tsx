
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TripCarousel from '@/components/TripCarousel';
import CarouselCard from './CarouselCard';
import { monthlyTrips } from '@/data/monthlyTrips';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const StatePackagesSection = () => {
  const [activeMonth, setActiveMonth] = useState("January");
  const tabsListRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Scroll active tab into view when it changes
  useEffect(() => {
    if (tabsListRef.current) {
      const activeTabElement = tabsListRef.current.querySelector('[data-state="active"]');
      if (activeTabElement) {
        const tabsListRect = tabsListRef.current.getBoundingClientRect();
        const activeTabRect = activeTabElement.getBoundingClientRect();
        
        // Calculate the scroll position to center the active tab
        const scrollLeft = activeTabRect.left - tabsListRect.left - 
                          (tabsListRect.width / 2) + (activeTabRect.width / 2);
                          
        tabsListRef.current.scrollLeft = scrollLeft;
      }
    }
  }, [activeMonth]);
  
  return (
    <section className="py-12 bg-white">
      <div className={cn("container mx-auto", isMobile ? "px-4" : "px-4")}>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-wanderon-dark">Explore Monthly Trips</h2>
          <p className="text-gray-600 mt-2">Discover the best destinations for each month of the year</p>
        </div>
        
        <Tabs defaultValue="January" onValueChange={setActiveMonth}>
          <div className="relative mb-8">
            <div 
              ref={tabsListRef}
              className="overflow-x-auto scrollbar-thin scrollbar-thumb-wanderon-primary scrollbar-track-wanderon-light pb-2"
            >
              <TabsList className="bg-wanderon-light rounded-full p-1.5 w-max inline-flex mx-auto">
                {monthlyTrips.map((monthData) => (
                  <TabsTrigger 
                    key={monthData.month} 
                    value={monthData.month}
                    className="rounded-full px-4 py-2 whitespace-nowrap data-[state=active]:bg-wanderon-primary data-[state=active]:text-white"
                  >
                    {monthData.month}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>
          
          {monthlyTrips.map((monthData) => (
            <TabsContent key={monthData.month} value={monthData.month}>
              <TripCarousel 
                title={`Best Places to Visit in ${monthData.month}`}
                description="Perfect weather conditions and special experiences"
                itemsPerView={isMobile ? 1 : 4}
              >
                {monthData.trips.map((trip) => (
                  <CarouselCard 
                    key={trip.id} 
                    {...trip}
                    stateHighlight={true}
                    className="monthly-package"
                  />
                ))}
              </TripCarousel>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-10">
          <Link to="/monthly-packages">
            <Button variant="outline" className="border-wanderon-primary text-wanderon-primary hover:bg-wanderon-primary hover:text-white">
              View All Monthly Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatePackagesSection;
