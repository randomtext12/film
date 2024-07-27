import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDC0YgrDIocjN3MqtPu2y3Qahx2gEFntlo",
  authDomain: "randomtextfilm.firebaseapp.com",
  projectId: "randomtextfilm",
  storageBucket: "randomtextfilm.appspot.com",
  messagingSenderId: "710923572600",
  appId: "1:710923572600:web:0d8a7576c15dbf4e63248d",
  measurementId: "G-G4MHXSMYVK",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
