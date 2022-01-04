import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';
import { DashBoard } from './pages/DashBoard';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DashBoard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
