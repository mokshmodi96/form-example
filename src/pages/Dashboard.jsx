import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/auth";
import { Button, Stack, Typography } from "@mui/material";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleLogout = () => {
    auth.logout(() => navigate("/"));
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
        <Button variant="outlined" onClick={() => navigate("/store")}>
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
