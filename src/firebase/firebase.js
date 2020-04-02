import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1JlRWdErM-H0-XY3AbsfiJgYYwEepLrU",
    authDomain: "hyprlink-f461d.firebaseapp.com",
    databaseURL: "https://hyprlink-f461d.firebaseio.com",
    projectId: "hyprlink-f461d",
    storageBucket: "hyprlink-f461d.appspot.com",
    messagingSenderId: "333297777039",
    appId: "1:333297777039:web:5484a563515ab5d3e873fa",
    measurementId: "G-HR6GS3WCHN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;