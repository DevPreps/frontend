import React, { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import { positionOptions } from "../data";
// import reusable form input components and position data
import { SelectInput, TextFieldInput } from "./FormInput";
// import form data interface and validation schema
import { IMyProfileFormInputs } from "./IFormInputs";
import { myProfileFormSchema } from "./validationSchemas";

// define interface for props
interface Props {
    onSubmit: SubmitHandler<IMyProfileFormInputs>;
    formDefaultValues: IMyProfileFormInputs;
}

const MyProfileForm = ({ onSubmit, formDefaultValues }: Props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    // react hook form
    const methods = useForm<IMyProfileFormInputs>({
        defaultValues: formDefaultValues,
        resolver: yupResolver(myProfileFormSchema),
    });
    const { handleSubmit } = methods;
    return (
        // form provider will pass the control and errors to form input and can be used in testing full render of reusable input components
        <FormProvider {...methods}>
            <Grid
                container
                spacing={2}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={styles.gridContainer}
            >
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        My Profile
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="firstName"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="lastName"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="username"
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="email"
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="jobTitle"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SelectInput
                        helperText=""
                        name="position"
                        options={positionOptions}
                        required={false}
                        disabled={isDisabled}
                        // set defaultValue here to disable MUI warning
                        defaultValue={formDefaultValues["position"]}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldInput
                        helperText=""
                        name="city"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="linkedIn"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldInput
                        helperText=""
                        name="github"
                        required={false}
                        disabled={isDisabled}
                    />
                </Grid>
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
    gridContainer: {
        backgroundColor: "background.paper",
        boxShadow: 3,
        maxWidth: "800px",
        pr: 2,
        py: 3,
    },
    groupButton: { mt: 5 },
    publishBtn: {
        mr: 2,
    },
    saveButton: { px: 4 },
} as const;

export default MyProfileForm;
