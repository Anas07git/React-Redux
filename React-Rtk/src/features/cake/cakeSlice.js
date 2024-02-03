import { createSlice } from "@reduxjs/toolkit"

const initialState={
    noOfCakes:12,
}

const cakeSlice= createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfCakes--
        },
        restocked:(state,action)=>{
            state.noOfCakes+=action.payload
        }

    }
})

 export default cakeSlice.reducer
 export const{ordered,restocked}= cakeSlice.actions