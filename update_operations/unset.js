db.users.updateMany(
  {
    isSporty: true,
  },
  {
    $unset: {
      phone: '',
    },
  }
);
