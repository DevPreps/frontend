import React from "react";
import MyProfileForm from "../../forms/MyProfileForm";
import { SubmitHandler } from "react-hook-form";
import { IMyProfileFormInputs } from "../../forms/IFormInputs";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { myProfileFormDefaultValues } from "../../forms/formDefaultValues";

const MyProfile = () => {
    // set defaultValues for the form, so that the form values can be populated when editing a post
    // default value is a prop for GeneralPostForm

    const onSubmit: SubmitHandler<IMyProfileFormInputs> = (
        data: IMyProfileFormInputs
    ) => {
        console.log("data", data);
    };

    return (
        <Box>
            <Typography variant="h5" sx={{ py: 3 }}>
                My Profile
            </Typography>
            <MyProfileForm
                formDefaultValues={myProfileFormDefaultValues}
                onSubmit={onSubmit}
            />
        </Box>
    );
};

export default MyProfile;
