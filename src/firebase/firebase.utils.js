import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    
        apiKey: "AIzaSyACt7ky4QYhLfn6Jg3Tm_uzMyzZ53cXjLE",
        authDomain: "kozeattire-db.firebaseapp.com",
        projectId: "kozeattire-db",
        storageBucket: "kozeattire-db.appspot.com",
        messagingSenderId: "679635896933",
        appId: "1:679635896933:web:8cbc955da26579ef48948c",
        measurementId: "G-6H0XKSPMGX"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      //firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
