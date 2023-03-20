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
        address: "",
      },
      {
        companyName: "Sliders",
        rating: "3",
        safe: "not safe",
        experiencedHarassment: "Yes",
        frequency: "very often",
        witnessedHarassment: "Yes",
        reportedHarassment: "No",
        companySupport: "",
        address:"",
      },
      {
        companyName: "Secretaría de Administración y Finanzas",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "rarely",
        witnessedHarassment: "No",
        reportedHarassment: "No",
        companySupport: "",
        address:"Plaza de la Constitución 1"
      },
      {
        companyName: "CMF GAM",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "Yes",
        address:""
      },
      {
        companyName: "Starbucks",
        rating: "",
        safe: "",
        experiencedHarassment: "",
        frequency: "",
        witnessedHarassment: "",
        reportedHarassment: "",
        companySupport: "",
        address:"Sucursales Centro Histórico"
      },
      {
        companyName: "Hospital Español",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "Yes",
        address:"Av. Ejército Nacional Mexicano 613, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "BBVA",
        rating: "4",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "",
        address:"Av. Cuauhtémoc 44, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "Banorte",
        rating: "4",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "",
        address:" Calz. de Tlalpan 2980, Coapa, Ex-Hacienda Coapa, Coyoacán, 04980 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "Rhenus ",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "",
        address:"Torre Mítikah. Cto Interior Avenida Río Churubusco 601, Xoco, Benito Juárez, 03330 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "Hospital General de Mexico",
        rating: "2",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "often",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "No",
        address:"Dr. Balmis 148, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "Escuela moderna americana",
        rating: "3",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "No",
        address:"Cda. Cerro del Hombre 18, Romero de Terreros, Coyoacán, 04310 Ciudad de México, CDMX, Mexico"
      },
      {
        companyName: "Aeroméxico",
        rating: "3",
        safe: "moderately safe",
        experiencedHarassment: "No",
        frequency: "rarely",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "Yes",
        address:""
      },
      {
        companyName: "Pipiol Camp",
        rating: "5",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "",
        address:""
      },
      {
        companyName: "Indice",
        rating: "5",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "No",
        reportedHarassment: "",
        companySupport: "",
        address:"Ibsen 82, Polanco Reforma, Miguel Hidalgo, 11550, Ciudad de México, México."
      },
      {
        companyName: "Millesime",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "Yes",
        frequency: "rarely",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "No",
        address:""
      },
      {
        companyName: "Alsea",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "No",
        address:""
      },
      {
        companyName: "AGVM: Asociación de Golf del Valle de México",
        rating: "3",
        safe: "moderately safe",
        experiencedHarassment: "Yes",
        frequency: "often",
        witnessedHarassment: "Yes",
        reportedHarassment: "Yes",
        companySupport: "No",
        address:""
      },
      {
        companyName: "Svetia",
        rating: "5",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "",
        reportedHarassment: "",
        companySupport: "",
        address:""
      },
      {
        companyName: "Instituto Mexicano del Petróleo",
        rating: "4",
        safe: "super safe",
        experiencedHarassment: "Yes",
        frequency: "often",
        witnessedHarassment: "No",
        reportedHarassment: "No",
        companySupport: "",
        address:"Eje Central Lázaro Cárdenas no 152, San Bartolo Atepehuacan"
      },
      {
        companyName: "Instituto Mexicano del Petróleo",
        rating: "4",
        safe: "moderately safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "No",
        reportedHarassment: "No",
        companySupport: "",
        address:"Eje Central Lázaro Cárdenas no 152, San Bartolo Atepehuacan"
      },
      {
        companyName: "deep_dive",
        rating: "5",
        safe: "super safe",
        experiencedHarassment: "No",
        frequency: "",
        witnessedHarassment: "No",
        reportedHarassment: "No",
        companySupport: "",
        address:""
      }
];


