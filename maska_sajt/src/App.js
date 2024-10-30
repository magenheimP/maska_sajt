import './App.css';
import VerticalScroller from './VerticalScroller';
import HorizontalScroller from './HorizontalScroller';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App flex flex-col max-h-screen">
      <NavBar />
      <div className="block md:hidden">
        <VerticalScroller />
      </div>
      <div className="hidden md:block">
        <HorizontalScroller />
      </div>
    </div>
  );
}

export default App;
