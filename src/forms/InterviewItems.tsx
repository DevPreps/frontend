import React from "react";

import { Grid } from "@mui/material";

import { positionOptions } from "../data";
// import reusable form input components
import { SelectInput, TextFieldInput } from "./FormInput";
// import position options and form data interface
import { IFormInputs } from "./IFormInputs";

// define interface for props
interface Props {
    formDefaultValues: IFormInputs;
}

const InterviewItems = ({ formDefaultValues }: Props) => {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                {/* companyName */}
                <TextFieldInput helperText="companyName" name="companyName" />
            </Grid>
            <Grid item xs={12} md={6} sx={styles.city}>
                {/* city */}
                <TextFieldInput helperText="city" name="city" />
            </Grid>
            <Grid item xs={12} sm={6}>
                {/* job title */}
                <TextFieldInput helperText="jobTitle" name="jobTitle" />
            </Grid>
            <Grid item xs={12} sm={6} sx={styles.position}>
                {/* position */}
                <SelectInput
                    helperText="Choose a position for your interview"
                    name="position"
                    options={positionOptions}
                    defaultValue={
                        formDefaultValues["position"] || "Full Stack Developer"
                    }
                />
            </Grid>
        </Grid>
    );
};

const styles = {
    city: {
        pl: { md: 1 },
    },
    position: {
        pl: { sm: 1 },
    },
} as const;

export default InterviewItems;
