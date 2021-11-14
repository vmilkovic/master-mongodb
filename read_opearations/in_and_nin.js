// In - find all in array
db.shows.find({
  runtime: { $in: [30, 42] },
});

// Nin - find all not in array
db.shows.find({
  runtime: { $nin: [30, 42] },
});
