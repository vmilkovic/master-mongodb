use admin

db.createUser({
  user: 'vedran',
  pwd: 'vedran',
  roles: ['userAdminAnyDatabase']
})

db.auth('vedran', 'vedran')