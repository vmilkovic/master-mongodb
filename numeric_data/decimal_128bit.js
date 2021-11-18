db.science.insertOne({
  a: NumberDecimal('0.3'),
  b: NumberDecimal('0.1'),
});

db.science.find();

[
  {
    _id: ObjectId('6196b2060b5c1041b26e884d'),
    a: Decimal128('0.3'),
    b: Decimal128('0.1'),
  },
];

db.science.aggregate([
  {
    $project: {
      result: {
        $subtract: ['$a', '$b'],
      },
    },
  },
]);

[
  {
    _id: ObjectId('6196b2060b5c1041b26e884d'),
    result: Decimal128('0.2'),
  },
];

db.science.updateOne(
  {},
  {
    $inc: {
      a: 0.1,
    },
  }
);

db.science.find();

[
  {
    _id: ObjectId('6196b2060b5c1041b26e884d'),
    a: Decimal128('0.400000000000000'),
    b: Decimal128('0.1'),
  },
];

db.science.updateOne(
  {},
  {
    $inc: {
      a: NumberDecimal(0.1),
    },
  }
);

[
  {
    _id: ObjectId('6196b2060b5c1041b26e884d'),
    a: Decimal128('0.500000000000000'),
    b: Decimal128('0.1'),
  },
];
