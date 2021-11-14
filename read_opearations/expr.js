// use financialData

db.sales.insertMany([
  {
    volume: 100,
    target: 120,
  },
  {
    volume: 89,
    target: 80,
  },
  {
    volume: 200,
    target: 177,
  },
]);

db.sales
  .find({
    $expr: {
      $gt: ['$volume', '$target'],
    },
  })

[
  ({ _id: ObjectId('618fd42e10129e7543ff6fa4'), volume: 89, target: 80 },
  {
    _id: ObjectId('618fd42e10129e7543ff6fa5'),
    volume: 200,
    target: 177,
  }),
]


db.sales.find({
  $expr: {
    $gt: [
      {
        $cond: {
          if: {
            $gte: ['$volume', 190]
          },
          then: {
            $subtract: ['$volume', 10]
          },
          else: '$volume'
        }
      },
      '$target'
    ]
  }
})

[
  { _id: ObjectId("618fd42e10129e7543ff6fa4"), volume: 89, target: 80 },
  {
    _id: ObjectId("618fd42e10129e7543ff6fa5"),
    volume: 200,
    target: 177
  }
]