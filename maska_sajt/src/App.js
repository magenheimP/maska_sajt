import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Router basename="/">
      <div className="App relative flex flex-col">
        <NavBar />
          <Routes>
            <Route>
              <Route exact path="/" element={<Home/>} />
              {/* <Route path="/about-me" element={<AboutMe/>}/> */}
            </Route>
          </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
