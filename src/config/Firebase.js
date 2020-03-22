import firebase from 'firebase';

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBlpkuddqlHUKN_LysE4jth1JfnAqeQ2EY",
  authDomain: "my-profile-20ec6.firebaseapp.com",
  databaseURL: "https://my-profile-20ec6.firebaseio.com",
  projectId: "my-profile-20ec6",
  storageBucket: "my-profile-20ec6.appspot.com",
  messagingSenderId: "844226980512",
  appId: "1:844226980512:web:6d7c7b7f3a65ae601ff7c5",
  measurementId: "G-B16HLBS58L"
};
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

// var db = firebase.firestore();

// export {db};

export default fire;