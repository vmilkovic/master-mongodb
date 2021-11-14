db.users.insertOne({
  name: 'Chris',
  hobbies: ['Sports', 'Cooking', 'Hiking'],
});

db.users.find({
  hobbies: {
    $size: 3,
  },
});

db.movieStarts.find({
  genre: {
    $all: ['action', 'thriller'],
  },
});

db.users.find({
  hobbies: {
    $elemMatch: {
      title: 'Sports',
      frequency: {
        $gte: 3,
      },
    },
  },
});
