import './CorrectIncorrectPopup.css';

const CorrectIncorrect = (props) => {
  let results;
  switch (props.className) {
    case 'correctPopup':
      results = <div className={props.className}>Correct!</div>;
      break;
    case 'incorrectPopup':
      results = <div className={props.className}>Incorrect!</div>;
      break;
    default:
      results = <div className={props.className}></div>;
  }
  return <div>{results}</div>;
};

export default CorrectIncorrect;
