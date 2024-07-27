import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getMovieResults = async () => {
  const querySnapshot = await getDocs(collection(db, "movieResults"));
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() });
  });
  return results;
};
