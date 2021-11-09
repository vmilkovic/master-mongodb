use shop

db.products.insertOne({
  title: "A Book",
  price: 12.99
})

db.customer.insertOne({
  name: "Vedran",
  age: 31,
  orders: [
    {
      productId: ObjectId("6189738994a1e4879871435e"),
      quantity: 2
    }
  ]
})

use bookRegistry

db.authors.insertMany([
  {
    name: "Ved Milk",
    age: 31,
    address: {
      street: "Main"
    }
  },
  {
    name: "Vedran Mk",
    age: 30,
    address: {
      street: "Tree"
    }
  }
])

db.auhors.find()

db.books.insertOne({
  name: "My favorite Book",
  authors: [ 
    ObjectId("6189758694a1e48798714363"), 
    ObjectId("6189758694a1e48798714364")
  ]
})

db.books.find()
