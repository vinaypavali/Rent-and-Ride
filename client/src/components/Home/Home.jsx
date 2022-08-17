import React, {useState} from 'react';
import './home.css';

const Home = () => {
 
const [travel,setTravel]=useState({
  from:"",
  to:"",
  date: new Date()
}) 
 
const handleChange = (e)=>{
  console.log(e.target)
  const{name,value}=e.target
  setTravel({
    ...travel,
    [name]:value,
  })
 }

  return (
    <>
     <div className="navbar">
        <div className="navContainer">
            <span className='logo'>Rent & Ride</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>   
            </div>
        </div>
         </div>

         <h1>Looking to Travel in a Car</h1>

         <div className="form-container">
          <form>

            <div className="input-box">
            <span>From</span>
            <input type="search" name="" value={travel.from} onChange={handleChange} placeholder="Leaving from..."/>
            </div>

            <div className="input-box">
            <span>To</span>
            <input type="search" name="" value={travel.to} onChange={handleChange} placeholder="Going to..."/>
            </div>

            <div className="input-box">
            <span>Date</span>
            <input type="date" name="" value={travel.date} onChange={handleChange}/>
            </div>
            {/* <button className="ppl" >-</button>
            <span id="num">{count}</span>
            <button className="ppl" onClick={() => setOption()}>+</button> */}
            <input type="submit" value="Search" name="" id="" className="btn"></input>


          </form>

         </div>
    </>
  )
}

export default Home