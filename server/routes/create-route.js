const { Router } = require('express');
const ServerError = require('../server-error');
const db = require('../memory-db');
const uuid = require('uuid/v4');

const TYPE_ID = { type: 'id' };

function createRoute(options) {
  const router = Router();
  
  router.get('/', (req, res, next) => res.json(req.user[options.key]))
  router.get('/:id', (req, res, next) => {
    const entry = req.user[options.key].find(element => element.id === req.params.id);
    if(entry) {
      return res.json(entry);
    }
    next(new ServerError.NotFound());
  });
  
  router.delete('/:id', (req, res, next) => {
    req.user[options.key].splice(req.user[options.key].indexOf(req.params.id), 1);
    db.put(req.user.id, req.user);
    res.status(204).end()
  })
  
  router.put('/:id', (req, res, next) => {
    const entry = req.user[options.key].find(element => element.id === req.params.id);
    if(entry) {
      Object.keys(options.schema).forEach(key => entry[key] = req.body[key])
      db.put(req.user.id, req.user);
      return res.json(entry);
    }
    next(new ServerError.NotFound());
  })
  
  router.post('/', (req, res, next) => {
    if(req.user[options.key].length >= options.maxItems){
      return new ServerError(`you can't have more than ${options.maxItems} items of this type`, 401);
    }
    const entry = {
      id: uuid()
    };
    console.log(req.body);
    Object.keys(options.schema).forEach(key => entry[key] = req.body[key]) // TODO validate references to other routes
    req.user[options.key].push(entry);
    db.put(req.user.id, req.user);
    res.json(entry);
  })
  
  function seeder(references){
    return []; // todo create content
  }
  
  return { router, seeder };
}

createRoute.Id = TYPE_ID;

module.exports = createRoute ;
