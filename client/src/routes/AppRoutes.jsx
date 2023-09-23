import {Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home.jsx"
import Login from '../pages/login/Login.jsx';
import Register from '../pages/register/Register.jsx';
import Ui from '../pages/ui/Ui.jsx';
export default function AppRoutes() {
  return (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/ui" element={<Ui />} />
        </Routes>
        
  )
}