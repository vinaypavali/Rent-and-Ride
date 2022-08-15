import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Travel from  './components/Travel/Travel';
import Login from  './components/login/login';
import Register from  './components/Register/Register';
 

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/travel" element={<Travel/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
