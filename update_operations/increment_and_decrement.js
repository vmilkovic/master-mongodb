db.users.updateOne(
  {
    name: 'Manuel',
  },
  {
    $inc: { age: 1 },
  }
);

db.users.updateOne(
  {
    name: 'Manuel',
  },
  {
    $inc: { age: 1 },
    $set: {
      isSporty: false,
    },
  }
);
