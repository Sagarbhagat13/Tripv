
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
    image: '/images/Ladakh-trip.webp',
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
    image: '/images/Shangarh-in-Greenry.jpg',
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
    image: '/images/2J5Xa9Dwx2fynMqUMJT5edzIeuovKETHtfuipdIT.webp',
    rating: 4.7,
    reviews: 176,
  },
  {
    id: '4',
    title: 'Experienece Kedarnath',
    location: 'Uttarakhand',
    price: 15499,
    discount: 0,
    duration: '6D/5N',
    image: '/images/Kedarnath.webp',
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
    image: '/images/Bike-Expedition-Ladakh_1439472639_F6YkoV.avif',
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
    image: '/images/IMG_7464.jpg',
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
    image: '/images/Ladakh-trip.webp',
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
    image: '/images/chardham-banner3.webp',
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
    image: '/images/praneet-kumar-H8dcf-v98mA-unsplash.jpg',
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
    image: '/images/ranikhet.jpg',
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
    image: '/images/Blog_20240904-604846050-1725446044 copy.jpg',
    rating: 4.9,
    reviews: 267,
  }
];
