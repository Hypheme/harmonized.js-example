import { Store, HttpTransporter, Schema, customTypes } from 'harmonized';

HttpTransporter.addOfflineChecker({
  pattern: /.*/, 
  checkUrl: 'localhost:5000/api/todos',
});

const toDosStore = new Store({
  schema: new Schema({
    // id: {
    //   type: customTypes.Key,
    //   key: 'id',
    //   _key: '_id',
    //   primary: true,
    // },
    properties : {
      task: String,
      completed: String,
      assignee: Number // todo add authors
    }
  }),
  transporter: new HttpTransporter({
    baseUrl: 'localhost:5000/api',
    path: 'todos',
  })
  // clientStorage: new LocalStorage({
  //   // TODO: add options here when LocalStorage is implemented
  // }),
});
// const toDosStore = {
//   items: [{ name: 'hans' }]
// };

export default toDosStore;
