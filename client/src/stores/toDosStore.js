import { Store, HttpTransporter, Schema, customTypes } from 'harmonized';
import authorsStore from './authorsStore'

const todosStore = new Store({
  schema: new Schema({
    properties : {
      task: String,
      completed: String,
      author: {
        type: customTypes.NumberKey,
        key: 'authorId',
        _key: '_authorId',
        ref: authorsStore,
      }
    }
  }),
  transporter: new HttpTransporter({
    baseUrl: '/api',
    path: 'todos',
  })
  // clientStorage: new LocalStorage({
  //   // TODO: add options here when LocalStorage is implemented
  // }),
});

export default todosStore;
