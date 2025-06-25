import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';
import {Button} from "@mui/material";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Created user: ${name}, ${email}`);
        auth.login(() => navigate('/dashboard'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={e => setName(e.target.value)}
            />
            <br /><br />
            <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
            />
            <br /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
            />
            <br /><br />
            <Button variant='contained' type='submit'>Sign Up</Button>
        </form>
    );
};

export default SignupForm;
