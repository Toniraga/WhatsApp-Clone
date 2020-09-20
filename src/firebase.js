import * as firebase from "firebase/app";
import 'firebase/database'; // If using Firebase database
import "firebase/auth"; 
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBBgJytA30tPKi1S7WpFx2Dg4rGHu7ngJo",
	authDomain: "whats-app-5b6cc.firebaseapp.com",
	databaseURL: "https://whats-app-5b6cc.firebaseio.com",
	projectId: "whats-app-5b6cc",
	storageBucket: "whats-app-5b6cc.appspot.com",
	messagingSenderId: "970903979248",
	appId: "1:970903979248:web:68e20f8f89a5fb728d6e35",
	measurementId: "G-BY8YMY579B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }

export default db;