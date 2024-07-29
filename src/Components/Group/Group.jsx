import React from 'react'
import './Group.css'
import {Link} from 'react-router-dom'
const Group = () => {
  return (
    <div className="create-group">
    <header className="header">
      <h1 className="home-title"><Link to="/">Splitwise</Link></h1>
      <h1 className="user-page"><Link to="/User">User Page</Link></h1>
    </header>
    <main className="main-content">
      <h2>Start a New Group</h2>
      <form className="group-form">
        <div className="form-group">
          <label htmlFor="groupName">Group Name:</label>
          <input type="text" id="groupName" name="groupName" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <Link to="/">
        <button type="submit" className="create-group-button">Create Group</button>
        </Link>
      </form>
    </main>
  </div>
  )
}

export default Group