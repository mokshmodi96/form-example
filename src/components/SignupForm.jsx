import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AuthContext } from "../context/AuthProvider.jsx";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Created user: ${name}, ${email}`);
    login(() => navigate("/dashboard"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default SignupForm;
