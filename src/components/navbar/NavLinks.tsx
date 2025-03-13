
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  isScrolled: boolean;
  links: { name: string; path: string }[];
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ isScrolled, links, mobile = false, onClick }: NavLinksProps) => {
  if (mobile) {
    return (
      <nav className="flex flex-col space-y-3">
        {links.map((link, index) => (
          <Link 
            key={link.name}
            to={link.path}
            className="text-tripvidya-dark text-sm font-medium py-2 border-b border-gray-100 flex justify-between items-center hover:text-tripvidya-primary transition-colors"
            onClick={onClick}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {link.name}
            <span className="text-tripvidya-primary text-xs">→</span>
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {links.map((link) => (
        <Link 
          key={link.name}
          to={link.path}
          className={cn(
            "text-sm font-medium hover:text-tripvidya-primary transition-colors",
            isScrolled ? "text-tripvidya-dark" : "text-white"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
