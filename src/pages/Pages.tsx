import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Myrecipes from './MyRecipes'
import FullRecipes from './FullRecipes'
import { FC } from 'react'

const Pages :FC = ()=> {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/myrecipes" element={<Myrecipes/>}/>
        <Route path="/fullrecipes" element={<FullRecipes/>}/>
    </Routes>
  )
}

export default Pages