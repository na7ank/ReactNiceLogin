// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;