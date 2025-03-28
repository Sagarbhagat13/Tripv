
import { Trip } from './popularTrips';

// Define type for regional trips data
export interface RegionalTrips {
  region: string;
  trips: Trip[];
}

// Creating regional trips data
export const regionalTrips: RegionalTrips[] = [
  {
    region: "North",
    trips: [
      {
        id: 'north-1',
        title: 'Kashmir Paradise',
        location: 'Jammu & Kashmir',
        price: 24999,
        discount: 15,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.8,
        reviews: 156
      },
      {
        id: 'north-2',
        title: 'Manali Adventure',
        location: 'Himachal Pradesh',
        price: 18999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.7,
        reviews: 134
      },
      {
        id: 'north-3',
        title: 'Spiritual Varanasi',
        location: 'Uttar Pradesh',
        price: 16999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.6,
        reviews: 98
      }
    ]
  },
  {
    region: "South",
    trips: [
      {
        id: 'south-1',
        title: 'Kerala Backwaters',
        location: 'Kerala',
        price: 22999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.9,
        reviews: 187
      },
      {
        id: 'south-2',
        title: 'Mysore Heritage',
        location: 'Karnataka',
        price: 17999,
        discount: 8,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.6,
        reviews: 112
      },
      {
        id: 'south-3',
        title: 'Pondicherry Beach Retreat',
        location: 'Tamil Nadu',
        price: 19999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.7,
        reviews: 143
      }
    ]
  },
  {
    region: "East",
    trips: [
      {
        id: 'east-1',
        title: 'Darjeeling Tea Trails',
        location: 'West Bengal',
        price: 21999,
        discount: 12,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.7,
        reviews: 132
      },
      {
        id: 'east-2',
        title: 'Kaziranga Wildlife',
        location: 'Assam',
        price: 26999,
        discount: 8,
        duration: '6D/5N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.8,
        reviews: 118
      },
      {
        id: 'east-3',
        title: 'Gangtok & Pelling',
        location: 'Sikkim',
        price: 23999,
        discount: 10,
        duration: '7D/6N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.6,
        reviews: 96
      }
    ]
  },
  {
    region: "West",
    trips: [
      {
        id: 'west-1',
        title: 'Goa Beach Holiday',
        location: 'Goa',
        price: 18999,
        discount: 15,
        duration: '4D/3N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.8,
        reviews: 176
      },
      {
        id: 'west-2',
        title: 'Udaipur Lake City',
        location: 'Rajasthan',
        price: 22999,
        discount: 10,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.7,
        reviews: 146
      },
      {
        id: 'west-3',
        title: 'Rann of Kutch',
        location: 'Gujarat',
        price: 20999,
        discount: 8,
        duration: '5D/4N',
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
        rating: 4.6,
        reviews: 122
      }
    ]
  }
];
