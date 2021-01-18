import { ReactSVG } from 'react-svg';
import Card from './components/Card';

function App() {
  const getState = (e) => {
    if (e.target.id !== 'svg' && e.target.id !== '') {
      console.log(e.target.attributes['data-name'].value);
    }
  };

  return (
    <div className="hiddenPopper">
      <p>Hello!</p>
      <ReactSVG onClick={getState} src="/images/us.svg" />
      <Card />
    </div>
  );
}

export default App;
