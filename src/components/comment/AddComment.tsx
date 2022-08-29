import React from "react";

// mui icons
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// mui styles
import { Box, Button, IconButton, Modal, TextField } from "@mui/material";

const AddComment = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton onClick={handleOpen}>
                <ChatBubbleOutlineIcon />
            </IconButton>
            <Modal open={open} onClose={handleClose}>
                <Box sx={styles.modelBox}>
                    <form>
                        <TextField
                            id="outlined-multiline-static"
                            label="Leave your comment"
                            variant="filled"
                            multiline
                            rows={5}
                            sx={{ width: "100%", mt: 2 }}
                        />
                        <Box sx={styles.btnBox}>
                            <Button sx={styles.btnS} variant="contained">
                                Submit
                            </Button>
                            <Button sx={styles.btnC} variant="contained">
                                Cancel
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default AddComment;

const styles = {
    modelBox: {
        position: "absolute" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    },
    btnBox: {
        display: "flex",
        flexDirection: "row",
        gap: 1,
        m: 1,
    },
    btnS: {
        border: "2px solid #4caf50",
        color: "#4caf50",
    },
    btnC: {
        border: "2px solid #ef5350",
        color: "#ef5350",
    },
};
