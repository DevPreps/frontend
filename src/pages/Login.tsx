import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// import reusable form input components
import { PasswordInput, TextFieldInput } from "../forms/FormInput";
// import form data interface and validation schema
import { ILoginFormInputs } from "../forms/IFormInputs";
import { loginFormSchema } from "../forms/validationSchemas";

const Login = () => {
    // react hook form
    const methods = useForm<ILoginFormInputs>({
        resolver: yupResolver(loginFormSchema),
    });
    const { handleSubmit } = methods;

    //TODO - define onSubmit function to handle login
    const onSubmit: SubmitHandler<ILoginFormInputs> = (
        data: ILoginFormInputs
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
                        Login
                    </Typography>
                    <TextFieldInput
                        helperText="Please enter your email"
                        name="email"
                        variant="outlined"
                    />
                    <PasswordInput
                        helperText="Please enter your password"
                        name="password"
                        variant="outlined"
                    />
                    {/* TODO - should link to the reset/email password route  or open a modal*/}
                    <Button variant="contained" color="success" type="submit">
                        LOG IN
                    </Button>
                    <Link href="/" target="_blank" sx={styles.pwLink}>
                        Forgot password?
                    </Link>
                    <Stack direction="row" sx={styles.signup}>
                        <Typography variant="caption">
                            Don&apos;t have an account yet?
                        </Typography>
                        <Link href="/register" target="_blank" sx={styles.link}>
                            Sign up now
                        </Link>
                    </Stack>
                    <Typography variant="caption" sx={styles.terms}>
                        By logging in with DevPrep you agree to Devprep&apos;s
                        {/* TODO - the links for terms and conditions and privacy Policy need to be updated later */}
                        <Link href="#" target="_blank" sx={styles.link}>
                            Terms and Conditions.
                        </Link>
                        Devprep will handle your personal information in
                        accordance with its
                        <Link href="#" target="_blank" sx={styles.link}>
                            Privacy Policy
                        </Link>
                    </Typography>
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
    },
    pageContainer: {
        px: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
    },
    pwLink: {
        fontSize: "14px",
        py: 2,
        textDecoration: "none",
    },
    signup: {
        alignItems: "center",
    },
    terms: {
        color: "text.secondary",
    },
    title: {
        fontSize: "30px",
        fontWeight: "500",
        textAlign: "center",
    },
} as const;

export default Login;
