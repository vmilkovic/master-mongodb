// 1. Import the attached data file into a new collection (e.g. exmoviestarts) in boxOffice database
// 2. Find all movies with exactly two genres
// 3. Find all movies which aired in 2018
// 4. FInd all movies which have ratings greater than 8 but lower than 10

// 1.
mongoimport boxoffice-extended.json -d boxOffice -c exmoviestarts --drop --jsonArray

// 2.
db.exmoviestarts.find({
  genre: {
    $size: 2
  }
})

// 3.
db.exmoviestarts.find({
  'meta.aired': 2018
})

// 4.
db.exmoviestarts.find({
  ratings: {
    $elemMatch: {
      $gt: 8,
      $lt: 10,
    }
  }
})