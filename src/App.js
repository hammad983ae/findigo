// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Views/admin";
import TermsOfUse from "./Views/TermsOfUse";
import PrivacyPolicy from "./Views/PrivacyPolicy";
import ForgotPassword from "./Views/ForgotPassword";
import ResetPassword from "./Views/ResetPassword";
import Signup from "./Views/adminsignup";
import Dashboard from './pages/Dashboard';
import User from './pages/user';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/user" element={<User />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
