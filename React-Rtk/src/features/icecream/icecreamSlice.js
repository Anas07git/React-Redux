import { ordered as CakeOrdered } from "../cake/cakeSlice"
import { createSlice } from "@reduxjs/toolkit"

const initialState={
    noOfIcecream:12
}

const icecreamSlice= createSlice({
    name:"Icecream",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIcecream--
        },
        restocked:(state,action)=>{
            state.noOfIcecream+=action.payload
        }
    },
    // Expired
    // extraReducers:{
    //     ["cake/ordered"]:(state)=> state.noOfIcecream--
    // }
    extraReducers:(builder)=>{
        builder.addCase(CakeOrdered,(state)=>{
            state.noOfIcecream--
        })
    }
})

export default icecreamSlice.reducer
export const{ordered,restocked}=icecreamSlice.actions
