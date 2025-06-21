import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/auth';

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
            <button className="btn btn-danger mb-4" onClick={handleLogout}>Logout</button>
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
