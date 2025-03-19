
import { Trip } from './popularTrips';

// Extend Trip interface to maintain type compatibility
export interface LongWeekendTrip extends Trip {
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw1',
    title: 'Ladakh Biking',
    location: 'Karnataka',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/87/08/8c/ladakh-bike-expedition.jpg?w=1200&h=-1&s=1',
    price: 12999,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.7,
    reviews: 120
  },
  {
    id: 'lw2',
    title: 'ladakh Tempo',
    location: 'Goa',
    image: 'https://imgcld.yatra.com/ytimages/image/upload/v1517482103/AdvNation/ANN_TRP530/Bike-Expedition-Ladakh_1439472639_F6YkoV.jpg',
    price: 14500,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'lw3',
    title: 'Hidden Himachal',
    location: 'Uttarakhand',
    image: 'https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FRelax%20at%20the%20Shangarh%20Meadows.jpg%2FRelax%20at%20the%20Shangarh%20Meadows-1678364070363.jpg&w=2048&q=75',
    price: 11999,
    duration: '3D/2N',
    longWeekend: true,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 'lw4',
    title: 'Spiritual kedarnath',
    location: 'Rajasthan',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1200px-Kedarnath_Temple_in_Rainy_season.jpg',
    price: 16999,
    duration: '4D/3N',
    longWeekend: true,
    rating: 4.9,
    reviews: 135
  },
  {
    id: 'lw5',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw6',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw7',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw8',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw9',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw10',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw11',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/87/08/8c/ladakh-bike-expedition.jpg?w=1200&h=-1&s=1',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw12',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://imgcld.yatra.com/ytimages/image/upload/v1517482103/AdvNation/ANN_TRP530/Bike-Expedition-Ladakh_1439472639_F6YkoV.jpg',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw13',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FRelax%20at%20the%20Shangarh%20Meadows.jpg%2FRelax%20at%20the%20Shangarh%20Meadows-1678364070363.jpg&w=2048&q=75',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw14',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  },
  {
    id: 'lw15',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true,
    rating: 4.8,
    reviews: 142
  }
];
