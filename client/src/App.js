import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import AddTravel from  './components/AddTravel/AddTravel';
import Login from  './components/Login/Login';
import Register from  './components/Register/Register';
import TravelList from "./components/TravelList/TravelList";
import Profile from './components/Profile/Profile'
import Landing from './components/LandingPage/LandingPage'
import { useState } from "react";

function App() {
  const [user,setLoginUser]=useState({})
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route exact path="/home" element={ user && user._id ?  <Home setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/> } /> 
    <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/addtravel" element={<AddTravel/>}/>
    <Route path="/travellist" element={<TravelList/>}/>
    <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
