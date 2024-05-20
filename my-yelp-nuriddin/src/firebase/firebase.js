import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseFirebase = {
  apiKey: "AIzaSyDWsGFeWQkVn6PowXmMOgLHRs-wZhplZSM",
  authDomain: "nuriddin-yelp.firebaseapp.com",
  databaseURL: "https://nuriddin-yelp-default-rtdb.firebaseio.com",
  projectId: "nuriddin-yelp",
  storageBucket: "nuriddin-yelp.appspot.com",
  messagingSenderId: "592561032635",
  appId: "1:592561032635:web:6f357b581e96ac8993089e"
};


// Initialize Firebase
const app = initializeApp(firebaseFirebase );
export default app;

export const db = getFirestore(app);
