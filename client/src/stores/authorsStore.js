import { Store, HttpTransporter, Schema, customTypes } from 'harmonized';

const authorsStore = new Store({
  schema: new Schema({
    properties : {
      name: String,
    }
  }),
  transporter: new HttpTransporter({
    baseUrl: '/api',
    path: 'authors',
  })
  // clientStorage: new LocalStorage({
  //   // TODO: add options here when LocalStorage is implemented
  // }),
});
// const toDosStore = {
//   items: [{ name: 'hans' }]
// };

export default authorsStore;
