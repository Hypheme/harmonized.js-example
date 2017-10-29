const createRouter = require('./create-route');

module.exports = createRouter({
  maxItems: 20,
  key: 'todos',
  schema: {
    task: String,
    completed: Boolean,
    authorId: {
      type: createRouter.Id,
      ref: 'authors'
    }
  },
  seeder({ authors }) {
    return [
      {
        task: 'Maintain Harmonized',
        completed: false,
        authorId: authors[1],
      }, {
        task: 'Documentate Harmonized',
        completed: false,
        authorId: authors[0],
      }, {
        task: 'Release Harmonized',
        completed: false,
        authorId: authors[1],
      }
    ]
  }
});
