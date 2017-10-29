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
      Object.assign(entry, validateItemData(req.body));
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
    Object.assign(entry, validateItemData(req.body));
    req.user[options.key].push(entry);
    db.put(req.user.id, req.user);
    res.json(entry);
  })
  
  function validateItemData(data) {
    return Object.keys(options.schema)
      .reduce((result, key) => {
        switch (options.schema[key]) {
          // TODO check references
          default:
          result[key] = data[key];    
        }
        return result;
      }, {})      
  }
  
  function seeder(references){
    return options.seeder(references).map(items => Object.assign({id: uuid()}, items));
  }
  
  return { router, seeder };
}

createRoute.Id = TYPE_ID;

module.exports = createRoute ;
