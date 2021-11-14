// 1. Pick 3 Points on Google Maps and store them in a colleciton
// 2. Pick a point and find the nearest points within a min and max distance
// 3. Pick an area and see which points (that are stored in your collecion) it contains
// 4. Store at least one in a different collection
// 5. Pick a point and find out which areas in your colleciton contain that point

// 1.
use placesData

db.places.insertOne({
  name: 'Beergarden',
  loc: {
    type: 'Point',
    coordinates: [
      11.59228,
      48.15203
    ]
  }
})

db.places.insertOne({
  name: 'Oktoberfest',
  loc: {
    type: 'Point',
    coordinates: [
      11.54965,
      48.13203
    ]
  }
})

db.places.insertOne({
  name: 'Some Place',
  loc: {
    type: 'Point',
    coordinates: [
      11.56934,
      48.15105
    ]
  }
})

// 2.
const myLocation = [11.59475, 48.14235]

db.places.createIndex({loc: '2dsphere'})

db.places.find({
  loc: {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: myLocation
      }
    }
  }
})

[
  {
    _id: ObjectId("61916c5e15a8b4d8521da640"),
    name: 'Beergarden',
    loc: { type: 'Point', coordinates: [ 11.59228, 48.15203 ] }
  },
  {
    _id: ObjectId("61916cb815a8b4d8521da642"),
    name: 'Some Place',
    loc: { type: 'Point', coordinates: [ 11.56934, 48.15105 ] }
  },
  {
    _id: ObjectId("61916cb415a8b4d8521da641"),
    name: 'Oktoberfest',
    loc: { type: 'Point', coordinates: [ 11.54965, 48.13203 ] }
  }
]

db.places.find({
  loc: {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: myLocation
      },
      $minDistance: 100,
      $maxDistance: 2000
    }
  }
})

[
  {
    _id: ObjectId("61916c5e15a8b4d8521da640"),
    name: 'Beergarden',
    loc: { type: 'Point', coordinates: [ 11.59228, 48.15203 ] }
  }
]

// 3.
const p1 = [11.6097, 48.14522]
const p2 = [11.57142, 48.15416]
const p3 = [11.6, 48.15954]
const polygonArea = [[p1, p2, p3, p1]]
const polygonObject = {
  type: 'Polygon',
  coordinates: polygonArea
}

db.places.find({
  loc: {
    $geoWithin: {
      $geometry: polygonObject
    }
  }
})

[
  {
    _id: ObjectId("61916c5e15a8b4d8521da640"),
    name: 'Beergarden',
    loc: { type: 'Point', coordinates: [ 11.59228, 48.15203 ] }
  }
]

// 4.
db.areas.insertOne({
  name: 'New Area',
  area: polygonObject
})

// 5.
db.areas.find({
  area: {
    $geoIntersects: {
      $geometry: {
        type: 'Point',
        coordinates: [
          11.59228, 
          48.15203
        ]
      }
    }
  }
})

db.areas.createIndex({
  area: '2dsphere'
})

[
  {
    _id: ObjectId("61916eb215a8b4d8521da643"),
    name: 'New Area',
    area: {
      type: 'Polygon',
      coordinates: [
        [
          [ 11.6097, 48.14522 ],
          [ 11.57142, 48.15416 ],
          [ 11.6, 48.15954 ],
          [ 11.6097, 48.14522 ]
        ]
      ]
    }
  }
]

db.areas.find({
  area: {
    $geoIntersects: {
      $geometry: {
        type: 'Point',
        coordinates: [
          11.61779, 
          48.15122
        ]
      }
    }
  }
})