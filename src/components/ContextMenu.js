import './ContextMenu.css';

const ContextMenu = (props) => {
  const listStates = props.states.map((state) => (
    <button key={state}>{state}</button>
  ));
  if (props.className === 'contextMenuShow') {
  }
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
