import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
// import MUI components
import { Box, Button, Stack } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { tagOptions } from "../data";
// import reusable form input components
import { TagsInput, TextFieldInput } from "./FormInput";
// import form data interface
import { IFormInputs } from "./IFormInputs";
import InterviewItems from "./InterviewItems";
// Import WYSIWYG component
import RichTextEditor from "./RichTextEditor";

// define interface for props
interface Props {
    category: string;
    onSubmit: SubmitHandler<IFormInputs>;
    formDefaultValues: IFormInputs;
    validationSchema: yup.AnyObjectSchema;
}

const PostForm = ({
    category,
    formDefaultValues,
    onSubmit,
    validationSchema,
}: Props) => {
    // react hook form
    const methods = useForm<IFormInputs>({
        defaultValues: formDefaultValues,
        resolver: yupResolver(validationSchema),
    });
    const { handleSubmit } = methods;

    return (
        // form provider will pass the control and errors to form input and can be used in testing full render of reusable input components
        <FormProvider {...methods}>
            {/* use 'noValidate' to disable native HTML 5 validation */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextFieldInput helperText="Post title" name="title" />

                {/* only render interview inputs when category==="interview" */}
                {category === "interview" && (
                    <InterviewItems formDefaultValues={formDefaultValues} />
                )}

                {/* TODO - add rich-text editor for post content */}
                <RichTextEditor />

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
                        color="info"
                        sx={styles.publishBtn}
                    >
                        PUBLISH
                    </Button>
                    <Button variant="contained" color="success" type="submit">
                        SAVE AS DRAFT
                    </Button>
                </Stack>
            </Box>
        </FormProvider>
    );
};

const styles = {
    publishBtn: {
        mr: 2,
    },
} as const;
export default PostForm;
