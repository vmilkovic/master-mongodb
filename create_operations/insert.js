use contactData

db.persons.insertOne({
  name: "Vedran",
  age: 30,
  hobbies: ["Sports", "Cooking"]
})

db.persons.insertOne({
  name: "Chris",
  age: 31,
  hobbies: ["Cars", "Cooking"]
})

db.persons.insertMany([
  {
    name: "Vedran",
    age: 30,
    hobbies: ["Sports", "Cooking"]
  },
  {
    name: "Chris",
    age: 31,
    hobbies: ["Cars", "Cooking"]
  }
])

// Works for insertOne and insertMany but not recommended
db.persons.insert({})
db.persons.insert([{}, {}])


db.hobbies.insertMany([
  {
    _id: "sports",
    name: "Sports"
  },
  {
    _id: "cooking",
    name: "Cooking"
  },
  {
    _id: "cars",
    name: "Cars"
  }
])

// Error duplicate key error
db.hobbies.insertMany([
  {
    _id: "yoga",
    name: "Yoga"
  },
  {
    _id: "cooking",
    name: "Cooking"
  },
  {
    _id: "hiking",
    name: "Hiking"
  }
])

db.hobbies.insertMany([
  {
    _id: "yoga",
    name: "Yoga"
  },
  {
    _id: "cooking",
    name: "Cooking"
  },
  {
    _id: "hiking",
    name: "Hiking"
  }
], 
{
  ordered: false
})

/**
 * Write concern
 * w: 0 -> mongo server wont acknowledge insert
 * w: 1 -> mongo server will acknowledge insert
 * Journal j
 * Write timeout wtimeout
 */
db.persons.insertOne({
  name: "Alex",
  age: 41,
},
{
  writeConcern: {
    w: 0,
    j: true,
    wtimeout: 200
  }
})