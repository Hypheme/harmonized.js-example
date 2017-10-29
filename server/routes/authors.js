const createRouter = require('./create-route');

module.exports = createRouter({
  maxItems: 10,
  key: 'authors',
  schema: {
    name: String,
  }, 
  seeder(){
    return [
      { name: 'Simon Jentsch' },
      { name: 'Johannes Merz' },
    ]
  }
});
