use shop

db.createUser({
  user: 'vedrandev',
  pwd: 'dev',
  roles: ['readWrite'],
});

db.logout()

db.auth('vedran', 'vedran')

use admin

use shop

db.updateUser('vedrandev', {
  roles: [
    'readWrite', {
      role: 'readWrite',
      db: 'blog'
    }
  ]
})

db.getUser('vedrandev')

db.logout()

use shop

db.auth('vedrandev', 'dev')

use blog

db.blog.insertOne({
  title: 'This works!'
})
