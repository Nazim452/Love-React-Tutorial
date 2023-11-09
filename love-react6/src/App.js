import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./componets/PrivateRoute";
// import {Route,Routes} f
function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <div className="bg-black  w-screen h-screen flex flex-col text-white">
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}  >

            <Dashboard />
          </PrivateRoute >
        } />


      </Routes>

    </div>
  );
}

export default App;
