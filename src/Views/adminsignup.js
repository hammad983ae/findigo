// src/components/adminsignup.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUsername, setEmailSign, setPasswordSign, setConfirmPassword, setError } from '../features/authSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import logo from "../assets/logo.png";
import './adminsignup.css'; 

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username, email, password, confirmPassword, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      dispatch(setError('Passwords do not match'));
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(`Registering admin with username: ${username}, email: ${email}`);
      navigate('/');
    } catch (err) {
      console.error("Error signing up:", err);
      dispatch(setError('Failed to register. Please try again.'));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image"></div>
      <div className="signup-form">
        <div className="signup-logo">
          <img src={logo} alt="Findigo Logo" />
        </div>
        <h2 className='registration'>Admin Registration</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
              required
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => dispatch(setEmailSign(e.target.value))}
              required
              autoComplete="email"
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => dispatch(setPasswordSign(e.target.value))}
              required
            />
          </div>
          <div className="signup-input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
              required
            />
          </div>
          <button type="submit" className="signup-button">Register </button>
        </form>
        <div className="login-footer">
          <p>© 2024 Findigo. All rights reserved.</p>
          <a href="/terms">Terms of Use</a> |{" "}
          <a href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
