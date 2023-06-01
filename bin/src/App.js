import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import SignupForm from './components/signup/signup';
import LoginForm from './components/login/login';
import LogoutButton from './components/login/loginout';

const Routing = () => {
  return (
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/logout" element={<LogoutButton />} />
    </Routes>
  );
};
const App = () => {
  return (
    <Routing />
  );
};

export default App;
