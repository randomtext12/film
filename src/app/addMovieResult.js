import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const addMovieResult = async (movieResult) => {
  try {
    const docRef = await addDoc(collection(db, "movieResults"), movieResult);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
