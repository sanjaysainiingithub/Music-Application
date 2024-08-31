// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAExw_6olqSzKcPn55l9x6Q6jszy1MzT14",
  authDomain: "mobile-app-93b2b.firebaseapp.com",
  projectId: "mobile-app-93b2b",
  storageBucket: "mobile-app-93b2b.appspot.com",
  messagingSenderId: "319010334637",
  appId: "1:319010334637:web:30c39595bdaaa162e12324",
  measurementId: "G-EMHC721VVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);