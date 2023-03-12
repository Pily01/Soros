import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6g9ImgadouwYN-x-HMFJzL41VPXQi-co",
    authDomain: "soros-web-app.firebaseapp.com",
    projectId: "soros-web-app",
    storageBucket: "soros-web-app.appspot.com",
    messagingSenderId: "688528671264",
    appId: "1:688528671264:web:ad67f5a96a5c322af5b245",
    measurementId: "G-5YQER5VY28"
  };

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);