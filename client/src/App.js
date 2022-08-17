import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import PostTravel from  './components/PostTravel/PostTravel';
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
    <Route path="/posttravel" element={<PostTravel/>}/>
    <Route path="/travellist" element={<TravelList/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
