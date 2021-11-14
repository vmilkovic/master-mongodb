mongoimport tv-shows.json -d movieData -c movies --jsonArray --drop

db.shows.findOne({})

[
  {
    _id: ObjectId('618ac58c91b9259bd1fe9b7b'),
    id: 5,
    url: 'http://www.tvmaze.com/shows/5/true-detective',
    name: 'True Detective',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'Running',
    runtime: 60,
    premiered: '2014-01-12',
    officialSite: 'http://www.hbo.com/true-detective',
    schedule: { time: '21:00', days: ['Sunday'] },
    rating: { average: 8.3 },
    weight: 99,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
    },
    webChannel: null,
    externals: { tvrage: 31369, thetvdb: 270633, imdb: 'tt2356777' },
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/0/61.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/0/61.jpg',
    },
    summary:
      '<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p>',
    updated: 1536053668,
    _links: {
      self: { href: 'http://api.tvmaze.com/shows/5' },
      previousepisode: { href: 'http://api.tvmaze.com/episodes/182325' },
      nextepisode: { href: 'http://api.tvmaze.com/episodes/1519992' },
    },
  }
];

db.shows.find().pretty()

db.shows.find({
  name: "The Last Ship"
})