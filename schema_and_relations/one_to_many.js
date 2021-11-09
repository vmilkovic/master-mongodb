db support

db.questionThreads.insertOne({
  creator: "Max",
  questions: "How does that all work?",
  answers: ["q1a1", "a1a2"]
})

db.questionThreads.findOne()

db.answers.insertMany([{
  _id: "q1a1",
  text: "It works like that."
},
{
  _id: "q1a2",
  text: "Thanks!"
}])

db.answers.find()

db.questionThreads.deleteMany({})
db.questionThreads.insertOne({
  creator: "Max",
  questions: "How does that all work?",
  answers: [
    {
      text: "Link that."
    }, 
    {
      text: "Thanks"
    }]
})

use cityData

db.cities.insertOne({
  name: "New York City",
  coordinates: {
    lat: 21,
    lng: 55
  }
})
db.cities.find()

db.citizens.insertMany([
  { 
    name: "Vedran Milkovic",
    cityId: ObjectId("6189710394a1e4879871435b")
  },
  { 
    name: "Milkovic Vedran",
    cityId: ObjectId("6189710394a1e4879871435b")
  }
])
db.citizens.find()