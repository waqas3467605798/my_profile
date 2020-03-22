import firebase from 'firebase';

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyDLwOzMsUPopHWc4MvReEmrGyDS-hk50Eo",
  authDomain: "dbpractic.firebaseapp.com",
  databaseURL: "https://dbpractic.firebaseio.com",
  projectId: "dbpractic",
  storageBucket: "dbpractic.appspot.com",
  messagingSenderId: "646137494194",
  appId: "1:646137494194:web:7965273c83a24e506227ab",
  measurementId: "G-DR2KG8P9N9"
};
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

// var db = firebase.firestore();

// export {db};

export default fire;