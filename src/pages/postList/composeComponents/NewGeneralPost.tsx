import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

// import form data interface
import { IFormInputs } from "../PostForms/IFormInputs";

// Import MUI components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";

// import MUI icons
import AddIcon from "@mui/icons-material/Add";
import GeneralPostForm from "../PostForms/GeneralPostForm";

const NewGeneralPost = () => {
    // state management
    const [open, setOpen] = useState(false);
    // open and close modal function
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // handle form submission
    const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
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
                <>
                    {/* close button */}
                    <Grid container justifyContent="flex-end">
                        <Button onClick={handleClose}>X</Button>
                    </Grid>
                    {/* compose post form */}
                    <GeneralPostForm
                        onSubmit={onSubmit}
                        handleClose={handleClose}
                    />
                </>
            </Modal>
        </div>
    );
};

export default NewGeneralPost;
