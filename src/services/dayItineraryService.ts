
// Mocked data for the itinerary
export const ITINERARIES = {
  '1': {
    title: 'Manali Backpacking Trip',
    duration: '5 Days / 4 Nights',
    price: 13999,
    description: 'Experience the magic of the mountains with our Manali backpacking trip. Perfect for adventure seekers and nature lovers alike.',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    days: [
      {
        day: 1,
        title: 'Delhi to Manali Overnight Journey',
        description: 'Your journey begins with an overnight bus ride from Delhi to Manali. Meet your fellow travelers at the pickup point in Delhi and get ready for an exciting adventure.',
        activities: [
          { time: '06:00 PM', description: 'Meeting point at Kashmiri Gate ISBT, Delhi' },
          { time: '07:00 PM', description: 'Departure from Delhi in an AC Volvo bus' },
          { time: '09:00 PM', description: 'Dinner at a highway dhaba (not included in package)' },
          { time: 'Overnight', description: 'Overnight journey to Manali' }
        ],
        image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 2,
        title: 'Arrival in Manali & Local Exploration',
        description: 'Arrive in Manali by late morning. After checking into your hotel and freshening up, explore Old Manali and its vibrant markets.',
        activities: [
          { time: '11:00 AM', description: 'Arrival in Manali and check-in at the hotel' },
          { time: '01:00 PM', description: 'Lunch and briefing about the trip' },
          { time: '03:00 PM', description: 'Visit to Hadimba Temple and Old Manali' },
          { time: '06:00 PM', description: 'Evening at leisure at Mall Road' },
          { time: '08:00 PM', description: 'Dinner and bonfire at the hotel' }
        ],
        image: 'https://images.unsplash.com/photo-1574953488043-a436ccbd7a6c?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 3,
        title: 'Solang Valley Adventure Day',
        description: 'Spend the day at Solang Valley, known for its adventure activities. Try paragliding, zip-lining, or simply enjoy the beautiful views.',
        activities: [
          { time: '08:00 AM', description: 'Breakfast at the hotel' },
          { time: '09:30 AM', description: 'Departure for Solang Valley' },
          { time: '11:00 AM', description: 'Adventure activities at Solang Valley (paragliding, zip-lining at extra cost)' },
          { time: '01:30 PM', description: 'Lunch amidst the mountains' },
          { time: '03:00 PM', description: 'More adventure or leisure time' },
          { time: '05:30 PM', description: 'Return to the hotel' },
          { time: '08:00 PM', description: 'Dinner and overnight stay' }
        ],
        image: 'https://images.unsplash.com/photo-1585543805890-6c5ae5eeaef3?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 4,
        title: 'Kullu Valley and Naggar Castle',
        description: 'Visit the historic Naggar Castle and explore the beautiful Kullu Valley. Experience local culture and traditions.',
        activities: [
          { time: '08:30 AM', description: 'Breakfast at the hotel' },
          { time: '10:00 AM', description: 'Departure for Naggar Castle' },
          { time: '11:30 AM', description: 'Explore Naggar Castle and its art gallery' },
          { time: '01:30 PM', description: 'Lunch at a local restaurant' },
          { time: '03:00 PM', description: 'Visit to Jana Waterfall' },
          { time: '05:00 PM', description: 'Shopping at Kullu shawl factories' },
          { time: '07:00 PM', description: 'Return to Manali' },
          { time: '08:30 PM', description: 'Farewell dinner and cultural evening' }
        ],
        image: 'https://images.unsplash.com/photo-1591119651095-c522f551d3d6?q=80&w=2070&auto=format&fit=crop'
      },
      {
        day: 5,
        title: 'Manali to Delhi Departure',
        description: 'After breakfast, spend some leisure time in Manali. Later in the evening, board your bus back to Delhi with memories to cherish.',
        activities: [
          { time: '09:00 AM', description: 'Late breakfast at the hotel' },
          { time: '10:30 AM', description: 'Check-out from the hotel' },
          { time: '11:30 AM', description: 'Free time for shopping or relaxation' },
          { time: '01:00 PM', description: 'Lunch' },
          { time: '03:00 PM', description: 'Visit to Vashisht Hot Springs (optional)' },
          { time: '06:00 PM', description: 'Departure for Delhi' },
          { time: 'Overnight', description: 'Overnight journey to Delhi' }
        ],
        image: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  },
  // Add more itineraries as needed
};

export const getItineraryById = (id: string) => {
  return id ? ITINERARIES[id as keyof typeof ITINERARIES] : undefined;
};
