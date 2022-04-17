// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdTH478KSoZs9eStXz8yMK6UUqzNv17RA",
    authDomain: "grievance-redressal-303b7.firebaseapp.com",
    databaseURL: "https://grievance-redressal-303b7-default-rtdb.firebaseio.com",
    projectId: "grievance-redressal-303b7",
    storageBucket: "grievance-redressal-303b7.appspot.com",
    messagingSenderId: "1014039469118",
    appId: "1:1014039469118:web:271e6c714b228cd293856f",
    measurementId: "G-YLQ1Z9JH54"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const database=firebaseApp.database();