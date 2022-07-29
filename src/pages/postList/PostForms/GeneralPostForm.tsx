import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import form data interface
import { IGeneralFormInputs } from "./IFormInputs";
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

// Define Yup validation schema, will be updated later
const validationSchema = yup.object().shape({
    category: yup.string().required(),
    title: yup.string().required(),
    content: yup.string().required(),
    tags: yup.array().required(),
});
interface Props {
    onSubmit: SubmitHandler<IGeneralFormInputs>;
    formDefaultValues: IGeneralFormInputs;
}

const GeneralPostForm = ({ onSubmit, formDefaultValues }: Props) => {
    // tags and categories, (will be updated later)
    const tagOptions = ["frontend", "backend", "fullstack", "database"];
    const categoryOptions = ["learn", "interview", "project", "general"];
    // react hook form
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IGeneralFormInputs>({
        // mode: "onChange",
        defaultValues: formDefaultValues,
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
            />
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
    publishBtn: {
        mr: 2,
    },
} as const;
export default GeneralPostForm;
