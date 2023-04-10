
import './App.css';
import RightMenu from './components/RightMenu';
import MainContainer from './components/MainContainer';
import LeftMenu from './components/LeftMenu';

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
