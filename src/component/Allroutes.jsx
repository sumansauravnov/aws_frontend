import React from 'react'
import Login from './Login'
import Register from './Register';
import {Routes, Route} from "react-router-dom"
import Product from './Product';

const Allroutes = () => {
  return (
    <Routes>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/" element={<Product/>}></Route>
    </Routes>
    

  )
}

export default Allroutes
