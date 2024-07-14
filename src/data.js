
let data = [
  {
    id: 1,
    name: "Iron Man",
    poster: "https://th.bing.com/th/id/OIP.3GByvYL1xTT391g_RRpVNAHaLH?rs=1&pid=ImgDetMain",
    imdbRating: 7.9,
    plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    director: "Jon Favreau",
    actors: ["Robert Downey Jr.", " Gwyneth Paltrow", " Terrence Howard", " Jeff Bridges"],
    awards: ["Nominated for 2 Oscars", " Won 21 other awards & 65 nominations"],
    yearOfRelease: 2008,
    youtubeTrailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
    boxOfficeCollection: "$585.3 million"
  },
  {
    id: 2,
    name: "The Avengers",
    poster: "https://image.tmdb.org/t/p/original/mhc5CvIZBN08cytjaZMbncw4v5u.jpg",
    imdbRating: 8.0,
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    director: "Joss Whedon",
    actors: ["Robert Downey Jr.", " Chris Evans", " Scarlett Johansson", " Mark Ruffalo"],
    awards: ["Nominated for 1 Oscar", " Won 38 other awards & 79 nominations"],
    yearOfRelease: 2012,
    youtubeTrailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
    boxOfficeCollection: "$1.519 billion"
  },
  {
    id: 3,
    name: "Black Panther",
    poster: "https://th.bing.com/th/id/R.d7eeaca150a053adb14433b0ca257117?rik=YbnF9%2fQN6452mg&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f11%2fblack-panther-poster.jpg&ehk=X3mIKETm9eOvv8SmWICKqf1AIFrXH3annd6jZR1iVss%3d&risl=&pid=ImgRaw&r=0",
    imdbRating: 7.3,
    plot: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    director: "Ryan Coogler",
    actors: ["Chadwick Boseman", " Michael B. Jordan", " Lupita Nyong'o", " Danai Gurira"],
    awards: ["Won 3 Oscars", " Won 114 other awards & 269 nominations"],
    yearOfRelease: 2018,
    youtubeTrailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    boxOfficeCollection: "$1.346 billion"
  },
  {
    id: 4,
    name: "Doctor Strange",
    poster: "https://th.bing.com/th/id/OIP._pqq-mi-hmcXGS9FmzDtzQAAAA?rs=1&pid=ImgDetMain",
    imdbRating: 7.5,
    plot: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    director: "Scott Derrickson",
    actors: ["Benedict Cumberbatch", " Chiwetel Ejiofor", " Rachel McAdams", " Benedict Wong"],
    awards: ["Nominated for 1 Oscar", " Won 20 other awards & 65 nominations"],
    yearOfRelease: 2016,
    youtubeTrailer: "https://www.youtube.com/watch?v=HSzx-zryEgM",
    boxOfficeCollection: "$677.7 million"
  },
  {
    id: 5,
    name: "Captain Marvel",
    poster: "https://image.tmdb.org/t/p/original/bWtwxZW2lRsa9rr7xLgeqqBMofQ.jpg",
    imdbRating: 6.9,
    plot: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    director: ["Anna Boden", " Ryan Fleck"],
    actors: ["Brie Larson", " Samuel L. Jackson", " Ben Mendelsohn", " Jude Law"],
    awards: ["Nominated for 1 BAFTA", " Won 10 other awards & 54 nominations"],
    yearOfRelease: 2019,
    youtubeTrailer: "https://www.youtube.com/watch?v=Z1BCujX3pw8",
    boxOfficeCollection: "$1.128 billion"
  },
  {
    id: 6,
    name: "Thor: Ragnarok",
    poster: "https://th.bing.com/th/id/OIP.E2Tq0NoNc4hEc_Sh7J-4FQHaKK?rs=1&pid=ImgDetMain",
    imdbRating: 7.9,
    plot: "Thor must escape the alien planet Sakaar in time to save Asgard from Hela and the impending Ragnarök.",
    director: "Taika Waititi",
    actors: ["Chris Hemsworth", " Tom Hiddleston", " Cate Blanchett", " Mark Ruffalo"],
    awards: ["Won 1 Saturn Award", " Won 17 other awards & 49 nominations"],
    yearOfRelease: 2017,
    youtubeTrailer: "https://www.youtube.com/watch?v=ue80QwXMRHg",
    boxOfficeCollection: "$854 million"
  },
  {
    id: 7,
    name: "Spider-Man: Homecoming",
    poster: "https://image.tmdb.org/t/p/original/kY2c7wKgOfQjvbqe7yVzLTYkxJO.jpg",
    imdbRating: 7.4,
    plot: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
    director: "Jon Watts",
    actors: ["Tom Holland", " Michael Keaton", " Robert Downey Jr.", " Marisa Tomei"],
    awards: ["Nominated for 1 Saturn Award", " Won 7 other awards & 15 nominations"],
    yearOfRelease: 2017,
    youtubeTrailer: "https://www.youtube.com/watch?v=U0D3AOldjMU",
    boxOfficeCollection: "$880.2 million"
  },
  {
    id: 8,
    name: "Avengers: Endgame",
    poster: "https://preview.redd.it/1sdabp4nt2m21.jpg?auto=webp&s=1d3793ac4d16c6dfc457da2dc65cff869221cc80",
    imdbRating: 8.4,
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    director: ["Anthony Russo", " Joe Russo"],
    actors: ["Robert Downey Jr.", " Chris Evans", " Mark Ruffalo", " Chris Hemsworth"],
    awards: ["Nominated for 1 Oscar", " Won 69 other awards & 103 nominations"],
    yearOfRelease: 2019,
    youtubeTrailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    boxOfficeCollection: "$2.798 billion"
  },

  {
    id: 9,
    name: "Guardians of the Galaxy",
    poster: "https://th.bing.com/th/id/OIP.97nQCp-nuSwR8rCJkbvtKAHaKz?rs=1&pid=ImgDetMain",
    imdbRating: 8.0,
    plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    director: "James Gunn",
    actors: ["Chris Pratt", " Vin Diesel", " Bradley Cooper", " Zoe Saldana"],
    awards: ["Nominated for 2 Oscars", " Won 52 other awards & 101 nominations"],
    yearOfRelease: 2014,
    youtubeTrailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
    boxOfficeCollection: "$773.3 million"
  },
  {
    id: 10,
    name: "Ant-Man",
    poster: "https://www.themoviedb.org/t/p/original/j9DEVSoegRdFYY3EMiUPTwHzSR5.jpg",
    imdbRating: 7.3,
    plot: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    director: "Peyton Reed",
    "actors": ["Paul Rudd", " Michael Douglas", " Evangeline Lilly", " Corey Stoll"],
    "awards": ["Nominated for 1 BAFTA Film Award", " 2 wins & 33 nominations total"],
    "yearOfRelease": 2015,
    "youtubeTrailer": "https://www.youtube.com/watch?v=pWdKf3MneyI",
    "boxOfficeCollection": "$519.3 million"
  }
  
]


export default data