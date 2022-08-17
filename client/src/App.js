import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import AddTravel from  './components/AddTravel/AddTravel';
import Login from  './components/login/login';
import Register from  './components/Register/Register';
import TravelList from "./components/TravelList/TravelList";
 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/addtravel" element={<AddTravel/>}/>
    <Route path="/travellist" element={<TravelList/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
