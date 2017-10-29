const createRouter = require('./create-route');

module.exports = createRouter({
  maxItems: 10,
  key: 'authors',
  schema: {
    name: String,
  }
});
