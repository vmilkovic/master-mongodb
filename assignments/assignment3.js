// 1. Import the attached data into a new database (e.g. boxOffice) and collection (e.g. movieStarts)
// 2. Search all movies that have a ration higher than 9.2 and a runtime lower than 100 minutes
// 3. Search all movies that have a genre of "drama" or "action"
// 4. Search all movies where visitors exeeded expectedVisitors

// 1.
mongoimport .\boxoffice.json -d boxOffice -c movieStarts --drop --jsonArray

use boxOffice

db.movieStarts.find()

// 2.
db.movieStarts.find({
  'meta.rating': {
    $gt: 9.2 
  }, 
  'meta.runtime': {
    $lt: 100
  }
})

// 3.
db.movieStarts.find({
  $or: [
    {genre: 'drama'}, 
    {gendre: 'action'}
  ]
})

// 4.
db.movieStarts.find({
  $expr: {
    $gt: ['$visitors', '$expectedVisitors']
  }
})