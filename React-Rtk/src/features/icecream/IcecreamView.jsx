import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { ordered, restocked } from './icecreamSlice'

const IcecreamView = () => {
  const[val,setVal]=useState(1)
  const icecream= useSelector((state)=> state.icecream.noOfIcecream)
  const dispatch= useDispatch()
  return (
    <div>
      <h2>Number of Icecreams -{icecream}</h2>
      <button onClick={()=> dispatch(ordered())}>OrderIcecream</button>
      <button onClick={()=> dispatch(restocked(val))}>RestockIcecream</button>
      <input value={val} type="number" onChange={(e)=> setVal(parseInt(e.target.value))}/>

    </div>
  )
}

export default IcecreamView
