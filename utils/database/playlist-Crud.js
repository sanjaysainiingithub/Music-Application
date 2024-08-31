import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 

import { db } from "../firebase-configuration.js";
export const addInPlayList=async(song)=>{
  const docRef = await addDoc(collection(db, "playlists"), song);
  console.log("Document written with ID: ", docRef);
}