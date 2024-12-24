import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom'
import '../App.css';
function UserDetail() {
    const [data, setData] = useState({name:"", email:"", designation:"", phone:""})
    const {id} = useParams();
    const navigate = useNavigate();
    const userDetailData = useSelector((state:any)=>state.users)
    console.log("userDetail", userDetailData)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch({type:"USER_DETAIL_RECORD", payload:id})
    }, [])
    useEffect(()=>{
      if(userDetailData.userDetail){
        setData({name:userDetailData.userDetail.name, email:userDetailData.userDetail.email, 
          designation:userDetailData.userDetail.designation, phone:userDetailData.userDetail.phone})
      }
    }, [userDetailData])
    const handleSubmit=(e:any)=>{
      e.preventDefault();
      const {name, designation, phone} = data
      const obj = {name:name, designation:designation, phone:phone, id:id}
      dispatch({type:"USER_UPDATE_RECORD", payload: obj})
      navigate("/")
    }
  return (
    <div className='flex-Css'>
      <Link to="/">User List</Link>
    <h2>Detail User</h2>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
        <input placeholder='Name' name="name" value={data.name} onChange={(e)=>{setData({...data, name:e.target.value})}}/>
      <label>Email</label>
        <input disabled type='email' placeholder='Email' name="email" value={data.email} onChange={(e)=>{setData({...data, email:e.target.value})}}/>
      <label>Designation</label>
        <input placeholder='Designation' name="designation" value={data.designation} onChange={(e)=>{setData({...data, designation:e.target.value})}}/>
      <label>Phone</label>
        <input placeholder='Phone' name="phone" value={data.phone} onChange={(e)=>{setData({...data, phone:e.target.value})}}/>
        <button type="submit">Update</button>
    </form>
</div>
  )
}

export default UserDetail