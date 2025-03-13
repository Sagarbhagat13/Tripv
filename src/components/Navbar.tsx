
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

// Import components
import Logo from './navbar/Logo';
import NavLinks from './navbar/NavLinks';
import DesktopActions from './navbar/DesktopActions';
import MobileActions from './navbar/MobileActions';
import MobileMenu from './navbar/MobileMenu';
import SearchOverlay from './navbar/SearchOverlay';
import { navLinks } from './navbar/NavbarData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && overlayRef.current && overlayRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <NavLinks isScrolled={isScrolled} links={navLinks} />
          
          {/* Desktop Action Buttons */}
          <DesktopActions isScrolled={isScrolled} toggleSearch={toggleSearch} />
          
          {/* Mobile Menu Button */}
          <MobileActions 
            isScrolled={isScrolled} 
            isMenuOpen={isMenuOpen} 
            toggleMenu={toggleMenu} 
            toggleSearch={toggleSearch} 
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        overlayRef={overlayRef}
        navLinks={navLinks}
        onClose={() => setIsMenuOpen(false)}
      />
      
      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </header>
  );
};

export default Navbar;
