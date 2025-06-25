import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import {Button} from "@mui/material";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            {isLogin ? <LoginForm /> : <SignupForm />}
            <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <Button variant='text' onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Sign Up' : 'Login'}
                </Button>
            </p>
        </div>
    );
};

export default AuthPage;
