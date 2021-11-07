use flights

show dbs

db.flightData.insertOne({
  "departureAirport": "MUC",
  "arrivalAirport": "SFO",
  "aircraft": "Airbus A380",
  "distance": 12000,
  "intercontinental": true
})

db.flightData.find()
db.flightData.find().pretty()

db.flightData.insertOne({
  "departureAirport": "LHR",
  "arrivalAirport": "TXL",
  "aircraft": "Airbus A320",
  "distance": 950,
  "intercontinental": false
})

db.flightData.insertOne({ departureAirport: 'TXL', arrivalAirport: 'LHR' });

db.flightData.insertOne({
  _id: 'txl-lhr-1',
  departureAirport: 'TXL',
  arrivalAirport: 'LHR',
});
