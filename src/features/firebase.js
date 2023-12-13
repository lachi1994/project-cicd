import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhv23sqAvoXgKS9s1qqWYuyvoB2W2axLA",
    authDomain: "snapchat-clone-yt-8677e.firebaseapp.com",
    projectId: "snapchat-clone-yt-8677e",
    storageBucket: "snapchat-clone-yt-8677e.appspot.com",
    messagingSenderId: "621083648042",
    appId: "1:621083648042:web:709c0c5efd13b65028e353"
  };

  const firebaseApp = firebase.intializeApp(firebaseconfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.googleAuthProvider();
  
  export {db, auth, storage, provider};