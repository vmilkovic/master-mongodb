db.users.updateOne(
  {
    _id: ObjectId('6190e41a98447eace0bbc42b'),
  },
  {
    $set: {
      hobbies: [
        {
          title: 'Sports',
          frequency: 5,
        },
        {
          title: 'Cooking',
          frequency: 3,
        },
        {
          title: 'Hiking',
          frequency: 1,
        },
      ],
    },
  }
);

db.users.updateMany(
  {
    'hobbies.title': 'Sports',
  },
  {
    $set: {
      isSporty: true,
    },
  }
);

db.users.updateOne(
  {
    _id: ObjectId('6190e41a98447eace0bbc42b'),
  },
  {
    $set: {
      age: 40,
      phone: 13125925302,
    },
  }
);
