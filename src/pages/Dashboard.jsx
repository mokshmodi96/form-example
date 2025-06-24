import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';
import {Button, Stack} from "@mui/material";

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    const handleLogout = () => {
        auth.logout(() => navigate('/'));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Dashboard</h2>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginBottom: 2 }}>
            <Button onClick={handleLogout}>Logout</Button>
            <Button variant="outlined" onClick={() => navigate('/store')} sx={{ marginBottom: 2 }}>
                Go to Store
            </Button>
            </Stack>

            <ul className="list-group">
                {posts.map(post => (
                    <li key={post.id} className="list-group-item">
                        <strong>{post.title}</strong><br />
                        {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
