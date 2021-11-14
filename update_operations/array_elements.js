db.users.updateMany(
  {
    hobbies: {
      $elemMatch: {
        title: 'Sports',
        frequency: {
          $gte: 3,
        },
      },
    },
  },
  {
    $set: {
      'hobbies.$.highFrequency': true,
    },
  }
);

[
  {
    _id: ObjectId('6190e41a98447eace0bbc42b'),
    name: 'Chris',
    hobbies: [
      { title: 'Sports', frequency: 5, highFrequency: true },
      { title: 'Cooking', frequency: 3 },
      { title: 'Hiking', frequency: 1 },
    ],
    isSporty: true,
    totalAge: 41.800000000000004,
  },
];

// Updates only the first object in array
db.users.updateMany(
  {
    'hobbies.frequency': {
      $gt: 2,
    },
  },
  {
    $set: {
      'hobbies.$.goodFrequency': true,
    },
  }
);

// $[] - update all array elements
db.users.updateMany(
  {
    totalAge: {
      $gt: 30,
    },
  },
  {
    $inc: {
      'hobbies.$[].frequency': -1,
    },
  }
);

// Find and update specific fields
db.users.updateMany(
  {
    'hobbies.frequency': {
      $gt: 2,
    },
  },
  {
    $set: {
      'hobbies.$[el].goodFrequency': true,
    },
  },
  {
    arrayFilters: [
      {
        'el.frequency': {
          $gt: 3,
        },
      },
    ],
  }
);

// Add elements to arrays
db.users.updateOne(
  {
    name: 'Maria',
  },
  {
    $push: {
      hobbies: {
        title: 'Sports',
        frequency: 3,
      },
    },
  }
);

db.users.updateOne(
  {
    name: 'Maria',
  },
  {
    $push: {
      hobbies: {
        $each: [
          {
            title: 'Good Wine',
            frequency: 1,
          },
          {
            title: 'Hiking',
            frequency: 2,
          },
        ],
        $sort: {
          frequency: -1,
        },
      },
    },
  }
);

[
  {
    _id: ObjectId('6190f1129fe5df6ffdb02fa5'),
    name: 'Maria',
    age: 29,
    hobbies: [
      { title: 'Sports', frequency: 3 },
      { title: 'Good food', frequency: 3, goodFrequency: true },
      { title: 'Hiking', frequency: 2 },
      { title: 'Good Wine', frequency: 1 },
    ],
    isSporty: true,
  },
];

// Remove elements from array
db.users.updateOne(
  {
    name: 'Maria',
  },
  {
    $pull: {
      hobbies: {
        title: 'Sports',
      },
    },
  }
);

[
  {
    _id: ObjectId('6190f1129fe5df6ffdb02fa5'),
    name: 'Maria',
    age: 29,
    hobbies: [
      { title: 'Good food', frequency: 3, goodFrequency: true },
      { title: 'Hiking', frequency: 2 },
      { title: 'Good Wine', frequency: 1 },
    ],
    isSporty: true,
  },
];

// Remove last element
db.users.updateOne(
  {
    name: 'Chris',
  },
  {
    $pop: {
      hobbies: 1,
    },
  }
);

// $addToSet - adds unique values only (not like push)
db.users.updateOne(
  {
    name: 'Maria',
  },
  {
    $addToSet: {
      hobbies: {
        title: 'Sports',
        frequency: 2,
      },
    },
  }
);
