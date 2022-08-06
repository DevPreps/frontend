import React, { useState } from "react";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// import MUI icons
import AddIcon from "@mui/icons-material/Add";

// define the interface for react props
interface Props {
    operation?: "COMPOSE" | "EDIT";
}

const PostModalLayout: React.FC<Props> = ({
    children,
    operation = "COMPOSE",
}) => {
    // state management
    const [open, setOpen] = useState(false);
    // open and close modal function
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpen}
                data-testid="composeBtn"
            >
                {operation}
            </Button>
            {/* compose post modal*/}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modal}>
                    {/* close button */}
                    <Grid container justifyContent="flex-end">
                        <Button onClick={handleClose}>X</Button>
                    </Grid>
                    {/* Modal Title */}
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        align="center"
                        sx={styles.title}
                    >
                        {operation}
                    </Typography>
                    {/* compose post form */}
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

const styles = {
    modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: 800,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        // allow scroll
        overflowY: "scroll",
        maxHeight: "85%",
    },
    title: {
        mb: 2,
    },
} as const;

export default PostModalLayout;
