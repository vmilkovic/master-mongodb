// 1. Insert 3 patient data with at least 1 history entry per patient
// 2. Update patient data of 1 patient with a new age, name and history entry
// 3. Find all patients who are older than 30 (or a value of your choice)
// 4. Delete all patients who got a cold as a disease

// 1.
use hospital

db.patients.insertMany([
  {
    firstName: "Vedran",
    lastName: "Milkovic",
    age: 31,
    history: [
      {
        disease: "cold",
        treatment: 1
      }
    ]
  },
  {
    firstName: "Veky",
    lastName: "Milkovic",
    age: 33,
    history: [
      {
        disease: "hungry",
        treatment: 95
      }
    ]
  },
  {
    firstName: "Vedran",
    lastName: "Milky",
    age: 24,
    history: [
      {
        disease: "sad",
        treatment: 44
      }
    ]
  }
])

// 2.
db.patients.updateOne(
  {firstName: "Vedran"}, 
  {
    $set: {
      age: 30, 
      firstName: "Vedraan", 
      history: [
        {
          disease: "very sad",
          treatment: 61
        }
      ]
    }
})

// 3.
db.patients.find({age: {$gt: 30}})

// 4.
db.patients.deleteMany({"history.disease": "cold"})