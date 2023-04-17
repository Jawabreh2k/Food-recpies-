import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCmZ6vVa8Dx41K1xt5H1o43r1UIWoZC4E",
  authDomain: "meals-1ee5b.firebaseapp.com",
  projectId: "meals-1ee5b",
  storageBucket: "meals-1ee5b.appspot.com",
  messagingSenderId: "461055095474",
  appId: "1:461055095474:web:1f9086bbb2aa763b1b8fab",
  measurementId: "G-Z1MTK4YSBN",
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
