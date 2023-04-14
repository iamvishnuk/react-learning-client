import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./pages/Profile";
import AdminLogin from "./Admin/AdminLogin"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/admin" element={<AdminLogin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
