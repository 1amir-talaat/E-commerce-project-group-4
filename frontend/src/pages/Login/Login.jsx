import './login.css';
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();  // Fix the variable name here
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])(?!.*\s).{8,}$/;
    if (!password.trim()) {
      setPasswordError("Please enter your password");
    } else if (!passwordPattern.test(password)) {
      setPasswordError("Password must be at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (!email.trim()) {
      setEmailError("Please enter your email");
    }

    if (!password.trim()) {
      setPasswordError("Please enter your password");
    } else {
      validatePassword();
    }

    if (emailError || passwordError) {
      setLoginError("Please fix the errors in the form");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/users/login", {
        email: email,
        password: password,
      });
      const { token, user } = response.data;
      login(user, token);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response.data);
      setLoginError("Invalid email or password");
    }
  };

  return (
    <React.Fragment>
      <div className="home-account">
        <p>Home  / <span>Account</span></p>
      </div>
      <div className='loginParent'>
        <form className='loginCard'>
          <h4>Login</h4>
          <div className='parentInput'>
            <input type="text" name='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <p className="error-message" style={{ marginBottom: "-10px" }}>{emailError}</p>}
          </div>
          <div className='parentInput'>
            <input type={"password"} name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={validatePassword} />
            {passwordError && <p className="error-message" style={{ marginBottom: "-10px", marginTop: "5px" }}>{passwordError}</p>}
          </div>
          <div className='btnsLink'>
            <button className='btnLogin' style={{ marginRight: "25px" }} type='button' onClick={handleLogin}><Link to={"/"}>Login</Link> </button>
            <a className='btnLogin aTagLogin' href="">
              <Link className='linkLogin' to={"/register"} style={{ color: "black" }}>Sign Up</Link>
            </a>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
