// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3fn-6pqVn_-c0aKFOqDMo6w5ohbDvVU0",
  authDomain: "divermv-ea717.firebaseapp.com",
  projectId: "divermv-ea717",
  storageBucket: "divermv-ea717.appspot.com",
  messagingSenderId: "240991715994",
  appId: "1:240991715994:web:d6cb2e568171a841055523",
};
// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth}