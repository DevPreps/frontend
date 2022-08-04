import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import form data interface
import { IGeneralFormInputs } from "./IFormInputs";

// import tags and categories
import { categoryOptions, tagOptions } from "../data";

// import reusable form input components
import { SelectInput, TagsInput, TextFieldInput } from "./FormInput";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// TODO - Define Yup validation schema, will be updated later
const validationSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    content: yup.string().required(),
    tags: yup.array().min(1).required(),
});

interface Props {
    onSubmit: SubmitHandler<IGeneralFormInputs>;
    formDefaultValues: IGeneralFormInputs;
}

const GeneralPostForm = ({ onSubmit, formDefaultValues }: Props) => {
    // react hook form
    const methods = useForm<IGeneralFormInputs>({
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
                {/* post content */}
                <TextFieldInput
                    helperText="Post content"
                    name="content"
                    multiline
                    rows={8}
                />
                {/* post tags */}
                <TagsInput
                    helperText="choose tags for you post"
                    name="tags"
                    tags={tagOptions}
                />
                {/* publish and save to draft buttons */}
                <Stack direction="row">
                    <Button
                        variant="contained"
                        type="submit"
                        color="success"
                        sx={styles.publishBtn}
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
const styles = {
    publishBtn: {
        mr: 2,
    },
} as const;
export default GeneralPostForm;
