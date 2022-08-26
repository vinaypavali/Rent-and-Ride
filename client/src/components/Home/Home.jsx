import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();
 
const [travel,setTravel]=useState({
  from:"",
  to:"",
  date: new Date()
}) 

const [options,setOtions]=useState({
  members:1
})
 
const handleOption =(name,operation)=>{
  setOtions(prev=>{
    return{
      ...prev,[name]:operation==='i'? options[name]+1:options[name]-1
    }
  })

}
const handleChange = (e)=>{
  console.log(e.target)
  const{name,value}=e.target
  setTravel({
    ...travel,
    [name]:value,
  })
 }

 const handleSearch = ()=>{
   navigate("/travellist",{state:{travel}})
 }
 const handleAddTravel = ()=>{
  navigate("/addtravel")
}

 const handleProfile = ()=>{
  navigate("/login" )
}

  return (
    <>
     <div className="navbar">
        <div className="navContainer">
            <span className='logo'>Rent & Ride</span>
            <div className="navItems">
              <button className="navButton"  onClick={handleAddTravel}>Publish a Ride</button>
                <button className="navButton"  onClick={handleProfile}>Profile</button> 
                
            </div>
        </div>
         </div>
     
         
         <h1>Looking to Travel in a Car</h1>

         <div className="form-container">
          
            <div className="input-box">
            <span>From</span>
            <input type="search" name="from" value={travel.from} onChange={handleChange} placeholder="Leaving from..."/>
            </div>

            <div className="input-box">
            <span>To</span>
            <input type="search" name="to" value={travel.to} onChange={handleChange} placeholder="Going to..."/>
            </div>

            <div className="input-box">
            <span>Date</span>
            <input type="date" name="date" value={travel.date} onChange={handleChange}/>
            </div>

            <button disabled={options.members<=1} className="ppl" onClick={() => handleOption("members","d")} >-</button>
            <span id="num">{options.members}</span>
            <button disabled={options.members>=4} className="ppl" onClick={() => handleOption("members","i")}>+</button>

            <button className="btn" onClick={handleSearch}>Search</button>

         </div>
    </>
  )
}

export default Home