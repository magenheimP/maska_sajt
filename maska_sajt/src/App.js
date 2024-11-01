import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Scroller from './Components/Scroller';
import { useState, useEffect } from 'react';

function App() {
  const horizontalImages = [
    "./horizontal/DSC_4127.jpg",
    "./horizontal/2_horizontal_low_rez.jpg"
  ];

  const verticalImages = [
    "./vertical/1_vertical_low_res.jpg",
    "./vertical/2_vertical_low_res.jpg"
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setIsVisible(true);
      }, 1500);
  }, []);

  return (
    //vertical
    //<img src="./logo/beli.png" alt="logo" className={`w-[100%] z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>

    //horizontal
    //<img src="./logo/beli.png" alt="logo" className={`w-[40%] z-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>

    <div className="App relative flex flex-col">
      <NavBar />
      <div className="block md:hidden absolute inset-0">
        <img src="./logo/beli.png" alt="logo" className={`w-[100%] z-30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
        <Scroller images={verticalImages}/>
      </div>
      <div className="hidden md:block absolute inset-0">
        <img src="./logo/beli.png" alt="logo" className={`w-[40%] z-30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}/>
        <Scroller images={horizontalImages}/>
      </div>
    </div>
  );
}

export default App;
