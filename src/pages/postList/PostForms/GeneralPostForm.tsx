import React, { MouseEventHandler } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import form data interface
import { IFormInputs } from "./IFormInputs";
// import reusable form input components
import {
    SelectInput,
    TagsInput,
    TextFieldInput,
} from "../../../components/FormInput";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Define Yup validation schema, will be updated later
const validationSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array().required(),
});
interface Props {
    onSubmit: SubmitHandler<IFormInputs>;
    handleClose: (e: MouseEventHandler<HTMLAnchorElement>) => void;
}

const GeneralPostForm = ({ onSubmit, handleClose }: Props) => {
    // tags and categories, (will be updated later)
    const tagOptions = ["frontend", "backend", "fullstack", "database"];
    const categoryOptions = ["learn", "interview", "project", "general"];
    // react hook form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        // mode: "onChange",
        resolver: yupResolver(validationSchema),
    });
    return (
        <Box component="form" sx={style.form} onSubmit={handleSubmit(onSubmit)}>
            {/* Modal Title */}
            <Typography
                id="modal-modal-title"
                variant="h5"
                align="center"
                sx={style.title}
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
            <TagsInput
                control={control}
                error={errors.tags}
                helperText="choose tags for you post"
                name="tags"
                tags={tagOptions}
            />
            {/* publish and save to draft buttons   */}
            <Stack direction="row">
                <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    sx={style.publishBtn}
                >
                    PUBLISH
                </Button>
                <Button variant="contained" type="submit">
                    SAVE TO DRAFT
                </Button>
            </Stack>
        </Box>
    );
};
const style = {
    form: {
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
    },
    title: {
        mb: 2,
    },
    publishBtn: {
        mr: 2,
    },
} as const;
export default GeneralPostForm;
