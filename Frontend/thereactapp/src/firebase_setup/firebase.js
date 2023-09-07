// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7JNNk9IXopdvtPQX6tCq3kj6DRqSxB2c",
    authDomain: "arfc-9f12c.firebaseapp.com",
    projectId: "arfc-9f12c",
    storageBucket: "arfc-9f12c.appspot.com",
    messagingSenderId: "506092018351",
    appId: "1:506092018351:web:70228072843d2db46e125a",
    measurementId: "G-QEQKCKHPCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);