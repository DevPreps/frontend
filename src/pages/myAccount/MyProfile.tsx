import React from "react";

import { Box, Typography } from "@mui/material";
import { SubmitHandler } from "react-hook-form";

// import form, data interface and form defaultValues
import { myProfileFormDefaultValues } from "../../forms/formDefaultValues";
import { IMyProfileFormInputs } from "../../forms/IFormInputs";
import MyProfileForm from "../../forms/MyProfileForm";

// import MUI components

const MyProfile = () => {
    // set defaultValues for the form, so that the form values can be populated when editing a post
    const onSubmit: SubmitHandler<IMyProfileFormInputs> = (
        data: IMyProfileFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <Box sx={styles.box}>
            <Typography variant="h5">My Profile</Typography>
            <MyProfileForm
                formDefaultValues={myProfileFormDefaultValues}
                onSubmit={onSubmit}
            />
        </Box>
    );
};

const styles = {
    box: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        py: 4,
    },
};
export default MyProfile;
