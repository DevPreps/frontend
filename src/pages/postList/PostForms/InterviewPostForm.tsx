import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import form data interface
import { IInterviewFormInputs } from "./IFormInputs";
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
    tags: yup.array().min(1).required(),
});
interface Props {
    onSubmit: SubmitHandler<IInterviewFormInputs>;
    formDefaultValues: IInterviewFormInputs;
}

const InterviewPostForm = ({ onSubmit, formDefaultValues }: Props) => {
    // TODO - tags,categories and positions will be updated later
    const tagOptions = ["frontend", "backend", "fullstack", "database"];
    const categoryOptions = ["learn", "interview", "project", "general"];
    const positionOptions = [
        "Front End Developer",
        "Back End Developer",
        "Full Stack Developer",
        "Software Engineer",
    ];
    // react hook form
    const methods = useForm<IInterviewFormInputs>({
        // mode: "onChange",
        defaultValues: formDefaultValues,
        resolver: yupResolver(validationSchema),
    });
    const { handleSubmit } = methods;

    return (
        // form provider will pass the control and errors to form input and can be used in testing full render of reusable input components
        <FormProvider {...methods}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                {/* post category */}
                <SelectInput
                    helperText="Choose a category for your post"
                    name="category"
                    options={categoryOptions}
                />

                {/* post title */}
                <TextFieldInput helperText="Post title" name="title" />
                <Grid container>
                    <Grid item xs={12} md={6}>
                        {/* companyName */}
                        <TextFieldInput
                            helperText="companyName"
                            name="companyName"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={style.city}>
                        {/* city */}
                        <TextFieldInput helperText="city" name="city" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        {/* job title */}
                        <TextFieldInput helperText="jobTitle" name="jobTitle" />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={style.position}>
                        {/* position */}
                        <SelectInput
                            helperText="Choose a position for your interview"
                            name="position"
                            options={positionOptions}
                        />
                    </Grid>
                </Grid>
                {/* TODO - add rich-text editor */}
                {/* post content                    */}
                <TextFieldInput
                    helperText="Post content"
                    name="content"
                    multiline
                    rows={8}
                />

                {/* post tags   */}
                <TagsInput
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
        </FormProvider>
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
