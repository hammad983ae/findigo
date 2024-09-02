import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'; // Import Firebase methods
import logo from "../assets/logo.png";
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(); // Initialize Firebase Auth

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send password reset email
      await sendPasswordResetEmail(auth, email);
      
      // Set success message and navigate to reset password page
      setMessage(`Reset link sent to ${email}`);
      setError('');
      alert("Please check your email")
      navigate('/reset-password');
    } catch (error) {
      console.error("Error sending reset email:", error);
      setError('Failed to send reset link. Please check your email address and try again.');
      setMessage('');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-image"></div>
      <div className="forgot-password-form">
        <div className="forgot-password-logo">
          <img src={logo} alt="Findigo Logo" />
        </div>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
          </label>
          <button type="submit" className="reset-button">Send Reset Link</button>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
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

export default ForgotPassword;
