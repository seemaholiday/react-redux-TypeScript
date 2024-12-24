import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { fetchUserList, detailUserList, userPostApiData, 
    userUpdateApiData, userDeleteApiData } from "../redux/reducers/userReducer";
import axios from 'axios';

const getUserListApi= async ()=>{
    try {
        const response = await axios.get("http://localhost:5000/empGet");
        console.log(response);
        return response.data.data
      } catch (error) {
        console.error(error);
      }
}
function* userListGetGenerateFun():any{
    try{
       const userListData = yield call(getUserListApi)
       yield put(fetchUserList(userListData))
    }
    catch(error){
        console.log("error", error)
    }
}

//Post Api Call
const postUserRecordApi:any= async  (data:any)=>{
    console.log("postApiData", data)
    try{
      const response =  await axios.post("http://localhost:5000/emp", data.payload)
      return response.data
    }
    catch(error){
        console.log(error)
    }
}
function* userCreateGenerateFun(data:any):any{
    try{
       const userCreateData = yield call(postUserRecordApi, data)
       yield put(userPostApiData(userCreateData))
    }
    catch(error){
        console.log("error", error)
    }
}

// User Detail Api Call
const userDetailGetByIdApi = async (id:any)=>{
    console.log("idddd", id)
    try {
        const response = await axios.get(`http://localhost:5000/empGet/${id.payload}`);
        return response.data.data
      } catch (error) {
        console.error(error);
      }
}

function* userDetailGenerateFun(data:any):any{
    try{
       const userDetailData = yield call(userDetailGetByIdApi, data)
       yield put(detailUserList(userDetailData))
    }
    catch(error){
        console.log("error", error)
    }
}


//Update Api Call
const updateUserRecordApi:any= async  (data:any)=>{
    const obj = {name:data.payload.name, designation:data.payload.designation, phone:data.payload.phone}
    try{
      const response =  await axios.put(`http://localhost:5000/empUpdate/${data.payload.id}`, obj)
      return response.data
    }
    catch(error){
        console.log(error)
    }
}
function* userUpdateGenerateFun(data:any):any{
    try{
       const userUpdateData = yield call(updateUserRecordApi, data)
       yield put(userUpdateApiData(userUpdateData))
    }
    catch(error){
        console.log("error", error)
    }
}

// Delete Api Call
const userDeleteGetByIdApi = async (data:any)=>{
    try {
        const response = await axios.delete(`http://localhost:5000/empDelete/${data.payload._id}`);
        return response.data.data
      } catch (error) {
        console.error(error);
      }
}

function* userDeleteGenerateFun(data:any):any{
    try{
       const userDeleteData = yield call(userDeleteGetByIdApi, data)
       yield put(userDeleteApiData(userDeleteData))
    }
    catch(error){
        console.log("error", error)
    }
}
function* userDataSaga(){
    yield takeEvery("USER_LIST_DISPLAY", userListGetGenerateFun)
    yield takeEvery("USER_CREATE_RECORD", userCreateGenerateFun)
    yield takeEvery("USER_DETAIL_RECORD", userDetailGenerateFun)  
    yield takeEvery("USER_UPDATE_RECORD", userUpdateGenerateFun)
    yield takeEvery("USER_DELETE_RECORD", userDeleteGenerateFun)
}
export default userDataSaga