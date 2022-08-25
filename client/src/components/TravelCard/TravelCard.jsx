import React from 'react'
import './travelcard.css'

const TravelCard = ({post}) => {
  return (
    <>
    <div className="listContainter">
       <div className='list'>
         <div className='travelDetails'>
             <div className='travelTime'>
                <div className="fromTime"><h3>{post.fromtime}</h3></div>
                <div className="toTime"><h3>{post.totime}</h3></div>
             </div>
             <div className='travelPlace'>
               <div className="fromPlace"><h3>{post.from}</h3></div>
               <div className="toPlace"><h3>{post.to}</h3></div>
             </div>
             <div className="travelAmount">
             <div className="price"><h3>&#8377; {post.price}</h3></div>
               <div className="number"><h3>3</h3></div>
             </div>
         </div>
             
         <div className='driverDetails'>
              <div className='driverImg'>
               <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="profile" />
               </div>
              <div className='driverName'><h3>Vinay Kumar</h3></div>
              <div className='driverBook'>
               <button className='btn'>Book Ride</button>
              </div>
       </div>
     </div>
    </div>
    </>
  )
}

export default TravelCard