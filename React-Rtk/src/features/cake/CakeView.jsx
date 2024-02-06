import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const CakeView = () => {
  const cakes=useSelector((state)=> state.cake.noOfCakes)
   const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of Cakes-{cakes}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Cake</button>
      <button onClick={()=>dispatch(restocked(4))}>Restock Cake</button>

    </div>
  )
}

export default CakeView
