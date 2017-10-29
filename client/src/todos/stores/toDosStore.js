// import { Store, HttpTransporter, Schema } from 'harmonized';
//
// const toDosStore = new Store({
//   schema: new Schema({
//     task: String,
//     completed: String,
//     assignee: Number // todo add authors
//   }),
//   transporter: new HttpTransporter({
//     baseUrl: '/api',
//     path: 'todos'
//   })
//   // clientStorage: new LocalStorage({
//   //   // TODO: add options here when LocalStorage is implemented
//   // }),
// });
const toDosStore = {
  items: [{ name: 'hans' }]
};

export default toDosStore;
