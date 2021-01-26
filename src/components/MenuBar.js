import './MenuBar.css';

const menuBar = (props) => {
  return (
    <div className="menu">
      <div className="navItems">
        <div>Find That State!</div>
        <div>Score: {props.time}</div>
      </div>
    </div>
  );
};

export default menuBar;
