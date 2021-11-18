mongoimport persons.json -d analytics -c persons --jsonArray

use analytics

db.persons.aggregate([
  {
    $match: {
      gender: 'female'
    }
  },
  {
    $group: {
      _id: {
        state: '$location.state'
      },
      totalPersons: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalPersons: -1
    }
  }
])