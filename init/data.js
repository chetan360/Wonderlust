const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description:
      "A stunning villa with panoramic ocean views, private beach access, and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721448277718-84aee032065c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Malibu, CA",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-118.7787, 34.0259], // Example coordinates for Malibu, CA
    },
    category: "Trending",
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "A charming cabin nestled in the mountains, perfect for a relaxing getaway. Features a fireplace and scenic views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1639405791326-b1168dd7ad71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 200,
    location: "Aspen, CO",
    country: "USA",
    geometry: {
      type: "Point",
      coordinates: [-106.82, 39.1911], // Example coordinates for Aspen, CO
    },
    category: "Mountain",
  },
  {
    title: "Elegant Parisian Apartment",
    description:
      "An elegant apartment in the heart of Paris with easy access to all major attractions and dining options.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 500,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566], // Coordinates for Paris, France
    },
    category: "Iconic Cities",
  },
  {
    title: "Modern Tokyo Loft",
    description:
      "A sleek and modern loft in Tokyo's vibrant Shibuya district, featuring state-of-the-art amenities and close to public transport.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661907176995-b5fb70a378cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 350,
    location: "Shibuya, Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.702, 35.6585], // Coordinates for Tokyo, Japan
    },
    category: "Trending",
  },
  {
    title: "Historic Rome Condo",
    description:
      "A beautifully restored condo located near ancient Roman landmarks, offering a blend of historic charm and modern comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1657044005514-c02af4fb7d43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 300,
    location: "Rome",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.4964, 41.9028], // Coordinates for Rome, Italy
    },
    category: "Iconic Cities",
  },
  {
    title: "Sunny Sydney Apartment",
    description:
      "A bright and airy apartment with views of the Sydney Opera House, located in a vibrant neighborhood with great restaurants.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1663089331117-b4176fef4c9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 400,
    location: "Sydney",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688], // Coordinates for Sydney, Australia
    },
    category: "Trending",
  },
  {
    title: "Rustic Canadian Lodge",
    description:
      "A rustic lodge surrounded by nature in the Canadian Rockies, ideal for outdoor enthusiasts and winter sports.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1688416554312-1e87989c3718?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 250,
    location: "Banff, AB",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5734, 51.1784], // Coordinates for Banff, Canada
    },
    category: "Mountain",
  },
  {
    title: "Contemporary Berlin Studio",
    description:
      "A stylish studio apartment in the heart of Berlin, offering a modern living space with easy access to cultural landmarks.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1706139517445-c9df67670218?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 300,
    location: "Berlin",
    country: "Germany",
    geometry: {
      type: "Point",
      coordinates: [13.405, 52.52], // Coordinates for Berlin, Germany
    },
    category: "Iconic Cities",
  },
  {
    title: "Charming Barcelona Flat",
    description:
      "A charming flat with classic Spanish architecture, located near La Rambla and other popular attractions in Barcelona.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534001265532-393289eb8ed3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 350,
    location: "Barcelona",
    country: "Spain",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851], // Coordinates for Barcelona, Spain
    },
    category: "Iconic Cities",
  },
  {
    title: "Scenic Cape Town Villa",
    description:
      "A luxurious villa with breathtaking views of Table Mountain and the coastline, perfect for a high-end getaway.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1680302170828-9fd4edda5d39?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1000,
    location: "Cape Town",
    country: "South Africa",
    geometry: {
      type: "Point",
      coordinates: [18.4232, -33.9249], // Coordinates for Cape Town, South Africa
    },
    category: "Trending",
  },
];

module.exports = { data: sampleListings };
