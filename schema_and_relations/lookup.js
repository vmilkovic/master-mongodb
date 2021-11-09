db.books.aggregate([
  {
    $lookup: {
      from: 'authors',
      localField: 'authors',
      foreignField: '_id',
      as: 'creators',
    },
  },
]);

[
  {
    _id: ObjectId('6189761e94a1e48798714365'),
    name: 'My favorite Book',
    authors: [
      ObjectId('6189758694a1e48798714363'),
      ObjectId('6189758694a1e48798714364'),
    ],
    creators: [
      {
        _id: ObjectId('6189758694a1e48798714363'),
        name: 'Ved Milk',
        age: 31,
        address: { street: 'Main' },
      },
      {
        _id: ObjectId('6189758694a1e48798714364'),
        name: 'Vedran Mk',
        age: 30,
        address: { street: 'Tree' },
      },
    ],
  },
];
