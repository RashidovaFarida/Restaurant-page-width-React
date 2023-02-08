import React from 'react'
import SignIn from '../authentication/SignUp'
import BlogTable from './BlogTable'

const UserPanel = () => {
    const getEmail=localStorage.getItem('username')
    const getPassword=localStorage.getItem('password')
    const getName=localStorage.getItem('name')
  return (
   <div>
    {
        getEmail && getPassword ? <BlogTable name={getName}/> :<SignIn />
    }
   </div>
  )
}

export default UserPanel