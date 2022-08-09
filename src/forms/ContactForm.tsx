import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import form data interface and validation schema
import { IContactFormInputs } from "./IFormInputs";
import { contactFormSchema } from "./validationSchemas";

// import reusable form input components
import { TextFieldInput } from "./FormInput";

// Import MUI components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// define interface for props
interface Props {
    onSubmit: SubmitHandler<IContactFormInputs>;
}

const ContactForm = ({ onSubmit }: Props) => {
    // react hook form
    const methods = useForm<IContactFormInputs>({
        resolver: yupResolver(contactFormSchema),
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
                <TextFieldInput
                    helperText="Your name"
                    name="name"
                    required={true}
                />
                <TextFieldInput
                    helperText="The subject of your message"
                    name="subject"
                    required={true}
                />
                <TextFieldInput
                    helperText="You email address"
                    name="email"
                    required={true}
                />
                <TextFieldInput
                    helperText="Please leave your message here"
                    name="message"
                    multiline={true}
                    rows={5}
                />
                <Button
                    variant="contained"
                    type="submit"
                    sx={styles.sendButton}
                >
                    SEND
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

export default ContactForm;
