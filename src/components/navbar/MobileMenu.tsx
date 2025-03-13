
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  overlayRef: React.RefObject<HTMLDivElement>;
  navLinks: { name: string; path: string }[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, overlayRef, navLinks, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div 
      ref={overlayRef}
      className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-md animate-fade-in overflow-hidden"
      style={{ 
        height: '75vh', 
        width: '75vw',
        right: 0,
        left: 'auto'
      }}
    >
      <div className="container mx-auto px-6 py-6 h-full overflow-y-auto">
        <NavLinks isScrolled={true} links={navLinks} mobile={true} onClick={onClose} />
        
        <div className="pt-4">
          <Button 
            variant="default"
            className="w-full bg-tripvidya-primary hover:bg-tripvidya-primary/90 h-10 text-sm rounded-xl"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Plan My Trip
          </Button>
        </div>
        
        <div className="flex justify-center gap-4 pt-6">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-tripvidya-light text-tripvidya-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-tripvidya-light text-tripvidya-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-tripvidya-light text-tripvidya-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
