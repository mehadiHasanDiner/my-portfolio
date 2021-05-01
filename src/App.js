import './App.scss'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
      <Navbar></Navbar>
      </div>
      <div className="main-content"></div>
    </div>
  );
}

export default App;
