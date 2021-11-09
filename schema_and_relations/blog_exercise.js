use blog

db.users.insertMany([
  {
    name: "Vedran Milkovic",
    age: 29,
    email: "email@test.com"
  },
  {
    name: "Milkovic Vedran ",
    age: 23,
    email: "email@test.com"
  }
])

db.users.find({})

[
  {
    _id: ObjectId("618979f894a1e48798714366"),
    name: 'Vedran Milkovic',
    age: 29,
    email: 'email@test.com'
  },
  {
    _id: ObjectId("618979f894a1e48798714367"),
    name: 'Milkovic Vedran ',
    age: 23,
    email: 'email@test.com'
  }
]


db.posts.insertOne({
    title: "My first Post!",
    text: "This is my first post, I hope you like it!",
    tag: ["new", "tech"],
    creator: ObjectId("618979f894a1e48798714366"),
    comments: [
      {
        text: "I like this post!",
        author: ObjectId("618979f894a1e48798714367")
      }
    ]
})

db.posts.findOne()

[
  {
    _id: ObjectId("61897a7b94a1e48798714368"),
    title: 'My first Post!',
    text: 'This is my first post, I hope you like it!',
    tag: [ 'new', 'tech' ],
    creator: ObjectId("618979f894a1e48798714366"),
    comments: [
      {
        text: 'I like this post!',
        author: ObjectId("618979f894a1e48798714367")
      }
    ]
  }
]
