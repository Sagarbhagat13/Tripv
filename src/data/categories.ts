
export interface Category {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    title: 'Backpacking Trips',
    subtitle: '5+ Days Trips',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    link: '/backpacking',
  },
  {
    title: 'Weekend Trips',
    subtitle: '2-3 Days Trips',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
    link: '/weekends',
  },
  {
    title: 'Himalayan Treks',
    subtitle: 'Mountain Adventures',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
    link: '/treks',
  },
  {
    title: 'Customized Trips',
    subtitle: 'Tailored For You',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
    link: '/custom-trip',
  },
];
