import React from 'react';
import { BrowserRouter  as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Splash from './components/splash/Splash';
import About from './components/about/About';
import Login from './components/account/Login';
import AddFamily from './components/account/AddFamily';
import NewAccount from './components/account/NewAccount';
import User from './components/account/User';
import WarningState from './context/warning/WarningState';
import UserState from './context/user/UserState';

function App() {
  return (
    <WarningState>
    <UserState>
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-account" element={<NewAccount />} />
          <Route path="/add-family" element={<AddFamily />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
    </UserState>
    </WarningState>
    );
}

export default App;
