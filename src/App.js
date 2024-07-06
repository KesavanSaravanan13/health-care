import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Siderbar';
import MainColumn from './Components/Column/MainColumn/MainColumn';

function App() {
  return (
    <div className='row m-0 p-0 vh-100 flex-nowrap'>
      <div className='col-1 w-auto m-0 p-0 vh-100 sideb'>
        <Sidebar />
      </div>
      <div className='col-11 w-auto m-0 p-0 flex-fill overflow-auto'>
        <MainColumn/>
      </div>
    </div>
  );
}

export default App;
