db.users.updateMany(
  {},
  {
    $rename: {
      age: 'totalAge',
    },
  }
);
