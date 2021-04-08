import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBeNhY8aN_C4JvGHBBmWGl9TdLdfoiI7gc",
//   authDomain: "signal-clone-by-jb.firebaseapp.com",
//   projectId: "signal-clone-by-jb",
//   storageBucket: "signal-clone-by-jb.appspot.com",
//   messagingSenderId: "589796626300",
//   appId: "1:589796626300:web:70e37415e7fb76083f9ef9",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCXjIue6XtV2ZacH9dDAi5yDUgryWFuWuc",
  authDomain: "signalapp-clone-by-jb.firebaseapp.com",
  projectId: "signalapp-clone-by-jb",
  storageBucket: "signalapp-clone-by-jb.appspot.com",
  messagingSenderId: "1046871489730",
  appId: "1:1046871489730:web:f32774313a99a7c8e14f5b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
