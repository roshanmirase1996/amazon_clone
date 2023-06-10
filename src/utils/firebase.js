import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSjiPJ0_PisHsk88NKST3f-HpxcgyLJxA",
  authDomain: "clone-981b7.firebaseapp.com",
  projectId: "clone-981b7",
  storageBucket: "clone-981b7.appspot.com",
  messagingSenderId: "183544659675",
  appId: "1:183544659675:web:fa152fbd174458aa6dd6fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
