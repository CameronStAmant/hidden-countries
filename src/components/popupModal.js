import './popupModal.css';
import { db } from '../services/firebase';

const finishModal = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const leaderboard = db.ref().child('Leaderboard');
    let data;
    leaderboard.once('value', (snapshot) => {
      data = snapshot.val();
      leaderboard.child(`${data.length}`).update({
        name: event.target.name.value,
        score: props.time,
      });
    });
    props.updateLeaderboard();
    props.hideFinish();
  };

  const handleChange = (event) => {};

  return (
    <div className={props.className}>
      <div>Your score was {props.time}. Add your name to the leaderboards!</div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(event) => handleChange(event)}
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default finishModal;
