db.products.createIndex({
  description: 'text',
});

db.products.find({
  $text: {
    $serch: 'awesome',
  },
});

db.products.find(
  {
    $text: {
      $serch: 'awesome t-shirt',
    },
  },
  {
    score: {
      $meta: 'textScore',
    },
  }
);

db.products.createIndex(
  {
    title: 'text',
    description: 'text',
  },
  {
    default_language: 'english',
    weight: {
      title: 1,
      description: 10,
    },
  }
);
