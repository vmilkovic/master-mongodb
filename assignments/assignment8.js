// Create 3 users, one database admin, one user admin and one developer

mongo --auth

use admin

db.createUser({
  user: 'vedran',
  pwd: 'vedran',
  roles: ['userAdminAnyDatabase']
})

db.auth('vedran', 'vedran')

db.createUser({
  user: 'globalAdmin',
  pwd: 'admin',
  roles: ['dbAdminAnyDatabase']
})

db.createUser({
  user: 'dev',
  pwd: 'dev',
  roles: [
    {
      role: 'readWrite',
      db: 'customers'
    },
    {
      role: 'readWrite',
      db: 'sales'
    }
  ]
})

mongo -u vedran -p vedran --authenticationDatabase admin

mongo -u globalAdmin -p admin --authenticationDatabase admin

mongo -u dev -p dev --authenticationDatabase customers

mongo -u dev -p dev --authenticationDatabase sales
