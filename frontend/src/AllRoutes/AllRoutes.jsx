import React from 'react'
import {Routes ,Route} from"react-router-dom";
import CreatePost from '../Components/CreatePost';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import SingleBlog from '../Components/SingleBlog';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const AllRoutes = () => {
  return (
    <div>
    <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login/>} />

         <Route path="/blog/:id"
          element={<PrivateRoute>
                  <SingleBlog/>
                  </PrivateRoute> }
            /> 
         <Route path="/createpost" element={ 
          <PrivateRoute>
          <CreatePost/> 
          </PrivateRoute>
          } />
          
    </Routes>
    </div>
  )
}

export default AllRoutes;
