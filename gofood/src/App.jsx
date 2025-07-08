import React from 'react'
import Home from "./screens/Home";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Login from "./screens/Login";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';
import Signup from "./screens/Signup"
import MyOrder from './screens/MyOrder';

const App = () => {
  return (
    <CartProvider>
      <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home/>}/>
 <Route exact path="/login" element={<Login/>}/>
 <Route exact path="/createuser" element={<Signup/>}/>
 <Route exact path="/myorder" element={<MyOrder/>}/>
       

      </Routes>
    </Router>
    </CartProvider>
    
  
  )
}

export default App
