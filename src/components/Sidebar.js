import './Sidebar.css';

const Sidebar = (props) => {
  const listStates = props.states.map((state) => <li key={state}>{state}</li>);
  return (
    <div className="sideMenu">
      <div>
        Find the states below by clicking on them and choosing them from within
        the list that appears.
      </div>
      <ul className="hiddenStates">{listStates}</ul>
    </div>
  );
};

export default Sidebar;
