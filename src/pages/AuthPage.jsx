import React, { useContext, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { Button } from "@mui/material";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [isLogin, setIsLogin] = React.useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <Button variant="text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </Button>
      </p>
    </div>
  );
};

export default AuthPage;
