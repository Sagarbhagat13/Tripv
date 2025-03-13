
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-3 right-3 bg-white/80 rounded-full p-1 hover:bg-white"
      onClick={toggleFavorite}
    >
      <Heart className={cn("h-5 w-5", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
    </Button>
  );
};
