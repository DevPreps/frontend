import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    // TODO user will be changed to a global state
    const user = {
        userId: 1,
    };
    return (
        <nav style={{ display: "flex", flexDirection: "column" }}>
            <Link to="/">Home</Link>
            <Link to="/posts/learn">Learn</Link>
            <Link to="/posts/interview">Interview</Link>
            <Link to="/posts/project">Project</Link>
            <Link to="/posts/general">General</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to={`/my-account/${user.userId}`}>My Account</Link>
            <Link to="/about-us">About Us</Link>
        </nav>
    );
};

export default TopNav;
