db.persons.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      birthdate: {
        $toDate: '$dob.date',
      },
      age: '$dob.age',
      location: {
        type: 'Point',
        coordinates: [
          {
            $convert: {
              input: '$location.coordinates.longitude',
              to: 'decimal',
              onError: 0.0,
              onNull: 0.0,
            },
          },
          {
            $convert: {
              input: '$location.coordinates.latitude',
              to: 'decimal',
              onError: 0.0,
              onNull: 0.0,
            },
          },
        ],
      },
    },
  },
  {
    $project: {
      _id: 0,
      gender: 1,
      email: 1,
      location: 1,
      birthdate: 1,
      age: 1,
      fullName: {
        $concat: [
          {
            $toUpper: {
              $substrCP: ['$name.first', 0, 1],
            },
          },
          {
            $substrCP: [
              '$name.first',
              1,
              {
                $subtract: [
                  {
                    $strLenCP: '$name.first',
                  },
                  1,
                ],
              },
            ],
          },
          ' ',
          {
            $toUpper: {
              $substrCP: ['$name.last', 0, 1],
            },
          },
          {
            $substrCP: [
              '$name.last',
              1,
              {
                $subtract: [
                  {
                    $strLenCP: '$name.last',
                  },
                  1,
                ],
              },
            ],
          },
        ],
      },
    },
  },
  // {
  //   $group: {
  //     _id: {
  //       birthYear: {
  //         $isoWeekYear: '$birthdate',
  //       },
  //     },
  //     numPersons: {
  //       $sum: 1,
  //     },
  //   },
  // },
  {
    $sort: {
      numPersons: -1,
    },
  },
  {
    $out: 'transformedPersons',
  },
]);

db.transformedPersons.find();

db.transformedPersons.createIndex({
  location: '2dsphere',
});

db.transformedPersons.aggregate([
  {
    $geoNear: {
      near: {
        type: 'Point',
        coordinates: [-18.4, 42.8],
      },
      maxDistance: 1000000,
      query: {
        age: {
          $gt: 30,
        },
      },
      distanceField: 'distance',
    },
  },
]);
