import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Blr_hotels from './components/Restaurants_1/Blr_hotels';
import Coimbatore from './components/Restaurants_1/Coimbatore';
import Calicut from './components/Restaurants_1/Calicut';
import Chennai from './components/Restaurants_1/Chennai';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import About from './components/About/About';

function App() {
  const [username, setUsername] = useState(null); // Manage username state

  return (
    <BrowserRouter>
      <Navbar username={username} setUser={setUsername} /> 
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setUser={setUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coimbatore/restaurants" element={<Coimbatore />} />
        <Route path="/bangalore/restaurants" element={<Blr_hotels />} />
        <Route path="/calicut/restaurants" element={<Calicut />} />
        <Route path="/chennai/restaurants" element={<Chennai />} />
        <Route path="/bangalore/restaurants/menu/meghanafoods" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
