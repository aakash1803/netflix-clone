import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9ASMY2XO3dcipJj7D4hCjYyHdDqwYfrE",
  authDomain: "netflix-clone-12d0d.firebaseapp.com",
  projectId: "netflix-clone-12d0d",
  storageBucket: "netflix-clone-12d0d.appspot.com",
  messagingSenderId: "1061754196417",
  appId: "1:1061754196417:web:1a024a50be52666155df40",
  measurementId: "G-KEVJQJW2MX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
