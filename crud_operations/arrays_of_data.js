db.passengers.updateOne(
  { name: 'Albert Twostone' },
  { $set: { hobbies: ['sports', 'cooking'] } }
);

[
  {
    _id: ObjectId('61881f7294a1e48798714346'),
    name: 'Albert Twostone',
    age: 68,
    hobbies: ['sports', 'cooking'],
  },
];
