db.companies.insertOne({
  valuation: NumberInt('5000000000'),
});

db.companies.find();

[{ _id: ObjectId('6196ad640b5c1041b26e8847'), valuation: 705032704 }];

db.companies.insertOne({
  valuation: NumberInt('2147483647'),
});

db.companies.find();

[{ _id: ObjectId('6196add20b5c1041b26e8848'), valuation: 2147483647 }];

db.companies.insertOne({
  valuation: NumberInt('2147483648'),
});

db.companies.find();

[{ _id: ObjectId('6196ade80b5c1041b26e8849'), valuation: -2147483648 }];

db.companies.insertOne({
  valuation: 2147483648,
});

db.companies.find();

[{ _id: ObjectId('6196ae2a0b5c1041b26e884a'), valuation: 2147483648 }];

db.companies.insertOne({
  valuation: NumberLong('2147483648'),
});

[
  {
    _id: ObjectId('6196ae710b5c1041b26e884c'),
    valuation: Long('2147483648'),
  },
];
