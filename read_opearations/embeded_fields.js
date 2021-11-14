db.shows.find({
  'rating.average': { $gte: 7 },
});

// Contains
db.shows.find({
  genres: 'Drama',
});

// Array with only drama - equal
db.shows.find({
  genres: ['Drama'],
});
