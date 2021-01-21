import './ContextMenu.css';
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

const ContextMenu = (props) => {
  const chosenState = (state) => {
    console.log(state);
    console.log(1);
    const results = firebase.database().ref();
    results.once('value', function (e) {
      let data = e.val();
      // for (let i in data) {
      console.log(data);
      // }
    });
  };

  const listStates = props.states.map((state) => (
    <button key={state} onClick={() => chosenState(state)}>
      {state}
    </button>
  ));
  return (
    <div
      className={props.className}
      style={{ left: props.style[0] + 15, top: props.style[1] + 15 }}
    >
      {listStates}
    </div>
  );
};

export default ContextMenu;
