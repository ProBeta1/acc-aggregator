import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmP2aWQNfFsQbeNDISFSHBTpN6rWgg1vo",
    authDomain: "aa-fiu.firebaseapp.com",
    databaseURL: "https://aa-fiu.firebaseio.com",
    projectId: "aa-fiu",
    storageBucket: "aa-fiu.appspot.com",
    messagingSenderId: "948096771547",
    appId: "1:948096771547:web:86208f07fbc3502242b3fe",
    measurementId: "G-2EG541DYL8"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };