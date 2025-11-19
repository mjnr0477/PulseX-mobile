import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDAXKeo4zb53v-LNmoZGJOagUcGtNlO3Cw",
  authDomain: "pulse-f5547.firebaseapp.com",
  projectId: "pulse-f5547",
  storageBucket: "pulse-f5547.firebasestorage.app",
  messagingSenderId: "748217789233",
  appId: "1:748217789233:web:6533331ac425d9af129e10",
  measurementId: "G-W6MMHH1XDJ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
