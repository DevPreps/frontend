import React from "react";

// MUI UI/UX styles
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Import components files
import Comments from "./Comments";
import PostDetail from "./PostDetail";
import AddComment from "./AddComment";

const ViewPost = () => {
	return (
		<div>
			<Grid container>
				<Grid item xs={12} sm={2}></Grid>
				<Grid item xs={12} sm={8}>
					<Stack spacing={2} sx={{ mt: 12 }}>
						<PostDetail />
						<Comments />
						<Button>Load More</Button>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={4}></Grid>
			</Grid>
		</div>
	);
};

export default ViewPost;
