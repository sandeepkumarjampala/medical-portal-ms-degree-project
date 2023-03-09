import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

//STORED THE FIREBASE DETAILS IN .env.local FILE

const firebaseConfig = {
  apiKey: "AIzaSyBXhnhup3HR4k38mB6oKZDFNeYncqa2pfw",
  authDomain: "msdegreeproject.firebaseapp.com",
  projectId: "msdegreeproject",
  storageBucket: "msdegreeproject.appspot.com",
  messagingSenderId: "273443632930",
  appId: "1:273443632930:web:5f0d0466259708469bd77b",
  measurementId: "G-EK9VTM2BNZ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
