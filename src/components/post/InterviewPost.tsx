import React from "react";

// MUI UI/UX styles
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// MUI icons
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddComment from "./AddComment";

// Defined an interface properites
export interface InterviewPost {
	interviewPost: {
		avatar: string;
		u_username: string;
		date: string;
		job_title: string;
        p_company_name: string;
        p_city: string;
        position_level: string;
		p_description: string;
        job_ads_url: string;
	};
}

const InterviewPost = () => {
	// Add attributes to the properites and passed into components
	const interviewPost: InterviewPost["interviewPost"] = {
		avatar:
			"https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		u_username: "Judy",
		date: "July/2022",
		job_title: "Full Stack Developer",
        p_company_name: "NTT",
        p_city: "Brisbane.City",
        position_level: "Junior",
		p_description:"Experience with JS, HTML and CSS",
        job_ads_url: "https://www.seek.com.au/job/57838262?type=standard#sol=77dd4a4fc54f8f5290feaacef771c75f70cff84c",
			
	};

	return (
		<Box>
			<Box>
				<Paper sx={{ m: 1 }} elevation={0}>
					<Box sx={{ display: "flex", flexDirection: "row", width: "100%"}}>
						<Avatar
							src={interviewPost.avatar}
							alt="avatar"
							sx={{ width: 56, height: 56, mt: 1 }}
						/>
						<Box>
							<CardContent>{interviewPost.u_username}</CardContent>
							<Typography fontSize={12} sx={{ ml: 2 }}>
								{interviewPost.date}
							</Typography>
						</Box>
					</Box>
					<Box>
						<Typography fontSize={30} sx={{ mt: 1 }}>
							{interviewPost.job_title}
						</Typography>
						<Typography fontSize={15} sx={{ mt: 1 }}>
							{interviewPost.p_city}
						</Typography>
					</Box>
					<Box fontFamily="revert" fontSize={20}>
						<p>{interviewPost.p_description}</p>
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

export default InterviewPost