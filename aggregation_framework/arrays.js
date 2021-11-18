db.friends.insertMany([
  {
    name: 'Max',
    hobbies: ['Sports', 'Cooking'],
    age: 29,
    examScores: [
      { difficulty: 4, score: 57.9 },
      { difficulty: 6, score: 62.1 },
      { difficulty: 3, score: 88.5 },
    ],
  },
  {
    name: 'Manu',
    hobbies: ['Eating', 'Data Analytics'],
    age: 30,
    examScores: [
      { difficulty: 7, score: 52.1 },
      { difficulty: 2, score: 74.3 },
      { difficulty: 5, score: 53.1 },
    ],
  },
  {
    name: 'Maria',
    hobbies: ['Cooking', 'Skiing'],
    age: 29,
    examScores: [
      { difficulty: 3, score: 75.1 },
      { difficulty: 8, score: 44.2 },
      { difficulty: 6, score: 61.5 },
    ],
  },
]);

db.friends.aggregate([
  {
    $unwind: '$hobbies',
  },
  {
    $group: {
      _id: {
        age: '$age',
      },
      allHobbies: {
        $addToSet: '$hobbies',
      },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      examScore: {
        // $slice: ['$examScores', 1],
        // $slice: ['$examScores', -2],
        $slice: ['$examScores', 2, 1],
      },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      numScores: {
        $size: '$examScores',
      },
    },
  },
]);

db.friends.aggregate([
  {
    $project: {
      _id: 0,
      examScores: {
        $filter: {
          input: '$examScores',
          as: 'sc',
          cond: {
            $gt: ['$$sc.score', 60],
          },
        },
      },
    },
  },
]);

db.friends.aggregate([
  {
    $unwind: '$examScores',
  },
  {
    $project: {
      _id: 1,
      name: 1,
      age: 1,
      score: '$examScores.score',
    },
  },
  {
    $sort: {
      score: -1,
    },
  },
  {
    $group: {
      _id: '$_id',
      name: {
        $first: '$name',
      },
      maxScore: {
        $max: '$score',
      },
    },
  },
  {
    $sort: {
      maxScore: -1,
    },
  },
]);
