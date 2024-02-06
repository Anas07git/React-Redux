import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch= useDispatch()
  const userState= useSelector((state)=> state.user)

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <div>
      <h3>List of users</h3>
      {userState.loading && <div> Loading...</div>}
      {!userState.loading && userState.error ? <div> Error -{userState.error}</div>:null}
      {!userState.loading && userState.users.length ? (
        <ul>
          {
            userState.users.map((user)=>(
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      ): null}
    </div>
  )
}

export default UserView
