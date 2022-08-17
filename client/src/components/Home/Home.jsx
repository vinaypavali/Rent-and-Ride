import React from 'react';
import './home.css'

const Home = () => {
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
            <input type="search" name="" id="" placeholder="Leaving from..."/>
            </div>

            <div className="input-box">
            <span>To</span>
            <input type="search" name="" id="" placeholder="Going to..."/>
            </div>

            <div className="input-box">
            <span>Date</span>
            <input type="date" name="" id=""/>
            </div>
            <button className="ppl">-</button>
            <span id="num">0</span>
            <button className="ppl">+</button>
            <input type="submit" value="Search" name="" id="" className="btn"></input>


          </form>

         </div>
    </>
  )
}

export default Home