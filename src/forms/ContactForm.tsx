import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// import form data interface, validation schema
import { contactFormDefaultValues } from "./formDefaultValues";
// import reusable form input components
import { TextFieldInput } from "./FormInput";
// import form default values which are needed to fix MUI uncontrolled/controlled component warning and error
import { IContactFormInputs } from "./IFormInputs";
import { contactFormSchema } from "./validationSchemas";

// define interface for props
interface Props {
    emailError: null | string;
    isError: boolean;
    isSucceed: boolean;
    onSubmit: SubmitHandler<IContactFormInputs>;
}

const ContactForm = ({ emailError, isError, isSucceed, onSubmit }: Props) => {
    // react hook form
    const methods = useForm<IContactFormInputs>({
        resolver: yupResolver(contactFormSchema),
        defaultValues: contactFormDefaultValues,
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
                <TextFieldInput helperText="Your name" name="name" />
                <TextFieldInput
                    helperText="The subject of your message"
                    name="subject"
                />
                <TextFieldInput helperText="You email address" name="email" />
                <TextFieldInput
                    helperText="Please leave your message here"
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
                    SEND
                </Button>
                <Typography
                    variant="body1"
                    data-testid="successMessage"
                    sx={
                        isSucceed || isError
                            ? styles.showMessage(isError)
                            : styles.hideMessage
                    }
                >
                    {isSucceed &&
                        "Thanks for you message, we will get back to your ASAP."}
                    {isError &&
                        (emailError ||
                            "Something went wrong, please try again later")}
                </Typography>
            </Grid>
        </FormProvider>
    );
};
const styles = {
    gridContainer: {
        px: 2,
        maxWidth: "800px",
    },
    hideMessage: {
        p: 2,
        visibility: "hidden",
        mt: 2,
    },
    showMessage(isError: boolean) {
        return {
            p: 2,
            mt: 2,
            border: 1,
            borderColor: isError ? "error.main" : "success.main",
            borderRadius: 1,
        };
    },
    sendButton: { px: 4 },
} as const;

export default ContactForm;
