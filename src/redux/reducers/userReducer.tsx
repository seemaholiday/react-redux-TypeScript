import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userList:[],
    userDetail:null,
    userPostRes:null,
    userUpdateRes:null,
    userDeleteRes:null
}
const userReducerSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        fetchUserList(state, action){
            state.userList = action.payload
        },
        detailUserList(state, action){
            state.userDetail = action.payload
        },
        userPostApiData(state, action){
            state.userPostRes = action.payload
        },
        userUpdateApiData(state, action){
            state.userDetail = action.payload
        },
        userDeleteApiData(state, action){
            state.userDeleteRes = action.payload
        }
    }
})
export const {fetchUserList, detailUserList, 
    userPostApiData, userUpdateApiData, userDeleteApiData} = userReducerSlice.actions
export default userReducerSlice.reducer