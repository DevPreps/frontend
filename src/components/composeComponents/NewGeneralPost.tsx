import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import reusable form input component
import { SelectInput, TextFieldInput } from "./FormInput";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";

// Define Yup validation schema, will be updated later
const validationSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    tags: yup.string().required(),
});

const NewGeneralPost = () => {
    // tag and category options (will be updated later)
    const tagOptions = ["frontend", "backend", "fullstack", "database"];
    const categoryOptions = ["learn", "interview", "project", "general"];

    // state management
    const [open, setOpen] = useState(false);

    // react hook form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        // mode: "onChange",
        resolver: yupResolver(validationSchema),
    });

    // open and close function
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // interface for form object
    interface IFormInputs {
        category: string;
        title: string;
        description: string;
        tags: string;
        options: string[];
        rows: number;
    }
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
                {/* compose post form */}
                <Box
                    component="form"
                    sx={style}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* close button */}
                    <Grid container justifyContent="flex-end">
                        ß <Button onClick={handleClose}>X</Button>
                    </Grid>
                    {/* Modal Title */}
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={{ mb: 2 }}
                    >
                        COMPOSE A GENERAL POST
                    </Typography>
                    {/* post category */}
                    <SelectInput
                        control={control}
                        error={errors.category}
                        helperText="Choose a category for your post"
                        name="category"
                        options={categoryOptions}
                    />
                    {/* post title */}
                    <TextFieldInput
                        control={control}
                        error={errors.title}
                        helperText="Post title"
                        name="title"
                        rows={1}
                    />
                    {/* post content                    */}
                    <TextFieldInput
                        control={control}
                        error={errors.description}
                        helperText="Post content"
                        name="description"
                        rows={8}
                    />
                    {/* post tags   */}
                    <SelectInput
                        control={control}
                        error={errors.tags}
                        helperText="choose tags for you post"
                        name="tags"
                        options={tagOptions}
                    />
                    {/* publish and save to draft buttons   */}
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="success"
                        >
                            PUBLISH
                        </Button>
                        <Button variant="contained" type="submit">
                            SAVE TO DRAFT
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
};

const style: object = {
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
};

export default NewGeneralPost;
