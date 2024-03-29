import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './register.css'

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    cpassword:""  

   })
   
 const handleChange = (e)=>{
  console.log(e.target)
  const{name,value}=e.target
  setUser({
    ...user,
    [name]:value,
  })
 }

 const register=()=>{
 
  const { name, email, phone, password, cpassword } = user
  if( name && email &&phone && password && (password === cpassword)){
      axios.post("/register", user)
      .then( res => {
          alert(res.data.message)
          navigate("/login")
      })
  } else {
      alert("invalid input")
  }
 }


  return (
    <div className='register'>
      {console.log("User",user)}
    <h1>Register</h1>
    <input type="text" name='name' value={user.name} onChange={handleChange} placeholder='Enter Your Name' />
    <input type="text"  name='email' value={user.email} onChange={handleChange} placeholder='Enter Your Email' />
    <input type="text"  name='phone' value={user.phone} onChange={handleChange} placeholder='Enter Your Phone' />
    <input type="password"  name='password' value={user.password} onChange={handleChange} placeholder='Enter Your Password' />
    <input type="password"  name='cpassword' value={user.cpassword} onChange={handleChange} placeholder='Re-Enter Your Password' />
    <div className="button" onClick={register} >Register</div>
    <div>or</div>
    <div className='bn' onClick={() => navigate("/login")}>Login</div>
</div>
  )
}

export default Register