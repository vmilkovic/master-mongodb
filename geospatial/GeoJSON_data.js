use awesomplaces

db.places.insertOne({
  name: 'California Academy of Sciences',
  location: {
    type: 'Point',
    coordinates: [
      -122.4724356,
      37.7672544
    ]
  }
})

db.places.find()

[
  {
    _id: ObjectId("619160ea15a8b4d8521da63a"),
    name: 'California Academy of Sciences',
    location: { type: 'Point', coordinates: [ -122.4724356, 37.7672544 ] }
  }
]

db.places.createIndex({
  location: '2dsphere'
})

db.places.find({
  location: {
    $near: {
      $geometry: {
        type: 'Point',
        coordinates: [
          -122.471114,
          37.771104
        ]
      },
      $maxDistance: 500,
      $minDistance: 10
    }
  }
})

db.places.insertOne({
  name: 'Conservatory of Flowers',
  location: {
    type: 'Point',
    coordinates: [
      -122.46636, 
      37.77014 
    ]
  }
})

db.places.insertOne({
  name: 'Golden Gate Park Tennis Courts',
  location: {
    type: 'Point',
    coordinates: [
      -122.4593702,
      37.7705046
    ]
  }
})


db.places.insertOne({
  name: 'Nopa',
  location: {
    type: 'Point',
    coordinates: [
      -122.4389058,
      37.7747415
    ]
  }
})

const p1 = [-122.4547, 37.77473]
const p2 = [-122.45303, 37.76641]
const p3 = [-122.51026, 37.76411]
const p4 = [-122.51088, 37.77131]

db.places.find({
  location: {
    $geoWithin: {
      $geometry: {
        type: 'Polygon',
        coordinates: [
          [
            p1, p2, p3, p4, p1
          ]
        ]
      }
    }
  }
})

[
  {
    _id: ObjectId("619162f615a8b4d8521da63b"),
    name: 'Conservatory of Flowers',
    location: { type: 'Point', coordinates: [ -122.4615748, 37.7701756 ] }
  },
  {
    _id: ObjectId("6191635115a8b4d8521da63c"),
    name: 'Golden Gate Park Tennis Courts',
    location: { type: 'Point', coordinates: [ -122.4593702, 37.7705046 ] }
  },
  {
    _id: ObjectId("619160ea15a8b4d8521da63a"),
    name: 'California Academy of Sciences',
    location: { type: 'Point', coordinates: [ -122.46636, 37.77014 ] }
  }
]

db.areas.insertOne({
  name: 'Golden Gate Park',
  area: {
    type: 'Polygon',
    coordinates: [
      [
        p1, p2, p3, p4, p1
      ]
    ]
  }
})

db.areas.createIndex({
  area: '2dsphere'
})

db.areas.find({ area: {
  $geoIntersects: {
    $geometry: {
      type: 'Point',
      coordinates: [
          -122.49089,
          37.76992
        ]
      }
    }
  }
})

[
  {
    _id: ObjectId("619167b715a8b4d8521da63e"),
    name: 'Golden Gate Park',
    area: {
      type: 'Polygon',
      coordinates: [
        [
          [ -122.4547, 37.77473 ],
          [ -122.45303, 37.76641 ],
          [ -122.51026, 37.76411 ],
          [ -122.51088, 37.77131 ],
          [ -122.4547, 37.77473 ]
        ]
      ]
    }
  }
]

db.places.find({
  location: {
    $geoWithin: {
      $centerSphere: [
        [-122.46203, 37.77286], 
        1 / 6378.1
      ]
    }
  }
})