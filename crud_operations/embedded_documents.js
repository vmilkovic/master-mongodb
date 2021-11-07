db.flightData.updateMany(
  {},
  { $set: { status: { description: 'on-time', lastUpdated: '1 hour ago' } } }
);

[
  {
    _id: ObjectId('61880a4b94a1e48798714307'),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: { description: 'on-time', lastUpdated: '1 hour ago' },
  },
  {
    _id: ObjectId('61880a4b94a1e48798714308'),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: { description: 'on-time', lastUpdated: '1 hour ago' },
  },
];

db.flightData.updateMany(
  {},
  {
    $set: {
      status: {
        description: 'on-time',
        lastUpdated: '1 hour ago',
        details: {
          responsible: 'VM',
        },
      },
    },
  }
);

[
  {
    _id: ObjectId('61880a4b94a1e48798714307'),
    departureAirport: 'MUC',
    arrivalAirport: 'SFO',
    aircraft: 'Airbus A380',
    distance: 12000,
    intercontinental: true,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'VM' },
    },
  },
  {
    _id: ObjectId('61880a4b94a1e48798714308'),
    departureAirport: 'LHR',
    arrivalAirport: 'TXL',
    aircraft: 'Airbus A320',
    distance: 950,
    intercontinental: false,
    status: {
      description: 'on-time',
      lastUpdated: '1 hour ago',
      details: { responsible: 'VM' },
    },
  },
];
