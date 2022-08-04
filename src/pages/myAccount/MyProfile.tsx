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
