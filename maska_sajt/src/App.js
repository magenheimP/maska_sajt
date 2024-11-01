import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Scroller from './Components/Scroller';

function App() {
  const horizontalImages = [
    "./horizontal/DSC_4127.jpg",
    "./horizontal/2_horizontal_low_rez.jpg"
  ];

  const verticalImages = [
    "./vertical/1_vertical_low_res.jpg",
    "./vertical/2_vertical_low_res.jpg"
  ];

  return (
    <div className="App relative flex flex-col">
      <NavBar />
      <div className="block md:hidden absolute inset-0">
        <Scroller images={verticalImages} shouldShowLogo={true} />
      </div>
      <div className="hidden md:block absolute inset-0">
        <Scroller images={horizontalImages} shouldShowLogo={true} />
      </div>
    </div>
  );
}

export default App;
