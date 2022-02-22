import React from 'react';
import { BrowserRouter  as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Splash from './components/splash/Splash';
import About from './components/about/About';
import Login from './components/account/Login';
import NewAccount from './components/account/NewAccount';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-account" element={<NewAccount />} />
      </Routes>
    </Router>
    );
}

export default App;
