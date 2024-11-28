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
  },
  {
    title: "Scenic Cape Town Villa",
    description:
      "A luxurious villa with breathtaking views of Table Mountain and the coastline, perfect for a high-end getaway.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1680302170828-9fd4edda5d39?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 800,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Elegant Vienna Apartment",
    description:
      "An elegant apartment in Vienna's historic center, featuring classic design elements and proximity to major attractions.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1675616575218-6457c9eb95be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 420,
    location: "Vienna",
    country: "Austria",
  },
  {
    title: "Spacious New York Loft",
    description:
      "A spacious loft in the heart of Manhattan, featuring high ceilings, large windows, and modern furnishings.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661872770044-5b5155c69ea5?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 700,
    location: "New York, NY",
    country: "USA",
  },
  {
    title: "Charming Prague Apartment",
    description:
      "A charming apartment in historic Prague, with classic European architecture and close proximity to major landmarks.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1675616575218-6457c9eb95be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 250,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Tropical Bali Villa",
    description:
      "A luxurious villa in Bali with a private pool, lush gardens, and serene surroundings perfect for relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 400,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Modern Dubai Apartment",
    description:
      "A sleek apartment in the heart of Dubai with stunning views of the skyline and easy access to shopping and dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721170628072-64535fa72133?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 600,
    location: "Downtown Dubai",
    country: "UAE",
  },
  {
    title: "Quaint Edinburgh Cottage",
    description:
      "A quaint cottage in Edinburgh with traditional Scottish charm, located near historic sites and local pubs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1573558098539-394235f962b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 220,
    location: "Edinburgh",
    country: "United Kingdom",
  },
  {
    title: "Luxurious Bangkok Suite",
    description:
      "A luxurious suite in Bangkok with opulent furnishings, stunning city views, and access to top-tier amenities.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661936487321-9db456b6813d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 500,
    location: "Sukhumvit",
    country: "Thailand",
  },
  {
    title: "Chic Milan Flat",
    description:
      "A chic flat in Milan's fashion district, offering modern design and proximity to high-end shopping and dining.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1536494126589-29fadf0d7e3c?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 350,
    location: "Milan",
    country: "Italy",
  },
  {
    title: "Sunny Rio de Janeiro Apartment",
    description:
      "A bright and vibrant apartment with views of Copacabana Beach, perfect for enjoying Rio's lively atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 280,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    title: "Elegant Amsterdam Canal House",
    description:
      "An elegant canal house in Amsterdam with classic Dutch architecture and picturesque views of the canal.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 450,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Secluded Maui Retreat",
    description:
      "A secluded retreat on Maui with stunning ocean views, a private garden, and a peaceful, tropical setting.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1686090450488-48ce19426bbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 700,
    location: "Maui, HI",
    country: "USA",
  },
];

module.exports = { data: sampleListings };
