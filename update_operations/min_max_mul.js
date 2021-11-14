// Updates the age
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $min: {
      age: 35,
    },
  }
);

// Won't change age of 35
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $min: {
      age: 38,
    },
  }
);

// Won't change age of 35
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $max: {
      age: 35,
    },
  }
);

// Updates the age
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $max: {
      age: 38,
    },
  }
);

// Age multiply 38*1.1 = 41.800000000000004
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $mul: {
      age: 1.1,
    },
  }
);
