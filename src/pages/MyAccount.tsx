import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			MyAccount
			<Link to="/my-account">PersonalInfo</Link>
			<Link to="/my-account/my-posts">My Posts</Link>
			<Link to="/my-account/my-drafts">My Drafts</Link>
			<Link to="/my-account/my-bookmarks">My Bookmarks</Link>
			<Outlet />
		</div>
	);
};

export default MyAccount;
