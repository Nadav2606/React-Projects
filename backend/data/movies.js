let movies = [
  {
    id: 1,
    title: "I Robot",
    year: 2004,
    director: "Alex Proyas",
    rating: 8.7,
    leadActor: "Will Smith",
    duration: 115,
    poster:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Sci-Fi"],
    description:
      "In a future where robots assist humanity, a detective investigates a murder connected to artificial intelligence.",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    rating: 9.0,
    leadActor: "Leonardo DiCaprio",
    duration: 148,
    poster:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Sci-Fi", "Thriller"],
    description:
      "A skilled thief enters dreams to steal secrets and is offered a chance at redemption.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    rating: 9.1,
    leadActor: "Matthew McConaughey",
    duration: 169,
    poster:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Sci-Fi", "Adventure"],
    description:
      "Astronauts travel through a wormhole searching for humanity's future.",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    rating: 9.3,
    leadActor: "Christian Bale",
    duration: 152,
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Crime"],
    description: "Batman faces chaos as a dangerous criminal threatens Gotham.",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    year: 2019,
    director: "Anthony Russo",
    rating: 8.8,
    leadActor: "Robert Downey Jr.",
    duration: 181,
    poster:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Adventure"],
    description:
      "Heroes unite one final time to restore balance in the universe.",
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    rating: 9.0,
    leadActor: "Keanu Reeves",
    duration: 136,
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Sci-Fi"],
    description: "A hacker discovers that reality itself may be an illusion.",
  },
  {
    id: 7,
    title: "Titanic",
    year: 1997,
    director: "James Cameron",
    rating: 8.4,
    leadActor: "Leonardo DiCaprio",
    duration: 194,
    poster:
      "https://images.unsplash.com/photo-1500077423678-25eead4cb523?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Drama", "Romance"],
    description: "A love story unfolds aboard the doomed Titanic.",
  },
  {
    id: 8,
    title: "Gladiator",
    year: 2000,
    director: "Ridley Scott",
    rating: 8.8,
    leadActor: "Russell Crowe",
    duration: 155,
    poster:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Drama"],
    description: "A betrayed Roman general fights for justice and revenge.",
  },
  {
    id: 9,
    title: "Joker",
    year: 2019,
    director: "Todd Phillips",
    rating: 8.5,
    leadActor: "Joaquin Phoenix",
    duration: 122,
    poster:
      "https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Drama", "Crime"],
    description: "A struggling man slowly transforms into a symbol of chaos.",
  },
  {
    id: 10,
    title: "Avatar",
    year: 2009,
    director: "James Cameron",
    rating: 8.3,
    leadActor: "Sam Worthington",
    duration: 162,
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Adventure", "Sci-Fi"],
    description:
      "A marine enters a breathtaking alien world and faces difficult choices.",
  },
  {
    id: 11,
    title: "Black Panther",
    year: 2018,
    director: "Ryan Coogler",
    rating: 8.2,
    leadActor: "Chadwick Boseman",
    duration: 134,
    poster:
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Adventure"],
    description: "The king of Wakanda rises to protect his nation.",
  },
  {
    id: 12,
    title: "Deadpool",
    year: 2016,
    director: "Tim Miller",
    rating: 8.0,
    leadActor: "Ryan Reynolds",
    duration: 108,
    poster:
      "https://images.unsplash.com/photo-1608889174637-3c44f6326f2a?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Comedy"],
    description:
      "A sarcastic antihero seeks revenge after gaining strange powers.",
  },
  {
    id: 13,
    title: "Spider-Man: No Way Home",
    year: 2021,
    director: "Jon Watts",
    rating: 8.7,
    leadActor: "Tom Holland",
    duration: 148,
    poster:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Adventure"],
    description: "Spider-Man faces multiverse chaos and unexpected allies.",
  },
  {
    id: 14,
    title: "Doctor Strange",
    year: 2016,
    director: "Scott Derrickson",
    rating: 7.9,
    leadActor: "Benedict Cumberbatch",
    duration: 115,
    poster:
      "https://images.unsplash.com/photo-1514467958096-4ae8deb4efba?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Fantasy", "Action"],
    description: "A surgeon discovers a world of magic and hidden dimensions.",
  },
  {
    id: 15,
    title: "John Wick",
    year: 2014,
    director: "Chad Stahelski",
    rating: 8.4,
    leadActor: "Keanu Reeves",
    duration: 101,
    poster:
      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Thriller"],
    description: "A retired assassin returns after a deeply personal loss.",
  },
  {
    id: 16,
    title: "The Wolf of Wall Street",
    year: 2013,
    director: "Martin Scorsese",
    rating: 8.6,
    leadActor: "Leonardo DiCaprio",
    duration: 180,
    poster:
      "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Biography", "Comedy"],
    description:
      "The rise and fall of a stockbroker driven by wealth and excess.",
  },
  {
    id: 17,
    title: "Top Gun: Maverick",
    year: 2022,
    director: "Joseph Kosinski",
    rating: 8.8,
    leadActor: "Tom Cruise",
    duration: 130,
    poster:
      "https://images.unsplash.com/photo-1519074069444-1ba4e6664104?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Action", "Drama"],
    description:
      "A legendary pilot returns for one of his most dangerous missions.",
  },
  {
    id: 18,
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    rating: 9.5,
    leadActor: "Tim Robbins",
    duration: 142,
    poster:
      "https://images.unsplash.com/photo-1505672678657-cc7037095e60?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Drama"],
    description:
      "A banker forms a powerful friendship while serving a prison sentence.",
  },
  {
    id: 19,
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    rating: 8.9,
    leadActor: "Brad Pitt",
    duration: 139,
    poster:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Drama", "Thriller"],
    description: "An office worker enters a mysterious underground movement.",
  },
  {
    id: 20,
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    rating: 8.4,
    leadActor: "Timothée Chalamet",
    duration: 155,
    poster:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&h=600&q=80",
    genre: ["Sci-Fi", "Adventure"],
    description:
      "A young nobleman must embrace destiny on a dangerous desert planet.",
  },
];


module.exports = movies;