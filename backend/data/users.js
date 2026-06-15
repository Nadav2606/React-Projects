let users = [
  {
    id: 1,
    username: "avi",
    email: "avi@gmail.com",
    fullName: "Avi Cohen",
    avatar: "https://i.pravatar.cc/150?img=1",
    joinedAt: "2025-01-10",
    favoriteGenres: ["Action", "Sci-Fi"],
    watchList: ["Interstellar", "Breaking Bad", "The Batman"],
    birthDate: "1997-03-14"
  },
  {
    id: 2,
    username: "noa",
    email: "noa@gmail.com",
    fullName: "Noa Levi",
    avatar: "https://i.pravatar.cc/150?img=2",
    joinedAt: "2025-02-14",
    favoriteGenres: ["Drama", "Romance"],
    watchList: ["Titanic", "Friends"],
    birthDate: "1999-06-22"
  },
  {
    id: 3,
    username: "david",
    email: "david@gmail.com",
    fullName: "David Mizrahi",
    avatar: "https://i.pravatar.cc/150?img=3",
    joinedAt: "2024-12-18",
    favoriteGenres: ["Comedy", "Action"],
    watchList: ["Deadpool", "Rush Hour"],
    birthDate: "1994-11-07"
  },
  {
    id: 4,
    username: "maya",
    email: "maya@gmail.com",
    fullName: "Maya Ben David",
    avatar: "https://i.pravatar.cc/150?img=4",
    joinedAt: "2025-03-02",
    favoriteGenres: ["Fantasy", "Adventure"],
    watchList: ["Harry Potter", "Lord of the Rings"],
    birthDate: "2000-04-30"
  },
  {
    id: 5,
    username: "ron",
    email: "ron@gmail.com",
    fullName: "Ron Azulay",
    avatar: "https://i.pravatar.cc/150?img=5",
    joinedAt: "2024-11-28",
    favoriteGenres: ["Thriller", "Crime"],
    watchList: ["Prison Break", "Narcos"],
    birthDate: "1996-09-12"
  },
  {
    id: 6,
    username: "liel",
    email: "liel@gmail.com",
    fullName: "Liel Ohana",
    avatar: "https://i.pravatar.cc/150?img=6",
    joinedAt: "2025-04-12",
    favoriteGenres: ["Comedy"],
    watchList: ["Brooklyn Nine-Nine", "The Office"],
    birthDate: "2001-02-01"
  },
  {
    id: 7,
    username: "eden",
    email: "eden@gmail.com",
    fullName: "Eden Peretz",
    avatar: "https://i.pravatar.cc/150?img=7",
    joinedAt: "2025-01-25",
    favoriteGenres: ["Horror", "Mystery"],
    watchList: ["The Conjuring", "Scream"],
    birthDate: "1998-12-10"
  },
  {
    id: 8,
    username: "shir",
    email: "shir@gmail.com",
    fullName: "Shir Katz",
    avatar: "https://i.pravatar.cc/150?img=8",
    joinedAt: "2025-03-08",
    favoriteGenres: ["Drama", "Comedy"],
    watchList: ["Modern Family", "Suits"],
    birthDate: "2002-07-17"
  },
  {
    id: 9,
    username: "yossi",
    email: "yossi@gmail.com",
    fullName: "Yossi Biton",
    avatar: "https://i.pravatar.cc/150?img=9",
    joinedAt: "2024-10-05",
    favoriteGenres: ["Sci-Fi"],
    watchList: ["Dune", "Star Wars"],
    birthDate: "1995-08-29"
  },
  {
    id: 10,
    username: "daniel",
    email: "daniel@gmail.com",
    fullName: "Daniel Mor",
    avatar: "https://i.pravatar.cc/150?img=10",
    joinedAt: "2025-05-01",
    favoriteGenres: ["Action", "Adventure"],
    watchList: ["John Wick", "Fast & Furious"],
    birthDate: "1993-10-14"
  },
  {
    id: 11,
    username: "tamar",
    email: "tamar@gmail.com",
    fullName: "Tamar Gold",
    avatar: "https://i.pravatar.cc/150?img=11",
    joinedAt: "2025-02-20",
    favoriteGenres: ["Romance"],
    watchList: ["The Notebook", "Emily in Paris"],
    birthDate: "1998-05-21"
  },
  {
    id: 12,
    username: "gal",
    email: "gal@gmail.com",
    fullName: "Gal Shani",
    avatar: "https://i.pravatar.cc/150?img=12",
    joinedAt: "2025-01-14",
    favoriteGenres: ["Documentary"],
    watchList: ["Planet Earth", "Our Universe"],
    birthDate: "1997-01-01"
  },
  {
    id: 13,
    username: "omer",
    email: "omer@gmail.com",
    fullName: "Omer Levi",
    avatar: "https://i.pravatar.cc/150?img=13",
    joinedAt: "2024-09-16",
    favoriteGenres: ["Crime"],
    watchList: ["Ozark", "Peaky Blinders"],
    birthDate: "1992-07-08"
  },
  {
    id: 14,
    username: "sapir",
    email: "sapir@gmail.com",
    fullName: "Sapir Cohen",
    avatar: "https://i.pravatar.cc/150?img=14",
    joinedAt: "2025-02-05",
    favoriteGenres: ["Fantasy"],
    watchList: ["The Witcher", "House of the Dragon"],
    birthDate: "2001-09-18"
  },
  {
    id: 15,
    username: "itay",
    email: "itay@gmail.com",
    fullName: "Itay Ben Haim",
    avatar: "https://i.pravatar.cc/150?img=15",
    joinedAt: "2024-12-01",
    favoriteGenres: ["Action"],
    watchList: ["Extraction", "Mission Impossible"],
    birthDate: "1990-03-11"
  },
  {
    id: 16,
    username: "yuval",
    email: "yuval@gmail.com",
    fullName: "Yuval Nissim",
    avatar: "https://i.pravatar.cc/150?img=16",
    joinedAt: "2025-03-17",
    favoriteGenres: ["Comedy", "Drama"],
    watchList: ["Ted Lasso", "How I Met Your Mother"],
    birthDate: "1998-04-03"
  },
  {
    id: 17,
    username: "bar",
    email: "bar@gmail.com",
    fullName: "Bar Malka",
    avatar: "https://i.pravatar.cc/150?img=17",
    joinedAt: "2025-04-20",
    favoriteGenres: ["Thriller"],
    watchList: ["You", "Mindhunter"],
    birthDate: "2000-06-27"
  },
  {
    id: 18,
    username: "or",
    email: "or@gmail.com",
    fullName: "Or Azul",
    avatar: "https://i.pravatar.cc/150?img=18",
    joinedAt: "2025-01-19",
    favoriteGenres: ["Sci-Fi", "Adventure"],
    watchList: ["Avatar", "The Martian"],
    birthDate: "1996-11-15"
  },
  {
    id: 19,
    username: "lia",
    email: "lia@gmail.com",
    fullName: "Lia Dayan",
    avatar: "https://i.pravatar.cc/150?img=19",
    joinedAt: "2025-02-28",
    favoriteGenres: ["Animation"],
    watchList: ["Toy Story", "Inside Out"],
    birthDate: "2003-08-02"
  },
  {
    id: 20,
    username: "alon",
    email: "alon@gmail.com",
    fullName: "Alon Shaked",
    avatar: "https://i.pravatar.cc/150?img=20",
    joinedAt: "2025-05-11",
    favoriteGenres: ["Action", "Horror"],
    watchList: ["The Last of Us", "World War Z"],
    birthDate: "1995-12-19"
  }
];


module.exports = users;