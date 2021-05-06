// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration

// ------Replace config data------
/* var firebaseConfig = {
	apiKey: "AIzaSyD4M55jU5yi5PVGa6SvZ2DzqgfMfxq6Yk0",
	authDomain: "sakec-nosql-3c1b5.firebaseapp.com",
	databaseURL: "https://sakec-nosql-3c1b5-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "sakec-nosql-3c1b5",
	storageBucket: "sakec-nosql-3c1b5.appspot.com",
	messagingSenderId: "1037962972462",
	appId: "1:1037962972462:web:de783c7bcd9757e1f3bebf"
}; */

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize databaseReference instance
var databaseRef = firebase.database().ref();