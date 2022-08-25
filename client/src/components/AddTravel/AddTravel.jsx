 import React, {useState} from 'react';
import axios from 'axios'
import './addtravel.css'

const Travel = () => {

  const [travel,setTravel]=useState({
    from:"",
    to:"",
    fromtime:"",
    fromto:"",
    price:"",
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

   const add=()=>{
 
    const { from, to, fromtime, totime, price, date } = travel
    const {members}=options
    if(from && to && fromtime && totime && price && members && date){
        axios.post("/post", travel,options)
        .then( res => {
            alert(res.data.message)
        })
    } else {
        alert("invalid input")
    }
   }


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
          
            <div className="input-box">
            <span>From</span>
            <input type="search" name="from" value={travel.from} onChange={handleChange} placeholder="Leaving from..."/>
            </div>

            <div className="input-box">
            <span>From Time</span>
            <input type="search" name="fromtime" value={travel.fromtime} onChange={handleChange} placeholder="Leaving Time..."/>
            </div>

            <div className="input-box">
            <span>To</span>
            <input type="search" name="to" value={travel.to} onChange={handleChange} placeholder="Going to..."/>
            </div>

            <div className="input-box">
            <span>To Time</span>
            <input type="search" name="totime" value={travel.time} onChange={handleChange} placeholder="Arriving Time..."/>
            </div>

            <div className="input-box">
            <span>Date</span>
            <input type="date" name="date" value={travel.date} onChange={handleChange}/>
            </div>

            <button disabled={options.members<=1} className="ppl" onClick={() => handleOption("members","d")} >-</button>
            <span id="num">{options.members}</span>
            <button disabled={options.members>=4} className="ppl" onClick={() => handleOption("members","i")}>+</button>

            <div className="input-box">
            <span>Price</span>
            <input type="search" name="price" value={travel.price} onChange={handleChange} placeholder="Price"/>
            </div>

            <button className="btn" onClick={add} >Publish</button>

         </div>
   </>
  )
}

export default Travel