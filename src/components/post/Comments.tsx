import React from "react";

// MUI UI/UX styles
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import components files
import AddComment from "./AddComment";

// Defined an interface properites
export interface CommentProps {
	comments: {
		avatar: string;
		u_username: string;
		date: string;
		c_content: string;
	};
}

const Comments = () => {
	// Add attributes to the properites and passed into components
	const comments: CommentProps["comments"] = {
		avatar:
			"https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		u_username: "Sammi",
		date: "July/2022",
		c_content: "Thanks for share.",
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
			<Box>
				<Card sx={{ m: 1 }}>
					<Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
						<Avatar
							src={comments.avatar}
							alt="avatar"
							sx={{ width: 30, height: 30, mt: 1, ml: 1 }}
						></Avatar>
						<CardContent>{comments.u_username}</CardContent>
						<CardContent>{comments.date}</CardContent>
					</Box>
					<Box sx={{ ml: 1 }}>
						<Typography>{comments.c_content}</Typography>
					</Box>
					<Box sx={{ ml: "70%", display: "flex", flexDirection: "row" }}>
						<AddComment />
					</Box>
				</Card>
				<Card sx={{ m: 1 }}>
					<Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
						<Avatar
							src="https://images.pexels.com/photos/623305/pexels-photo-623305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="avatar"
							sx={{ width: 30, height: 30, mt: 1, ml: 1 }}
						></Avatar>
						<CardContent>Username</CardContent>
						<CardContent>Date</CardContent>
					</Box>
					<Box sx={{ ml: 1 }}>
						<Typography>Good Article</Typography>
					</Box>
					<Box sx={{ ml: "70%" }}>
						<AddComment />
					</Box>
				</Card>
			</Box>
		</Box>
	);
};

export default Comments;
