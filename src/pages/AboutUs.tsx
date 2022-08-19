import React from "react";

// Link to route
import { Link } from "react-router-dom";

//MUI styles
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

//import child components files

import TeamCards from "../components/aboutUs/TeamCards";
import StorySection from "../components/aboutUs/StorySection";

const AboutUs = () => {
    return (
        <Stack spacing={5}>
            <StorySection />
            <Divider />
            <Typography sx={styles.teamTitle}>Meet the Team</Typography>
            <TeamCards />
            <Divider />
            <Box sx={styles.buttonBox}>
                <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    color="success"
                    size="small"
                >
                    Contact Us
                </Button>
            </Box>
            <Divider />
        </Stack>
    );
};

export default AboutUs;

const styles = {
    teamTitle: {
        fontSize: "30px",
        fontFamily: "Cursive ",
        textAlign: "center",
    },

    buttonBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
};
