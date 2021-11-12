import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-YYAyadJV9Q7k7wa3AhFqUw1YFI26AwE",
  authDomain: "sustainable-life-e0e54.firebaseapp.com",
  projectId: "sustainable-life-e0e54",
  storageBucket: "sustainable-life-e0e54.appspot.com",
  messagingSenderId: "747325759067",
  appId: "1:747325759067:web:d84c196be302b2f279e97e"
};


if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;