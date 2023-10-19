// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTnpcnuulfCvy8mD7wpLxPt_I5NPjWQL4",
    authDomain: "ecommerce-octabass.firebaseapp.com",
    projectId: "ecommerce-octabass",
    storageBucket: "ecommerce-octabass.appspot.com",
    messagingSenderId: "450512400415",
    appId: "1:450512400415:web:e5ea959b901ecdd539252a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app