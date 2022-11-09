import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { GoogleAuthProvider} from "@firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhVn-ovvzuJ4vbbhBbMCBVUeUw1Gk64Bo",
  authDomain: "codekat1.firebaseapp.com",
  projectId: "codekat1",
  storageBucket: "codekat1.appspot.com",
  messagingSenderId: "1001558415334",
  appId: "1:1001558415334:web:96e55e3056d141824a6827",
  measurementId: "G-M799FZH52B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db}

