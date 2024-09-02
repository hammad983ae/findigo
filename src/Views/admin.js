import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../features/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./admin.css";
import logo from "../assets/logo.png";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);

  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    console.log("Email changed:", newEmail);
    dispatch(setEmail(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    console.log("Password changed:", newPassword);
    dispatch(setPassword(newPassword));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    console.log("Login button clicked");
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("User signed in:", userCredential.user);
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("Failed to login. Please check your credentials.");
      });
  };

  return (
    <div className="login-container">
      <div className="login-image"></div>
      <div className="login-form">
        <div className="logo">
          <img src={logo} alt="Findigo Logo" />
        </div>
        <h1 className="login">Login</h1>
        <p className="login-info">Enter your username & password to login</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="email-container">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="email"
              />
              <FaCheckCircle className="tick-icon" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                required
                className="no-browser-icon"
                value={password}
                onChange={handlePasswordChange}
              />
              {password && (
                passwordVisible ? (
                  <FaEyeSlash className="eye-icon" onClick={togglePasswordVisibility} />
                ) : (
                  <FaEye className="eye-icon" onClick={togglePasswordVisibility} />
                )
              )}
            </div>
          </div>

          <div className="actions">
            <label>
              <input type="checkbox" name="remember" />
              Keep me logged in
            </label>
            <a href="/forgot-password">Forget Password?</a>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div>
          <p className="account">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
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

export default Login;
