import React from 'react'
import './User.css'
const User = () => {
  return (
    <div className="user-profile">
    <div className="user-photo">
      <img src="https://picsum.photos/id/3/200/300" alt="User" />
    </div>
    <div className="user-details">
      <div className="user-field">
        <label>Name:</label>
         <p>Jhon doe!</p>
      </div>
      <div className="user-field">
        <label>Email:</label>
        <p>johndoe@example.com </p>
      </div>
      <div className="user-field">
        <label>Age:</label>
        <p>30</p>
      </div>
      <div className="user-field">
        <label>Social Media Handles</label><br></br>
        
      </div>
    </div>
  </div>
  )
}

export default User