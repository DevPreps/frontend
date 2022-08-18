import React from "react";
import { SubmitHandler } from "react-hook-form";

// import form, data interface and form defaultValues
import MyProfileForm from "../../forms/MyProfileForm";
import { IMyProfileFormInputs } from "../../forms/IFormInputs";
import { myProfileFormDefaultValues } from "../../forms/formDefaultValues";

// import MUI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
        py:4,
        height: "calc(100vh - 64px - 305px)", // 100vh - header height - footer height
        minHeight: "630px",
    },
};
export default MyProfile;
