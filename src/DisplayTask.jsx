import React from 'react'

const DisplayTask = ({uname,password}) => {

   return (
    <>
    <h2>User Details</h2>
        <h4>Username : {uname}</h4>
        <h4>Password : {password}</h4>   
      
    </>
  )
}

export default DisplayTask