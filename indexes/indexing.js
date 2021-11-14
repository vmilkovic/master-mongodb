mongoimport persons.json -d contactData -c contacts --drop --jsonArray

use contactData

db.contacts.find({
  'dob.age': {
    $gt: 60
  }
})

db.contacts.explain().find({
  'dob.age': {
    $gt: 60
  }
})

[
  {
    queryPlanner: {
    namespace: 'contactData.contacts',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 60 } },
    queryHash: 'FC9E47D2',
    planCacheKey: 'A5FF588D',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'COLLSCAN',
      filter: { 'dob.age': { '$gt': 60 } },
      direction: 'forward'
    },
    rejectedPlans: []
  }
]

db.contacts.explain('executionStats').find({
  'dob.age': {
    $gt: 60
  }
})

[
  {
    executionStats: {
      executionSuccess: true,
      nReturned: 0,
      executionTimeMillis: 0,
      totalKeysExamined: 0,
      totalDocsExamined: 0,
      executionStages: {
        stage: 'EOF',
        nReturned: 0,
        executionTimeMillisEstimate: 0,
        works: 1,
        advanced: 0,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1
      }
    },
  }
]


db.contacts.createIndex({
  'dob.age': -1
})

db.contacts.createIndex({
  'dob.age': 1
})

db.contacts.dropIndex({
  'dob.age': 1
})

db.contacts.getIndexes()

[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { 'dob.age': -1 }, name: 'dob.age_-1' }
]