import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { AuthContext } from "../context/AuthProvider.jsx";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleLogout = () => {
    logout(() => navigate("/"));
  };

  return (
    <Stack sx={{ padding: 2 }} spacing={2}>
      <Typography variant="h4">Dashboard</Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Button variant="outlined" onClick={() => navigate("/products")}>
          Go to Store
        </Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Stack>

      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item">
            <strong>{post.title}</strong>
            <br />
            {post.body}
          </li>
        ))}
      </ul>
    </Stack>
  );
};

export default Dashboard;
