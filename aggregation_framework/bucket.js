db.persons.aggregate([
  {
    $bucket: {
      groupBy: '$dob.age',
      boundaries: [18, 30, 40, 50, 60, 70, 80, 120],
      output: {
        numPersons: {
          $sum: 1,
        },
        averageAge: {
          $avg: '$dob.age',
        },
      },
    },
  },
]);

db.persons.aggregate([
  {
    $bucketAuto: {
      groupBy: '$dob.age',
      buckets: 5,
      output: {
        numPersons: {
          $sum: 1,
        },
        averageAge: {
          $avg: '$dob.age',
        },
      },
    },
  },
]);
