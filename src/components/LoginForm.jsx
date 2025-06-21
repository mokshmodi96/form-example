import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        auth.login(() => navigate('/dashboard'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
            <br /><br />
            <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
            <br /><br />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
