import Firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/storage';
import  'firebase/database';

export const firebaseApp = Firebase.initializeApp( {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_BASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID
});

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get() {
      return firebaseApp
    }
  })
}
