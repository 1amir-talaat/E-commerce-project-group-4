// components/Register.js
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  const { login } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });

      const { token, user } = response.data;
      login(user, token);
    } catch (error) {
      console.error("Registration error:", error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
