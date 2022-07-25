import React from "react";

// MUI UI/UX styles
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// MUI icons
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

// styled the child modal
const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "28%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "white",
	border: "2px solid #000",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const AddComment = () => {
	// Set Button open with modal and set modal close with cancel button
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button
				onClick={handleOpen}
				size="small"
				sx={{ width: 25, height: 25, mt: 1, m: 1 }}
			>
				<ModeCommentOutlinedIcon />
			</Button>
			<Modal
				hideBackdrop
				open={open}
				onClose={handleClose}
				aria-labelledby="child-modal-title"
				aria-describedby="child-modal-description"
			>
				<Box sx={{ ...style, width: 250, mt: 10, ml: 10 }}>
					<form>
						<TextField
							id="outlined-multiline-static"
							label="Leave your comment"
							variant="filled"
							multiline
							rows={5}
							sx={{ width: "80%", mt: 2 }}
						/>
						{/* <TextField label="Type your reply"></TextField> */}
					</form>

					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Send</Button>
				</Box>
			</Modal>
		</React.Fragment>
	);
};

export default AddComment;
