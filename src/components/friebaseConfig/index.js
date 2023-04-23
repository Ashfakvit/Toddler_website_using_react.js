import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

function StartFriebase(){
  const firebaseconfig = {
    apiKey: "AIzaSyCQBD8AyHjWA6qKTFOKQTcqBnHjvce3Rm8",
    authDomain: "database-b13b0.firebaseapp.com",
    databaseURL: "https://database-b13b0-default-rtdb.firebaseio.com",
    projectId: "database-b13b0",
    storageBucket: "database-b13b0.appspot.com",
    messagingSenderId: "145091377820",
    appId: "1:145091377820:web:4b388c4537758192accb59"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseconfig)
  return getDatabase (app);
}
export default StartFriebase;