
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
    title: 'Best of Leh-ladakh Tempo',
    location: 'Ladakh',
    price: 17499,
    discount: 0,
    duration: '6D/5N',
    image: 'src/components/images/6-nights-7-days-all-girls-leh-ladakh-trip-with-turtuk-JustWravel-1713255355-All-Girls-Ladakh-(L2L)-1.jpg',
    rating: 4.8,
    reviews: 245,
  },
  {
    id: '2',
    title: 'Experience Hidden Himachal ',
    location: 'Himachal Pradesh',
    price: 15499,
    discount: 0,
    duration: '7D/6N',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviews: 189,
  },
  {
    id: '3',
    title: 'Experience Spiti Valley ',
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
    title: 'Experienece Kedarnath',
    location: 'Uttarakhand',
    price: 15499,
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
    price: 21999,
    discount: 0,
    duration: '7D/6N',
    image: '/src/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '6',
    title: 'Spiti Bike Expedition',
    location: 'Himachal Pradesh',
    price: 29999,
    discount: 0,
    duration: '10D/9N',
    image: 'src/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '7',
    title: 'Experienece Ladakh',
    location: 'Ladakh',
    price: 28999,
    discount: 0,
    duration: '9D/8N',
    image: './src/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '8',
    title: 'Do Dham Adventure',
    location: 'Uttarakhand',
    price: 15499,
    discount: 0,
    duration: '6D/5N',
    image: 'src/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '9',
    title: 'Kashmir Delight',
    location: 'Jammu & Kashmir',
    price: 16300,
    discount: 0,
    duration: '6D/5N',
    image: '../src/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '10',
    title: 'Unforgetble Uttarakhand',
    location: 'Uttarakhand',
    price: 20999,
    discount: 0,
    duration: '7D/6N',
    image: '/components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  },
  {
    id: '11',
    title: 'Tungnath & Do Dham',
    location: 'Uttarakhand',
    price: 19999,
    discount: 0,
    duration: '8D/7N',
    image: './components/images/Blog_20240904-604846050-1725446044.jpg',
    rating: 4.9,
    reviews: 267,
  }
];
