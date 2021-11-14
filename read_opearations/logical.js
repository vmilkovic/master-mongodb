// Or
db.shows.find({
  $or: [
    {
      'rating.average': {
        $lt: 5,
      },
    },
    {
      'rating.average': {
        $gt: 9.3,
      },
    },
  ],
});

// Neatehr nor
db.shows.find({
  $nor: [
    {
      'rating.average': {
        $lt: 5,
      },
    },
    {
      'rating.average': {
        $gt: 9.3,
      },
    },
  ],
});

// And - default concatination
db.shows.find({
  $and: [
    {
      'rating.average': {
        $gt: 9,
      },
    },
    {
      ganres: 'Drama',
    },
  ],
});

db.shows.find({ 'rating.average': { $gt: 9 }, genres: 'Drama' });

// Not
db.shows
  .find({
    runtime: {
      $not: 60,
    },
  })
  .count();
