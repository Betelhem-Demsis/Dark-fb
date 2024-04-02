import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fb-clone-ad75f.firebaseapp.com",
  projectId: "fb-clone-ad75f",
  storageBucket: "fb-clone-ad75f.appspot.com",
  messagingSenderId: "612384712151",
  appId: "1:612384712151:web:0f77f8f5b26ccac55d9792",
  measurementId: "G-H9QG3WBRK8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
