import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcTCs5pEdib4ChQMx91Daf8jGnDNlFYis",
  authDomain: "fir-chatapp-b24a2.firebaseapp.com",
  projectId: "fir-chatapp-b24a2",
  storageBucket: "fir-chatapp-b24a2.appspot.com",
  messagingSenderId: "882063350044",
  appId: "1:882063350044:web:6a6889c74094ce6b8ac2d9",
  measurementId: "G-4W4T034BH1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);