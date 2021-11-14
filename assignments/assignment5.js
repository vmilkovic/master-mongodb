// 1. Create a new collection ("sports") and upsert two new documents into it (with those fields: "title", "requiresTeam")
// 2. Update all documents which do require a team by adding a new field with the minimum amount of players required
// 3. Update all documents that require a team by increasing the number of required players by 10

// 1.
db.sports.updateMany(
  {},
  {
    $set: {
      title: 'Football',
      requiresTeam: true,
    },
  },
  {
    upsert: true,
  }
);

// Will rewrite Football
db.sports.updateMany(
  {},
  {
    $set: {
      title: 'Runnning',
      requiresTeam: false,
    },
  },
  {
    upsert: true,
  }
);

db.sports.updateMany(
  { title: 'Soccer' },
  {
    $set: {
      requiresTeam: true,
    },
  },
  {
    upsert: true,
  }
);

// 2.
db.sports.updateMany(
  {
    requiresTeam: true,
  },
  {
    $set: {
      minPlayers: 11,
    },
  }
);

// 3.
db.sports.updateMany(
  {
    requiresTeam: true,
  },
  {
    $inc: { minPlayers: 10 },
  }
);
