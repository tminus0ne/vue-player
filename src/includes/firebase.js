import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIk0-nUgg6_rxYXbwr4NIb-sVo1IvOcIE',
  authDomain: 'music-26cbb.firebaseapp.com',
  projectId: 'music-26cbb',
  storageBucket: 'music-26cbb.appspot.com',
  messagingSenderId: '79121696353',
  appId: '1:79121696353:web:834136367b2f4852f70c20',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
