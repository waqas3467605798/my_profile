import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


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
  // const fire = 
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  // firebase.analytics();
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// const db = firebase.firestore();

// Create a storage reference from our storage service
var storageRef = storage.ref();

export {db, storage, storageRef}

export default firebase;