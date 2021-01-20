import './HomeBody.css';
import States from './States';
import Sidebar from './Sidebar';

const HomeBody = () => {
  const states = ['Delaware', 'Utah', 'Michigan'];
  return (
    <div className="mainContent">
      <States states={states} />
      <Sidebar states={states} />
    </div>
  );
};

export default HomeBody;
