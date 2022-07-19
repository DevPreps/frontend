import React from "react";
import { Outlet } from "react-router-dom";

const MyAccount = () => {
	return (
		<div>
			MyAccount
			<Outlet />
		</div>
	);
};

export default MyAccount;
