import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
	return (
		<nav style={{ display: "flex", flexDirection: "column" }}>
			<Link to="/">Home</Link>
			<Link to="/posts/learn">Learn</Link>
			<Link to="/posts/interview">Interview</Link>
			<Link to="/posts/projects">projects</Link>
			<Link to="/posts/discussions">Discussions</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
			<Link to="/my-account">My Account</Link>
			<Link to="/about-us">About Us</Link>
		</nav>
	);
};

export default TopNav;
