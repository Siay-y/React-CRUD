import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCriGcz3Ik5_EVe7QOmigWhQfXJTU1CHeA",
  authDomain: "estoque-crud.firebaseapp.com",
  projectId: "estoque-crud",
  storageBucket: "estoque-crud.firebasestorage.app",
  messagingSenderId: "518094426086",
  appId: "1:518094426086:web:a52dba360799171e309027",
  measurementId: "G-YN3293ECPE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };
