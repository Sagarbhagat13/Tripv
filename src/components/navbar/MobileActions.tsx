import { useState } from 'react';
import { Menu, X, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import EnquiryFormDialog from '@/components/enquiry/EnquiryFormDialog';

interface MobileActionsProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: (e: React.MouseEvent) => void;
  toggleSearch: () => void;
}

const MobileActions = ({ isScrolled, isMenuOpen, toggleMenu, toggleSearch }: MobileActionsProps) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiryForm = (e: React.MouseEvent) => {
    // Prevent event propagation to avoid triggering other handlers
    e.stopPropagation();
    setIsEnquiryOpen(true);
  };

  const closeEnquiryForm = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <div className="flex lg:hidden items-center gap-3">
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light",
          isScrolled ? "text-tripvidya-dark" : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={openEnquiryForm}
      >
        <MapPin className="h-5 w-5" />
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light",
          isScrolled ? "text-tripvidya-dark" : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={toggleSearch}
      >
        <Search className="h-5 w-5" />
      </Button>
      <Button 
        variant={isMenuOpen ? "default" : "ghost"}
        size="sm" 
        className={cn(
          "rounded-full p-2 hover:bg-tripvidya-light transition-all",
          isMenuOpen 
            ? "bg-tripvidya-primary text-white" 
            : isScrolled 
              ? "text-tripvidya-dark" 
              : "text-white bg-white/20 backdrop-blur-md"
        )}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      <EnquiryFormDialog isOpen={isEnquiryOpen} onClose={closeEnquiryForm} />
    </div>
  );
};

export default MobileActions;
