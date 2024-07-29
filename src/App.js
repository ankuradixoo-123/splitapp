import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
// import { AuthProvider } from './Components/AuthContext/AuthContext';

// import PrivateRoute from './Components/AuthContext/Privateroutes';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import GroupMember from './Components/GroupMembers/GroupMember';
import Group from './Components/Group/Group';
import RecentActivity from './Components/RecentActivity/RecentActivity';
import User from './Components/User/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Register/> 
  },
  {
    path : '/login',
    element : <Login/>
  },
  // {
  //   path : '/user',
  //   element : <PrivateRoute element={User}/>
  // },
  // {
  //   path : '/RecentActivity',
  //   element : <PrivateRoute element={RecentActivity}/>
  // },
  // {
  //   path : '/CreateGroup',
  //   element : <PrivateRoute element={Group}/>
  // },
  // {
  //   path : '/GroupMembers',
  //   element : <PrivateRoute element={GroupMember}/>
  // }
  {
    path: "/user",
    element: <User/>
  },
  {
    path: "/RecentActivity",
    element: <RecentActivity/>
  },
  {
    path : '/CreateGroup',
    element : <Group/>
  },
  {
    path : '/GroupMembers',
    element : <GroupMember/>
  }
]); 

function App() {
  return (
    // <AuthProvider>
  <div className='app'>
    <div className='container'>
    <RouterProvider router={router}/>
    </div>
    
  </div>
  // </AuthProvider>
  );
}

export default App;
