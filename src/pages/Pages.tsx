import {Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Auth/Login'
import Register from './Auth/Register'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default Pages