import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
  const { login } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const naviaget = useNavigate();

  
  const handleRegister = async () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])(?!.*\s).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[a-zA-Z]+$/;

    setErrorFirstName('');
    setErrorLastName('');
    setErrorEmail('');
    setErrorPass('');

    if (firstName === "") {
      setErrorFirstName("Please enter your First Name");
    } else if (!namePattern.test(firstName)) {
      setErrorFirstName("First Name should contain only letters");
    }

    if (lastName === "") {
      setErrorLastName("Please enter your Last Name");
    } else if (!namePattern.test(lastName)) {
      setErrorLastName("Last Name should contain only letters");
    }

    if (email === "") {
      setErrorEmail("Please enter your Email");
    } else if (!emailPattern.test(email)) {
      setErrorEmail("Invalid Email");
    }

    if (password === "") {
      setErrorPass("Please enter your Password");
    } else if (!passwordPattern.test(password)) {
      setErrorPass("Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character");
    }

    if (!errorFirstName && !errorLastName && !errorEmail && !errorPass) {
      try {
        const response = await axios.post("http://localhost:5001/users/register", {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        });

        if (response.error && response.error === "User with this email already exists") {
          setErrorEmail("User with this email already exists");
          return;
        }
        const { token, user } = response.data;
        login(user, token);
        naviaget("/");
      } catch (error) {
        console.error("Registration error:", error.response.data);
      }
    }
  };

  return (
    <React.Fragment>
      <div className="home-account">
        <p>Home  / <span>Create Account</span></p>
      </div>
      <div className="registerCard">
        <form className="p-4">
          <h4>Register</h4>
          <div className="input-groupp">
            <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {errorFirstName && <p className="error-message" style={{marginBottom:"-10px"}}>{errorFirstName}</p>}
          </div>
          <div className="input-groupp">
            <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {errorLastName && <p className="error-message" style={{ marginBottom: "-10px" }}>{errorLastName}</p>}
          </div>
          <div className="input-groupp">
            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errorEmail && <p className="error-message" style={{ marginBottom: "-10px" }}>{errorEmail}</p>}
          </div>
          <div className="input-groupp">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errorPass && <p className="error-message" style={{ marginBottom: "-10px", lineHeight: "22px" }}>{errorPass}</p>}
          </div>
          <div className='btnsLink' >
            <button className="btnRegister" type="button" onClick={handleRegister}>Create</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Register;
