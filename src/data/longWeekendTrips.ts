
export interface LongWeekendTrip {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  duration: string;
  longWeekend: boolean;
}

export const longWeekendTrips: LongWeekendTrip[] = [
  {
    id: 'lw1',
    title: 'Coorg Weekend Getaway',
    location: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 12999,
    duration: '3D/2N',
    longWeekend: true
  },
  {
    id: 'lw2',
    title: 'Goa Beach Holiday',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 14500,
    duration: '3D/2N',
    longWeekend: true
  },
  {
    id: 'lw3',
    title: 'Rishikesh Adventure',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 11999,
    duration: '3D/2N',
    longWeekend: true
  },
  {
    id: 'lw4',
    title: 'Diwali in Jaipur',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 16999,
    duration: '4D/3N',
    longWeekend: true
  },
  {
    id: 'lw5',
    title: 'Christmas in Manali',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    price: 18500,
    duration: '5D/4N',
    longWeekend: true
  }
];
