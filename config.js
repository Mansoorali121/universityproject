import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9PuIdulE3b5VrnszXW3PFTqdaqRF9Ko8",
  authDomain: "sbbusba-c3c78.firebaseapp.com",
  projectId: "sbbusba-c3c78",
  storageBucket: "sbbusba-c3c78.appspot.com",
  messagingSenderId: "812505182770",
  appId: "1:812505182770:web:3892761781d1169a96422b"
};
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
export {firebase};