// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDHPa5yomuJ9MfrIljX1Hmw0X2K-_0dtQc",
	authDomain: "sakec-nosql-46351.firebaseapp.com",
	databaseURL: "https://sakec-nosql-46351-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "sakec-nosql-46351",
	storageBucket: "sakec-nosql-46351.appspot.com",
	messagingSenderId: "689703641796",
	appId: "1:689703641796:web:688962492f2cc8e6999f91",
	measurementId: "G-PXCRKGVT65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize databaseReference instance
var databaseRef = firebase.database().ref();