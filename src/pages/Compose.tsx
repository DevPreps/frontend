import React from "react";
import {
	NewGeneralPost,
	NewInterviewPost,
	NewLearnPost,
	NewProjectPost,
} from "./";

const Compose = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			{/* use useLocation to get category, or pass category as props */}
			Compose A category Post
			<NewGeneralPost />
			<NewInterviewPost />
			<NewLearnPost />
			<NewProjectPost />
		</div>
	);
};

export default Compose;
