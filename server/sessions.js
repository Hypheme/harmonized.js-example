const { router } = require('express');
const db = require('./memory-db');
const config = require('./config');
const cookie = require('cookie');

const uuid = require('uuid/v4');
const authorSeeder = require('./routes/authors').seeder;
const todoSeeder = require('./routes/todos').seeder;

function authenticate(req, res, next) {
  if(!req.cookies.id || !db.get(req.cookies.id)) {
    createNewSession()
      .then(user => {
        req.user = user;
        res.setHeader('Set-Cookie', cookie.serialize('id', user.id, {
          maxAge: config.SESSION_LIFETIME_IN_SECONDS
        }));
        next();
      })
      .catch(next)
  } else {
    req.user = db.get(req.cookies.id);
    next();
  }
}

function createNewSession() {
  const user = { 
    id:  uuid(),
    authors: authorSeeder(),
  };
  user.todos = todoSeeder({ authors: user.authors.map(author => author.id) })
  if(db.get(user.id)) {
    return new Promise(resolve => setTimeout(resolve, 1)).then(createNewSession);
  }
  db.put(user.id, user)
  return Promise.resolve(user)
}

function get(req, res, next) {
  res.json(db.get(req.user.id))
}

module.exports = {
  authenticate,
  get
}
