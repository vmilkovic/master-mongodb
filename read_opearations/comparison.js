// equal
db.shows.find({
  runtime: { $eq: 60 },
});

// not equal
db.shows.find({
  runtime: { $ne: 60 },
});

// lower then
db.shows.find({
  runtime: { $lt: 50 },
});

// lower then equal
db.shows.find({
  runtime: { $lte: 50 },
});

// greater then
db.shows.find({
  runtime: { $gt: 42 },
});

// greter then equal
db.shows.find({
  runtime: { $gte: 42 },
});
