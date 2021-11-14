db.users.find({
  age: {
    $exists: true,
  },
});

db.users.find({
  age: { $exists: true },
});

db.users.find({
  phone: {
    $type: 'double',
  },
});

db.users.find({
  phone: {
    $type: ['double', 'string'],
  },
});
