import { useState,useEffect } from 'react'
import axios from 'axios'
import PitemList from '../TravelCard/TravelCard'
import './travellist.css'

const TravelList = () => {

  const [posts,setPosts]=useState([""])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/allposts")
      console.log(res)
      setPosts(res.data)
  
    }
     fetchPosts()
  },[])

  return (
   <>

<div className="data">
          {posts.map((p) => (<PitemList key={p.toString()} post={p} /> ))}
        </div>
      
   </>

  )
}
export default TravelList