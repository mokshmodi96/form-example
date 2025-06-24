import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import { Button } from "@mui/material";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.login(() => navigate("/dashboard"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
