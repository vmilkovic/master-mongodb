// User doesn't exist so we inset it with upsert (update & insert)
db.users.updateOne(
  {
    name: 'Maria',
  },
  {
    $set: {
      age: 29,
      hobbies: [
        {
          title: 'Good food',
          frequency: 3,
        },
      ],
      isSporty: true,
    },
  },
  {
    upsert: true,
  }
);

[
  {
    _id: ObjectId('6190f1129fe5df6ffdb02fa5'),
    name: 'Maria',
    age: 29,
    hobbies: [{ title: 'Good food', frequency: 3 }],
    isSporty: true,
  },
];
