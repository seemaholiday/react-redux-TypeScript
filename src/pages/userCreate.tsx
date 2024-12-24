import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector }  from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

function UserCreate() {
    const [data, setData] = useState({name:"", email:"", designation:"", phone:""})
    const userRes = useSelector((state:any)=>state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("userRes", userRes)
    const handleSubmit= async (e:any)=>{
        e.preventDefault();
       await dispatch({type:"USER_CREATE_RECORD", payload:data})
    }
    useEffect(()=>{
        if(userRes.userPostRes){
            if(userRes.userPostRes.status === 201){
              alert(userRes.userPostRes.message)
              setData({name:"", email:"", designation:"", phone:""})
              navigate("/")
            }
            else{
              alert(userRes.userPostRes.message.errorResponse.errmsg)
            }

        }
    }, [userRes])
   
  return (
    <div className='flex-Css'>
       <Link to="/">User List</Link>
        <h2>Create User</h2>
       
        <form onSubmit={handleSubmit}>
            <input placeholder='Name' name="name" value={data.name} onChange={(e)=>{setData({...data, name:e.target.value})}}/>
            <input type='email' placeholder='Email' name="email" value={data.email} onChange={(e)=>{setData({...data, email:e.target.value})}}/>
            <input placeholder='Designation' name="designation" value={data.designation} onChange={(e)=>{setData({...data, designation:e.target.value})}}/>
            <input placeholder='Phone' name="phone" value={data.phone} onChange={(e)=>{setData({...data, phone:e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserCreate