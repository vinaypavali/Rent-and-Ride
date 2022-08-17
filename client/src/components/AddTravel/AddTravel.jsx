import React from 'react'
import './addtravel.css'

const Travel = () => {
  return (
    <>
    <div className="navbar">
       <div className="navContainer">
           <span className='logo'>Rent & Ride</span>
           <div className="navItems">
               <button className="navButton">Home</button>
               <button className="navButton">Profile</button>   
           </div>
       </div>
        </div>

        <h1>Share Your Car Journey</h1>

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
           {/* <button className="ppl" >-</button>
           <span id="num">{count}</span>
           <button className="ppl" onClick={() => setOption()}>+</button> */}
           <input type="submit" value="Search" name="" id="" className="btn"></input>


         </form>

        </div>
   </>
  )
}

export default Travel