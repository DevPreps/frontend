import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema 
import { IInterviewFormInputs } from "../../../forms/IFormInputs";
import { interviewFormSchema } from "../../../forms/validationSchemas";

// import default values for the form
 import { interviewFormDefaultValues } from "../../../forms/formDefaultValues";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// import MUI icons
import AddIcon from "@mui/icons-material/Add";
import PostForm from "../../../forms/PostForm";

const CreateInterviewPost = () => {

    // state management
    const [open, setOpen] = useState(false);
    // open and close modal function
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // handle form submission
    const onSubmit: SubmitHandler<IInterviewFormInputs> = (
        data: IInterviewFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <div>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpen}
            >
                Compose
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
                        COMPOSE A INTERVIEW POST
                    </Typography>
                    {/* compose post form */}
                    <PostForm
                        onSubmit={onSubmit}
                        formDefaultValues={interviewFormDefaultValues}
                        validationSchema={interviewFormSchema}
                    />
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

export default CreateInterviewPost;
