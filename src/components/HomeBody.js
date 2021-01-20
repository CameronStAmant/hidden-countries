import './HomeBody.css';
import States from './States';
import Sidebar from './Sidebar';

const HomeBody = () => {
  return (
    <div className="mainContent">
      <States />
      <Sidebar />
    </div>
  );
};

export default HomeBody;
