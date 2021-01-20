import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sideMenu">
      <div>
        Find the states below by clicking on them and choosing them from within
        the list that appears.
      </div>
      <ul className="hiddenStates">
        <li>Delaware</li>
        <li>Utah</li>
        <li>Michigan</li>
      </ul>
    </div>
  );
};

export default Sidebar;
