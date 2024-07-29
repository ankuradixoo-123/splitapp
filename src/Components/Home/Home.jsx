import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="admin-dashboard">
    <header className="admin-header">
      <h1 className="admin-title">Admin Page!</h1>
      <div className="user-image">
        <Link to="/User">
        <img src="https://picsum.photos/id/3/50/50" alt="User"  />
        </Link>
      </div>
    </header>
    <nav className="admin-nav">
      <ul>
        <li><Link to='/RecentActivity'>Recent Activity</Link></li>
        <li><Link to='/CreateGroup'>Create Group</Link></li>
      </ul>
    </nav>
    <main className="admin-main">
      {/* Add your main content here */}
    </main>
  </div>
  )
}

export default Home