import React, { useState } from "react";

// import MUI icons and components
import { BorderColor, Close, Flag } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    Modal,
    Tooltip,
    Typography,
} from "@mui/material";

// define the interface for react props
interface Props {
    operation?: "COMPOSE" | "EDIT" | "REPORT" | "ERROR";
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
            {/* render different button according to the operation prop */}
            {operation === "REPORT" ? (
                <Tooltip title="Report the content">
                    <IconButton aria-label="report" onClick={handleOpen}>
                        <Flag />
                    </IconButton>
                </Tooltip>
            ) : (
                <Button
                    variant="text"
                    startIcon={<BorderColor />}
                    onClick={handleOpen}
                    data-testid="operationBtn"
                >
                    {operation}
                </Button>
            )}

            {/* compose post modal*/}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock //disable MUI default behavior of adds padding to the body tag when a dialog/select menu is opened
            >
                <Box sx={styles.modal}>
                    {/* close button */}
                    <IconButton
                        aria-label="close-btn"
                        onClick={handleClose}
                        sx={styles.closeBtn}
                    >
                        <Close />
                    </IconButton>
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
    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
    },
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
        py: 3,
    },
} as const;

export default PostModalLayout;
