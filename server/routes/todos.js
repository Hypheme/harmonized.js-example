const createRouter = require('./create-route');

module.exports  = createRouter({
  maxItems: 20,
  key: 'todos',
  schema: {
    task: String,
    completed: String,
    authorId: { 
      type: createRouter.Id, 
      ref: 'authors'
    }
  }
});
