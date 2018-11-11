import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBR7sgDA0kA5WXA6ZI1Br18v-hxdgDIbx4",
  authDomain: "destinyarmorperks.firebaseapp.com",
  databaseURL: "https://destinyarmorperks.firebaseio.com",
  projectId: "destinyarmorperks",
  storageBucket: "destinyarmorperks.appspot.com",
  messagingSenderId: "1072395347259"
}

firebase.initializeApp(config);
export default firebase;
