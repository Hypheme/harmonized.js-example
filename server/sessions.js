const { router } = require('express');
const db = require('./memory-db');
const config = require('./config');
const cookie = require('cookie');

const uuid = require('uuid/v4');
const authorSeeder = require('./routes/authors').seeder;
const todoSeeder = require('./routes/todos').seeder;

function authenticateRoot(req, res, next) {
  if(!req.cookies.id || !db.get(req.cookies.id)) {
    createNewSession(req.cookies.id)
      .then(user => {
        req.user = user;
        res.setHeader('Set-Cookie', cookie.serialize('id', user.id, {
          maxAge: config.SESSION_LIFETIME_IN_SECONDS, 
          path: '/'
        }));
        console.log('creating new session', user.id);
        next();
      })
      .catch(next)
  } else {
    console.log('getting data for session', req.cookies.id);
    req.user = db.get(req.cookies.id);
    next();
  }
}

function authenticate(req, res, next) {
  if(!req.cookies.id || !db.get(req.cookies.id)) {
    res.status(401).end()
  } else {
    req.user = db.get(req.cookies.id);
    next()
  }
}

function createNewSession(id) {
  const user = { 
    id:  id || uuid(),
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
  authenticateRoot,
  authenticate,
  get
}
