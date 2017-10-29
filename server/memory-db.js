const { Cache } = require('memory-cache');
const SESSION_LIFETIME_IN_MS = require('./config').SESSION_LIFETIME_IN_SECONDS * 1000;
const cache = new Cache();

const db = {
  get(id) { return cache.get(id) },
  put(id, data) { return cache.put(id, data, SESSION_LIFETIME_IN_MS) }

}
module.exports = db;
