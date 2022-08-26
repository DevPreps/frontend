import React from "react";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

//import child components files
import StorySection from "../components/aboutUs/StorySection";
import TeamCards from "../components/aboutUs/TeamCards";

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
