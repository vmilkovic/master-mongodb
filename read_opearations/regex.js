db.shows.find({
  summary: {
    $regex: /musical/,
  },
});
