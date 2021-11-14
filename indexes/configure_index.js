db.contacts.createIndex(
  {
    email: 1,
  },
  { unique: true }
);

db.contacts.explain('allPlansExecution').find({});
