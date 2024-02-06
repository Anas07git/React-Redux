import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState={
    users:[],
    error:'',
    loading:false
}

// Generates Pending , Fulfilled & Rejected Action Types
 export const fetchUsers= createAsyncThunk("user/fetchUsers",()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.data)
})

export const userSlice= createSlice({
    name:"user",
    initialState,

    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=""

        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[]
            state.error=action.error.message

        })
    }
})

export default userSlice.reducer