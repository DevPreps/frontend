import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
// Import MUI components
import { Button, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// import form data interface and validation schema
import { violationOptions } from "../data";
// import reusable form input components
import { SelectInput, TextFieldInput } from "./FormInput";
import { IReportFormInputs } from "./IFormInputs";
import { reportFormSchema } from "./validationSchemas";

// define interface for props
interface Props {
    formDefaultValues: IReportFormInputs;
    onSubmit: SubmitHandler<IReportFormInputs>;
}

const ReportForm = ({ onSubmit, formDefaultValues }: Props) => {
    // react hook form
    const methods = useForm<IReportFormInputs>({
        defaultValues: formDefaultValues,
        resolver: yupResolver(reportFormSchema),
    });
    const { handleSubmit } = methods;
    return (
        // form provider will pass the control and errors to form input and can be used in testing full render of reusable input components
        <FormProvider {...methods}>
            <Grid
                item
                md={6}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={styles.gridContainer}
                noValidate
            >
                {/* TODO - The url should be pop up automatically */}
                <TextFieldInput
                    helperText="The url of the post/comment"
                    name="reportedUrl"
                    required={true}
                />
                <SelectInput
                    helperText="Please choose the violation type"
                    name="violationType"
                    options={violationOptions}
                    defaultValue={formDefaultValues["violationType"] || "other"}
                />
                <TextFieldInput
                    helperText="
                    Please provide any additional information or context that will help us understand and handle the report."
                    name="message"
                    multiline={true}
                    rows={5}
                />
                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={styles.sendButton}
                >
                    SEND REPORT
                </Button>
            </Grid>
        </FormProvider>
    );
};
const styles = {
    gridContainer: {
        px: 2,
        maxWidth: "800px",
    },
    sendButton: { px: 4 },
} as const;

export default ReportForm;
