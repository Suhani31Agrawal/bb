import * as firebase from 'firebase';

require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDikYvZUCE0_ZBsjDSZ8X6K3niLj7fOqRc",
  authDomain: "barter-7ba9a.firebaseapp.com",
  projectId: "barter-7ba9a",
  storageBucket: "barter-7ba9a.appspot.com",
  messagingSenderId: "908396215903",
  appId: "1:908396215903:web:8fc1e7a4817670e613e5ea"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();