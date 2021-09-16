import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIk0-nUgg6_rxYXbwr4NIb-sVo1IvOcIE',
  authDomain: 'music-26cbb.firebaseapp.com',
  projectId: 'music-26cbb',
  storageBucket: 'music-26cbb.appspot.com',
  messagingSenderId: '79121696353',
  appId: '1:79121696353:web:834136367b2f4852f70c20',
};

export default firebase.initializeApp(firebaseConfig);
