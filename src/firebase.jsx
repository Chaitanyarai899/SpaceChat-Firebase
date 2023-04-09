import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcTCs5pEdib4ChQMx91Daf8jGnDNlFYis",
  authDomain: "fir-chatapp-b24a2.firebaseapp.com",
  projectId: "fir-chatapp-b24a2",
  storageBucket: "fir-chatapp-b24a2.appspot.com",
  messagingSenderId: "882063350044",
  appId: "1:882063350044:web:989a013c8e2d48258ac2d9",
  measurementId: "G-KC6P12SN6Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);