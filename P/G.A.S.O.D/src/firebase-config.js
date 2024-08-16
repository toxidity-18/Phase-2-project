
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCocHUonP0u2sdn9I9GYvpfoBuWce94QnY",
  authDomain: "gatunganga-auto-spare.firebaseapp.com",
  projectId: "gatunganga-auto-spare",
  storageBucket: "gatunganga-auto-spare.appspot.com",
  messagingSenderId: "495276409030",
  appId: "1:495276409030:web:f22577ae0b4825f27557c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);