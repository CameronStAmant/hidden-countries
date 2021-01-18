import { ReactSVG } from 'react-svg';

function App() {
  // window.addEventListener('mouseup', (e) => {
  //   console.log();
  //   const color = Math.round(Math.random() * 0xffffff);

  //   const fill = '#' + color.toString(16).padStart(6, '0');

  //   e.target.style.fill = fill;
  // });
  const getState = (e) => {
    if (e.target.id !== 'svg' && e.target.id !== '') {
      console.log(e.target.attributes['data-name'].value);
    }
  };

  return (
    <div>
      <p>Hello!</p>
      <ReactSVG onClick={getState} src="/images/us.svg" />
    </div>
  );
}

export default App;
