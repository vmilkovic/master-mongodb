use hospital

db.patients.insertOne({
  name: "Veky", age: 29, 
  diseaseSummary: "summary-vm-1"
})

db.diseaseSummaries.insertOne({
  _id: "summary-vm-1", 
  diseases: ["cold", "covid"]
})

var dsid = db.patients.findOne({name: "Veky"}).diseaseSummary
db.diseaseSummaries.findOne({_id: dsid})


db.patients.deleteMany({})

db.patients.insertOne({ 
  name: "Veky", 
  age: 29, 
  diseaseSummary: { 
    diseases: ["cold", "covid"]
  } 
})

db.patients.findOne({name: "Veky"}).diseaseSummary

db.persons.insertOne({
  name: "Vedran", 
  car: {
    model: "BMW",
     price: 40000
    }
  })
db.persons.deleteMany({})

db.persons.insertOne({
  name: "Vedran",
  age: 31,
  salary: 3000
})

db.cars.insertOne({
  model: "BMW", 
  price: 4000, 
  owner:  ObjectId("61896e4594a1e48798714357")
})