import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Compose = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{/* use useLocation to get category, or pass category as props */}
			Compose A category Post
			<Link to="/compose/general">General</Link>
			<Link to="/compose/interview">Interview</Link>
			<Link to="/compose/learn">Learn</Link>
			<Link to="/compose/project">Project</Link>
			<Outlet />
		</div>
	);
};

export default Compose;
