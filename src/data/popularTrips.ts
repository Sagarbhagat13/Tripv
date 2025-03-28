
// Popular trip data

export interface Trip {
  id: string;
  title: string;
  location: string;
  price: number;
  discount?: number;
  duration: string;
  image: string;
  rating: number;
  reviews: number;
  stateHighlight?: boolean;
  honeymoonSpecial?: boolean;
  international?: boolean;
  familySpecial?: boolean;
  longWeekend?: boolean;
  bikingPackage?: boolean;
  suvPackage?: boolean;
  offbeat?: boolean;
}

export const popularTrips: Trip[] = [
  {
    id: '1',
    title: 'Manali Backpacking Trip',
    location: 'Himachal Pradesh',
    price: 12999,
    discount: 15,
    duration: '5D/4N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    reviews: 245,
  },
  {
    id: '2',
    title: 'Kashmir Great Lakes Trek',
    location: 'Jammu & Kashmir',
    price: 18500,
    discount: 10,
    duration: '7D/6N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 189,
  },
  {
    id: '3',
    title: 'Spiti Valley Road Trip',
    location: 'Himachal Pradesh',
    price: 17999,
    discount: 0,
    duration: '8D/7N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    reviews: 176,
  },
  {
    id: '4',
    title: 'Meghalaya Exploration',
    location: 'North East',
    price: 24999,
    discount: 5,
    duration: '6D/5N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.6,
    reviews: 134,
  },
  {
    id: '5',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '6',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '7',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '8',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '9',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '10',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '11',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '12',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '13',
    title: 'Ladakh Bike Expedition',
    location: 'Ladakh',
    price: 32000,
    discount: 0,
    duration: '10D/9N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 267,
  }
];
