import React from "react";
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
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

// Define Yup validation schema, will be updated later
const validationSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    companyName: yup.string().required(),
    city: yup.string().required(),
    jobTitle: yup.string().required(),
    position: yup.string().required(),
    content: yup.string().required(),
    tags: yup.array().required(),
});
interface Props {
    onSubmit: SubmitHandler<IFormInputs>;
}

const InterviewPostForm = ({ onSubmit }: Props) => {
    // tags and categories, (will be updated later)
    const tagOptions = ["frontend", "backend", "fullstack", "database"];
    const categoryOptions = ["learn", "interview", "project", "general"];
    const positionOptions = [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "Software Engineer",
    ];
    const FormDefaultValues: IFormInputs = {
        category: "interview",
        title: "",
        companyName: "",
        city: "",
        jobTitle: "",
        position: "",
        content: "",
        tags: [],
    };

    // react hook form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>({
        // mode: "onChange",
        defaultValues: FormDefaultValues,
        resolver: yupResolver(validationSchema),
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                type="password"
            />
            <Grid container>
                <Grid xs={12} md={6}>
                    {/* companyName */}
                    <TextFieldInput
                        control={control}
                        error={errors.companyName}
                        helperText="companyName"
                        name="companyName"
                        type="password"
                    />
                </Grid>
                <Grid xs={12} md={6} sx={style.city}>
                    {/* city */}
                    <TextFieldInput
                        control={control}
                        error={errors.city}
                        helperText="city"
                        name="city"
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12} sm={6}>
                    {/* job title */}
                    <TextFieldInput
                        control={control}
                        error={errors.jobTitle}
                        helperText="jobTitle"
                        name="jobTitle"
                    />
                </Grid>
                <Grid xs={12} sm={6} sx={style.position}>
                    {/* position */}
                    <SelectInput
                        control={control}
                        error={errors.position}
                        helperText="Choose a position for your interview"
                        name="position"
                        options={positionOptions}
                    />
                </Grid>
            </Grid>
            {/* post content                    */}
            <TextFieldInput
                control={control}
                error={errors.content}
                helperText="Post content"
                name="content"
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
    city: {
        paddingLeft: { md: 1 },
    },
    position: {
        paddingLeft: { sm: 1 },
    },
    publishBtn: {
        mr: 2,
    },
} as const;
export default InterviewPostForm;
