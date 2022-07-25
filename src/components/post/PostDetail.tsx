import React from "react";

// MUI UI/UX styles
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// MUI icons
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import AddComment from "./AddComment";

// Defined an interface properites
export interface PostDetail {
	postDetail: {
		avatar: string;
		u_username: string;
		date: string;
		p_title: string;
		p_description: string;
	};
}

const PostDetail = () => {
	// Add attributes to the properites and passed into components
	const postDetail: PostDetail["postDetail"] = {
		avatar:
			"https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		u_username: "Mary",
		date: "July/2022",
		p_title: "React Components",
		p_description:
			"Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.",
	};

	return (
		<Box>
			<Box>
				<Paper sx={{ m: 1 }} elevation={0}>
					<Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
						<Avatar
							src={postDetail.avatar}
							alt="avatar"
							sx={{ width: 56, height: 56, mt: 1 }}
						/>
						<Box>
							<CardContent>{postDetail.u_username}</CardContent>
							<Typography fontSize={12} sx={{ ml: 2 }}>
								{postDetail.date}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography fontSize={30} sx={{ mt: 1 }}>
							{postDetail.p_title}
						</Typography>
					</Box>
					<Box fontFamily="revert" fontSize={20}>
						<p>{postDetail.p_description}</p>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
						<Button>
							<ThumbUpOffAltIcon />
						</Button>
						<Button>
							<BookmarkAddOutlinedIcon />
						</Button>
						<Button>
							<AddComment />
						</Button>
					</Box>
				</Paper>
			</Box>
		</Box>
	);
};

export default PostDetail;
