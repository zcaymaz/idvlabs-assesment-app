import {Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Myrecipes from './MyRecipes'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/myrecipes" element={<Myrecipes/>}/>
    </Routes>
  )
}

export default Pages