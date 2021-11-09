// 1. Insert multiple companies (company data of your choice) into ca collection - both with insertOne() and insertMany()
// 2. Deliberately insert duplicate ID data and "fix tailing additions with unordered inserts"
// 3. Write data for a new company with both journaling being guaranteed and not being guaranteed

// 1.
use companyData

db.company.insertOne({
  _id: "google",
  name: "Google"
})

db.company.insertMany([
  {
    _id: "facebook",
    name: "Facebook"
  },
  {
    _id: "microsoft",
    name: "Microsoft"
  }
])

// 2.
db.company.insertMany([
  {
    _id: "microsoft",
    name: "Microsoft"
  },
  {
    _id: "netflix",
    name: "Netflix"
  }
],
{
  ordered: false
})

// 3.
db.company.insertOne(
  {
    _id: "udemy",
    name: "Udemy"
  },
  {
    writeConcern: {
      w: 1,
      j: true
  }
})

db.company.insertOne(
  {
    _id: "spotify",
    name: "Spotify"
  },
  {
    writeConcern: {
      w: 0,
      j: false
  }
})