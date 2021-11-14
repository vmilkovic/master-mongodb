db.users.deleteOne({
  name: 'Chris',
});

db.users.deleteMany({
  isSporty: true,
  totalAge: {
    $exists: false,
  },
});
