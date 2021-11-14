db.shows.find(
  {},
  {
    name: 1,
    genres: 1,
    runtime: 1,
    rating: 1,
    'schedule.time': 1,
    _id: 0,
  }
);

db.shows.find(
  {
    genres: 'Drama',
  },
  {
    'genres.$': 1,
  }
);

db.shows.find(
  {
    genres: 'Drama',
  },
  {
    genres: {
      $elemMatch: {
        $eq: 'Horror',
      },
    },
  }
);

db.shows.find(
  {
    'rating.average': { $gt: 9 },
  },
  {
    genres: {
      $slice: 2,
    },
    name: 1,
  }
);

db.shows.find(
  {
    'rating.average': { $gt: 9 },
  },
  {
    genres: {
      $slice: [1, 2],
    },
    name: 1,
  }
);
