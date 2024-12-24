import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

export default function UserList() {
    const userDiplayList = useSelector((state:any)=> state.users.userList)
    const deleteApiRes = useSelector((state:any)=> state.users.userDeleteRes)
    const [deleteState, setDeleteState] = useState(false)
    const [deleteItem, setDeleteItem] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch({type:'USER_LIST_DISPLAY'})
    },[])
    useEffect(()=>{
        if(deleteApiRes){
            dispatch({type:'USER_LIST_DISPLAY'})
        }
    }, [deleteApiRes])
    const userDetailEvent=(item:any)=>{
        console.log("itemID", item)
        navigate(`/userDetail/${item._id}`)
    }
    const userDeleteEvent=(data:any)=>{
        setDeleteItem(data)
        setDeleteState(true)
    }
    const renderUserList:any=()=>{
           const data = userDiplayList.map((item:any)=>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><button onClick={()=>userDetailEvent(item)}>User Detail</button>
                            <button onClick={()=>userDeleteEvent(item)}>Delete</button>
                        </td>

                    </tr>
                )
            })
        return data
    }
    //delete api call event
    const deleteApiEventCall=()=>{
        dispatch({type:"USER_DELETE_RECORD", payload:deleteItem})
        setDeleteState(false)
    }
  return (
    <div>
        <Link to="/userCreate">Create User</Link>
        {
            deleteState ?
            <div>
                <button onClick={()=>setDeleteState(false)}>Cancel</button>
                <button onClick={()=> deleteApiEventCall()}>Are You Sure?</button>
            </div>
            : ""
        }
        <table>
            <thead>
                <th>User Name</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody>
                {renderUserList()}
            </tbody>
        </table>
        
    </div>
  )
}
