// Create
insertOne(data, options);
insertMany(data, options);

// Read
find(filter, options);
findOne(filter, options);

// Update
updateOne(filter, data, options);
updateMany(filter, data, options);

// Delete
deleteOne(filter, options);
deleteMany(filter, options);

// Delete database/collection
db.flightData.deleteOne({ _id: 'txl-lhr-1', departureAirport: 'TXL' });
db.flightData.deleteMany({});

// Insert many
db.flightData.insertMany([
  {
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
  },
  {
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
  },
]);

// Finding data
db.flightData.find({
  intercontinental: true,
});

// Greater then
db.flightData.find({ distance: { $gt: 1000 } });

// First matching greater then
db.flightData.findOne({ distance: { $gt: 900 } });

// Update and update many
db.flightData.updateOne(
  {
    _id: ObjectId('61880a4b94a1e48798714307'),
  },
  { $set: { delayed: true } }
);

// Error
db.flightData.updateMany(
  {
    _id: ObjectId('61880a4b94a1e48798714307'),
  },
  { delayed: true }
);

// Overwrote it
db.flightData.update({
  _id: ObjectId('61880a4b94a1e48798714307'),
  delayed: true,
});

// Replace one
db.flightData.replaceOne(
  { _id: ObjectId('61880a4b94a1e48798714307') },
  {
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
  }
);
