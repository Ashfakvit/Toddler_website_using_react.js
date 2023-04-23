import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCzNzns35wANvKtGZNeEYUFlvNsc2jekQg",
  authDomain: "login-toddler.firebaseapp.com",
  projectId: "login-toddler",
  storageBucket: "login-toddler.appspot.com",
  messagingSenderId: "894487664800",
  appId: "1:894487664800:web:4184b8853967dc07edd1c5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
