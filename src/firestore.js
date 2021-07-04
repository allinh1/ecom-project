import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBr2R3i3C59vNZ5P9f6xsvqxbDkIcoYTqs",
    authDomain: "my-react-project-220ad.firebaseapp.com",
    projectId: "my-react-project-220ad",
    storageBucket: "my-react-project-220ad.appspot.com",
    messagingSenderId: "687255531181",
    appId: "1:687255531181:web:8e65115d6d6fbdc08c2024"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();