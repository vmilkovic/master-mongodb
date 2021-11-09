use companyData

db.companies.insertOne({
  name: "Fresh Apples Inc",
  isStartup: true,
  employees: 33,
  funding: 123456789987456123,
  details: {
    ceo: "Mark Super",
  },
  tags: [
    {
      title: "super"
    },
    {
      title: "perfect"
    }
  ],
  foundingDate: new Date(), 
  insertedAt: new Timestamp()
})

db.numbers.insertOne({a: 1})
db.numbers.findOne()
db.stats()

db.companies.drop()

db.stats()
[
  {
    db: 'companyData',
    collections: 1,
    views: 0,
    objects: 1,
    avgObjSize: 29,
    dataSize: 29,
    storageSize: 20480,
    freeStorageSize: 0,
    indexes: 1,
    indexSize: 20480,
    indexFreeStorageSize: 0,
    totalSize: 40960,
    totalFreeStorageSize: 0,
    scaleFactor: 1,
    fsUsedSize: 206776881152,
    fsTotalSize: 239470698496,
    ok: 1
  }
]

db.numbers.insertOne({a: NumberInt(1)})
db.numbers.drop()

// Smaller size with NumberInt function
db.stats()
[
  {
    db: 'companyData',
    collections: 1,
    views: 0,
    objects: 1,
    avgObjSize: 29,
    dataSize: 29,
    storageSize: 4096,
    freeStorageSize: 0,
    indexes: 1,
    indexSize: 4096,
    indexFreeStorageSize: 0,
    totalSize: 8192,
    totalFreeStorageSize: 0,
    scaleFactor: 1,
    fsUsedSize: 206802718720,
    fsTotalSize: 239470698496,
    ok: 1
  }
]

typeof db.numbers.findOne().a
