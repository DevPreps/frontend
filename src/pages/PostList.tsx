import React from "react";
import { Outlet } from "react-router-dom";

const PostList = (props: { option: string }) => {
	return (
		<div>
			PostList {props.option}
			<Outlet />
		</div>
	);
};

export default PostList;
