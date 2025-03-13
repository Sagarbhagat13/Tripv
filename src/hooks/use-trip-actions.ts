
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useTripActions = () => {
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite ? 'This trip has been removed from your favorites' : 'This trip has been added to your favorites',
    });
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this amazing trip!',
        text: 'I found this awesome trip and thought you might like it too!',
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied to clipboard',
        description: 'You can now share this trip with your friends',
      });
    }
  };
  
  return {
    isFavorite,
    toggleFavorite,
    handleShare
  };
};
