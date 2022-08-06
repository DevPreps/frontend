import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import form data interface
import { IFormInputs } from "./IFormInputs";

// import tags and categories
import { categoryOptions, positionOptions, tagOptions } from "../data";

// import reusable form input components
import { SelectInput, TagsInput, TextFieldInput } from "./FormInput";

// Import MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// define interface for props
interface Props {
    onSubmit: SubmitHandler<IFormInputs>;
    formDefaultValues: IFormInputs;
    validationSchema: yup.AnyObjectSchema;
}

const PostFormNew = ({
    formDefaultValues,
    onSubmit,
    validationSchema,
}: Props) => {
    const [category, setCategory] = useState(formDefaultValues.category);
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
                {/* as different category post has different data interface and validation schema, the user should not be allowed to choose the category here */}
                <SelectInput
                    disabled={true}
                    helperText="Choose a category for your post"
                    name="category"
                    options={categoryOptions}
                    handleChange={setCategory}
                    defaultValue={formDefaultValues["category"]}
                />

                <TextFieldInput helperText="Post title" name="title" />

                {/* only render interview inputs when category==="interview" */}
                {category === "interview" && (
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            {/* companyName */}
                            <TextFieldInput
                                helperText="companyName"
                                name="companyName"
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={styles.city}>
                            {/* city */}
                            <TextFieldInput helperText="city" name="city" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {/* job title */}
                            <TextFieldInput
                                helperText="jobTitle"
                                name="jobTitle"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} sx={styles.position}>
                            {/* position */}
                            <SelectInput
                                helperText="Choose a position for your interview"
                                name="position"
                                options={positionOptions}
                                defaultValue={
                                    formDefaultValues["position"] || ""
                                }
                            />
                        </Grid>
                    </Grid>
                )}

                {/* TODO - add rich-text editor for post content */}
                <TextFieldInput
                    helperText="Post content"
                    name="description"
                    multiline
                    rows={8}
                />

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
                        sx={styles.publishBtn}
                    >
                        PUBLISH
                    </Button>
                    <Button variant="contained" type="submit">
                        SAVE AS DRAFT
                    </Button>
                </Stack>
            </Box>
        </FormProvider>
    );
};

const styles = {
    city: {
        pl: { md: 1 },
    },
    position: {
        pl: { sm: 1 },
    },
    publishBtn: {
        mr: 2,
    },
} as const;
export default PostFormNew;
