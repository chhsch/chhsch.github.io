// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from "./components/HomePage/HomePage";
import IMU from "./components/IMU/IMU";
import Scoliosis from "./components/Scoliosis/Scoliosis";
import Covid from "./components/Covid/Covid";
import Cwf from "./components/AC/AC";
import Bookstore from "./components/Bookstore/Bookstore";
import Mobile from "./components/Mobile/Mobile";

function App() {

    const navigate = useNavigate();
    const handleLogoClick = () => {
        if (window.history.length > 1) {
            navigate(-1); // Go back to the previous page
        } else {
            navigate('/'); // Go to the homepage if no history
        }
    };
  return (
    <div className="App">
      {/*<NavBar />*/}
        <NavBar onLogoClick={handleLogoClick} />
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/imu" element={<IMU/>} />
        {/*<Route exact path="/scoliosis" element={<Scoliosis/>} />*/}
        {/*<Route exact path="/covid" element={<Covid/>} />*/}
        <Route exact path="/ac" element={<Cwf/>} />
        {/*<Route exact path="/bookstore" element={<Bookstore/>} />*/}
        {/*<Route exact path="/mobile" element={<Mobile/>} />*/}
      </Routes>
    </div>
  );
}

export default App;
