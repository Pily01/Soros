const firebase = require("firebase/app");
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6g9ImgadouwYN-x-HMFJzL41VPXQi-co",
    authDomain: "soros-web-app.firebaseapp.com",
    projectId: "soros-web-app",
    storageBucket: "soros-web-app.appspot.com",
    messagingSenderId: "688528671264",
    appId: "1:688528671264:web:ad67f5a96a5c322af5b245",
    measurementId: "G-5YQER5VY28"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const responses = [
    {
        companyName: "Teleperformance",
        rating: "3",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "",
        reportedHarassment: "No",
        companySupport: "No",

      },

];


