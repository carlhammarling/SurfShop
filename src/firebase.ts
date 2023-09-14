import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyBVQTrWINAT6Csgku06tELsTbkQmLuK_ZE",
    authDomain: "big-waves.firebaseapp.com",
    projectId: "big-waves",
    storageBucket: "big-waves.appspot.com",
    messagingSenderId: "251370278879",
    appId: "1:251370278879:web:3d70c543c07f3134357e6a",
    measurementId: "G-BRBTGR2PQY"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)