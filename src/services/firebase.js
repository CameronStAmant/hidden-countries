import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7dTLx7JubwcrLJcnpZYLLVsYWTU3NR-c',
  authDomain: 'hidden-countries-ae982.firebaseapp.com',
  databaseURL: 'https://hidden-countries-ae982-default-rtdb.firebaseio.com',
  projectId: 'hidden-countries-ae982',
  storageBucket: 'hidden-countries-ae982.appspot.com',
  messagingSenderId: '930926072773',
  appId: '1:930926072773:web:3999af046c3d65045071ac',
  measurementId: 'G-JZRC1JVJZZ',
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
