import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface and validation schema
import { IInterviewFormInputs } from "../../../forms/IFormInputs";
import { interviewFormSchema } from "../../../forms/validationSchemas";

// import form component
import PostForm from "../../../forms/PostForm";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// import MUI icons
import BorderColorIcon from "@mui/icons-material/BorderColor";

const UpdateInterviewPost = () => {
    // TODO - useState and useEffect to fetch defaultValue from backend.
    const formDefaultValues: IInterviewFormInputs = {
        category: "interview",
        title: "test title",
        companyName: "test company",
        city: "Brisbane",
        jobTitle: "test job title",
        position: "Front End Developer",
        content: "test content",
        tags: ["frontend", "backend"],
    };
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
                className="editPostBtn"
                startIcon={<BorderColorIcon />}
                onClick={handleOpen}
            >
                Edit
            </Button>
            {/* update post modal*/}
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
                    {/* TODO - title will be changed to "EDIT" */}
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        align="center"
                        sx={styles.title}
                    >
                        EDIT AN INTERVIEW POST
                    </Typography>
                    {/* update post form */}
                    <PostForm
                        formDefaultValues={formDefaultValues}
                        onSubmit={onSubmit}
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

export default UpdateInterviewPost;
