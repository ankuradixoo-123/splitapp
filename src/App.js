import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './Components/AuthContext/AuthContext';
import PrivateRoute from './Components/AuthContext/Privateroutes';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import GroupMember from './Components/GroupMembers/GroupMember';
import Group from './Components/Group/Group';
import RecentActivity from './Components/RecentActivity/RecentActivity';
import User from './Components/User/User';
import Logout from './Components/Logout/Logout';

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <div className='container'>
          <Router>
            <Routes>
              <Route path="/" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Home" element={<PrivateRoute element={<Home/> } />} />
              <Route path="/user" element={<PrivateRoute element={<User />} />} />
              <Route path="/RecentActivity" element={<PrivateRoute element={<RecentActivity />} />} />
              <Route path="/CreateGroup" element={<PrivateRoute element={<Group />} />} />
              <Route path="/GroupMembers" element={<PrivateRoute element={<GroupMember />} />} />
            </Routes>
            <Logout/>
          </Router>
        </div>
       
      </div>
    </AuthProvider>
  );
}

export default App;
