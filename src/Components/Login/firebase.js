// import firebase from "firebase";
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6KXzmh42Zw6LusSXBtEZXeaqZwa4DqPk",
  authDomain: "quack-spoon-1626.firebaseapp.com",
  projectId: "quack-spoon-1626",
  storageBucket: "quack-spoon-1626.appspot.com",
  messagingSenderId: "176018256025",
  appId: "1:176018256025:web:8231439ea2cf875c3a0808",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
