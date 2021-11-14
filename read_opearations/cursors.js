use showData

db.shows.find().count()

db.shows.find().next()

const dataCursor = db.shows.find()
dataCursor.next()

dataCursor.forEach(doc => {
  printjson(doc)
})

dataCursor.hasNext()

db.shows.find().sort({
  'ratings.average': 1,
  'runtime': -1
})

db.shows.find().sort({
    'ratings.average': 1,
    'runtime': -1
  }).skip(10)

db.shows.find().sort({
    'ratings.average': 1,
    'runtime': -1
  }).skip(10).limit(10)