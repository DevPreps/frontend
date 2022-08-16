import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// import form data interface and validation schema
import { ILoginFormInputs } from "./IFormInputs";
import { loginFormSchema } from "./validationSchemas";

// import reusable form input components and position data
import { TextFieldInput } from "./FormInput";

// Import MUI components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// define interface for props
interface Props {
    onSubmit: SubmitHandler<ILoginFormInputs>;
    formDefaultValues: ILoginFormInputs;
}

const LoginForm = ({ onSubmit, formDefaultValues }: Props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    // react hook form
    const methods = useForm<ILoginFormInputs>({
        defaultValues: formDefaultValues,
        resolver: yupResolver(loginFormSchema),
    });
    const { handleSubmit } = methods;
    return (
        // form provider will pass the control and errors to form input and can be used in testing full render of reusable input components
        <FormProvider {...methods}>
            <Grid
                container
                spacing={3}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={styles.gridContainer}
            >
                    <TextFieldInput
                        helperText="Please enter your email"
                        name="email"
                    />
                    <TextFieldInput
                        helperText="Please enter your password"
                        name="password"
                        type="password"
                    />
                <Stack spacing={3} sx={{ pl: 3, mt: 3 }}>
                    {/* TODO - should link to the change password route  or open a modal*/}
                    <Button variant="text" href="#">
                        CHANGE MY PASSWORD
                    </Button>
                    {isDisabled ? (
                        <Button
                            variant="contained"
                            type="submit"
                            color="success"
                            sx={styles.publishBtn}
                            onClick={() => setIsDisabled(false)}
                        >
                            Edit My Profile
                        </Button>
                    ) : (
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={styles.groupButton}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                sx={styles.saveButton}
                            >
                                SAVE
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={() => setIsDisabled(true)}
                            >
                                CANCEL
                            </Button>
                        </Stack>
                    )}
                </Stack>
            </Grid>
        </FormProvider>
    );
};
const styles = {
    gridContainer: { maxWidth: "800px" },
    groupButton: { mt: 5, ml: 3 },
    publishBtn: {
        mr: 2,
    },
    saveButton: { px: 4 },
} as const;

export default LoginForm;

