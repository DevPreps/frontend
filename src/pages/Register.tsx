import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import form data interface and validation schema
import { IRegisterFormInputs } from "../forms/IFormInputs";
import { registerFormSchema } from "../forms/validationSchemas";

// import reusable form input components
import { PasswordInput, TextFieldInput } from "../forms/FormInput";

// import MUI components
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Register = () => {
    // react hook form
    const methods = useForm<IRegisterFormInputs>({
        resolver: yupResolver(registerFormSchema),
    });
    const { handleSubmit } = methods;

    //TODO - define onSubmit function to handle login
    const onSubmit: SubmitHandler<IRegisterFormInputs> = (
        data: IRegisterFormInputs
    ) => {
        console.log(data);
    };
    return (
        <Container maxWidth="xl" sx={styles.pageContainer}>
            {/* form provider will pass the control and errors to form input and can be used in testing full render of reusable input components */}
            <FormProvider {...methods}>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={styles.formContainer}
                    noValidate
                >
                    <Typography variant="h1" sx={styles.title}>
                        Join Devprep
                    </Typography>
                    <TextFieldInput
                        helperText="Please enter your email"
                        name="email"
                        variant="outlined"
                    />
                    <TextFieldInput
                        helperText="Please enter your username"
                        name="username"
                        variant="outlined"
                    />
                    <PasswordInput
                        helperText="Please enter your password"
                        name="password"
                        variant="outlined"
                    />
                    <PasswordInput
                        helperText="Please confirm your password"
                        name="confirmPassword"
                        variant="outlined"
                    />
                    <Typography variant="caption">
                        By signing up, you agree to Devprep&apos;s
                        {/* TODO - the links for terms and conditions and privacy Policy need to be updated later */}
                        <Link href="#" target="_blank" sx={styles.link}>
                            Terms and Conditions.
                        </Link>
                        and
                        <Link href="#" target="_blank" sx={styles.link}>
                            Privacy Policy
                        </Link>
                    </Typography>
                    {/* TODO - should link to the reset/email password route  or open a modal*/}
                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={styles.submitBtn}
                    >
                        JOIN NOW
                    </Button>
                    <Stack direction="row" sx={styles.loginLink}>
                        <Typography variant="caption">
                            Already have an account?
                        </Typography>
                        <Link href="/login" target="_blank" sx={styles.link}>
                            Log in here
                        </Link>
                    </Stack>
                </Box>
            </FormProvider>
        </Container>
    );
};
const styles = {
    formContainer: {
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "Column",
        justifyContent: "start",
        width: "100%",
        maxWidth: "500px",
        px: {
            xs: 2,
            md: 3,
        },
        py: 4,
        my: 4,
    },
    link: {
        px: 1,
        textDecoration: "none",
    },
    loginLink: {
        display: "flex",
        alignItems: "center",
    },
    pageContainer: {
        px: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    submitBtn: {
        my: 2,
    },
    title: {
        fontSize: "30px",
        fontWeight: "500",
        pb: 2,
        textAlign: "center",
    },
} as const;

export default Register;
