import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

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
  {
    path : '/post/:id',
    element : <Login/>
  }
]); 

function App() {
  return (
  <div className='app'>
    <div className='container'>
    <RouterProvider router={router}/>
    </div>
    
  </div>
  );
}

export default App;
