// In a real application, this would fetch data from an API
// For now, we're using mock data

export const getTripData = (id: string) => {
  // This is mock data, in a real app this would be fetched from an API
  return {
    id: '1',
    title: 'sala Backpacking Trip',
    location: 'Himachal Pradesh',
    price: 12999,
    discount: 15,
    duration: '5D/4N',
    rating: 4.8,
    reviews: 245,
    description: 'Experience the magic of Manali with our expertly curated backpacking trip. From snow-capped mountains to lush valleys, this adventure has it all.',
    highlights: [
      'Scenic views of the Himalayan ranges',
      'Adventure activities like paragliding and river rafting',
      'Visit to Solang Valley and Rohtang Pass',
      'Cultural exploration in Old Manali',
      'Bonfire and music nights under the stars',
    ],
    inclusions: [
      'Accommodation in hotels and camps',
      'All meals as mentioned in the itinerary',
      'Transportation in AC tempo traveler',
      'Experienced trip captain',
      'All taxes and service charges',
    ],
    exclusions: [
      'Personal expenses',
      'Any activity not mentioned in inclusions',
      'Travel insurance',
      'Alcoholic beverages',
    ],
    images: [
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Manali',
        description: 'Board the volvo bus from Delhi and embark on an overnight journey to Manali. Get to know your fellow travelers during the journey.',
        activities: ['Overnight journey', 'Ice-breaking session', 'Rest during travel'],
        meals: ['None'],
        accommodation: 'Overnight in Volvo bus',
      },
      {
        day: 2,
        title: 'Arrival in Manali',
        description: 'Reach Manali by noon and check-in to your hotel. After freshening up, explore Old Manali and Manu Temple. End the day with a welcome dinner and bonfire.',
        activities: ['Check-in to hotel', 'Old Manali exploration', 'Manu Temple visit', 'Welcome dinner and bonfire'],
        meals: ['Breakfast', 'Dinner'],
        accommodation: 'Hotel in Manali',
      },
      {
        day: 3,
        title: 'Solang Valley Adventure',
        description: 'Full day excursion to Solang Valley. Enjoy adventure activities like paragliding and zorbing (optional). Take in the breathtaking views of the surrounding peaks.',
        activities: ['Solang Valley visit', 'Paragliding (optional)', 'Zorbing (optional)', 'Photography session'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Manali',
      },
      {
        day: 4,
        title: 'Rohtang Pass & Atal Tunnel',
        description: 'Visit the famous Rohtang Pass (subject to permits) and marvel at the panoramic vistas. Explore the newly built Atal Tunnel. Evening free for shopping in Manali market.',
        activities: ['Rohtang Pass visit', 'Atal Tunnel exploration', 'Shopping in Manali market'],
        meals: ['Breakfast', 'Lunch', 'Dinner'],
        accommodation: 'Hotel in Manali',
      },
      {
        day: 5,
        title: 'Manali to Delhi',
        description: 'After breakfast, check-out from the hotel. Spend some free time for last-minute shopping or cafe hopping. Board the evening Volvo bus back to Delhi.',
        activities: ['Check-out', 'Free time for shopping', 'Departure to Delhi'],
        meals: ['Breakfast'],
        accommodation: 'Overnight in Volvo bus',
      },
    ],
    faqs: [
      {
        question: 'Is this trip suitable for solo travelers?',
        answer: 'Absolutely! Our Manali Backpacking Trip is perfect for solo travelers. Most of our groups have 60-70% solo travelers, so you\'ll have plenty of opportunities to make new friends.',
      },
      {
        question: 'What is the best time to visit Manali?',
        answer: 'The best time to visit Manali is from March to June and September to November. July-August is the monsoon season, while December to February offers a snow-capped experience.',
      },
      {
        question: 'Are the adventure activities safe?',
        answer: 'Yes, all adventure activities are conducted under the supervision of trained professionals with proper safety equipment. However, they are optional and at an additional cost.',
      },
      {
        question: 'What kind of accommodation can I expect?',
        answer: 'We provide comfortable 3-star equivalent hotels with clean rooms and attached bathrooms. Rooms are on a twin or triple sharing basis.',
      },
      {
        question: 'Can I customize this itinerary?',
        answer: 'For group departures, we follow the set itinerary. However, for private bookings, we can customize the itinerary according to your preferences.',
      },
    ],
    placesCovered: [
      'Delhi',
      'Manali',
      'Solang Valley',
      'Rohtang Pass',
      'Old Manali'
    ],
  };
};
