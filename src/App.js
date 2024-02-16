import { Profiler, useContext } from "react";
import LeftBar from "./Components/LeftBar/LeftBar";
import Navbar from "./Components/NavBar/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import "./style.css";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Home from "./Pages/Home/Home";
import RightBar from "./Components/RightBar/RightBar";
import { DarkMoodContext } from "./context/DarkModeContex";
import { AuthContext } from "./context/authContext";

function App() {
  const {darkMode} = useContext(DarkMoodContext);

  // console.log(darkMode);


  // const currentUser = true;
    const {currentUser} = useContext(AuthContext);

    // console.log(currentUser);
  const Layout = ()=>{
    

    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
       <div style={{flex:6}}>     
          <Outlet/>
       </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <ProtectedRoute>
        <Layout/>
      </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
 <div>

  <RouterProvider router={router}/>
 </div>
  );
} 

export default App;
