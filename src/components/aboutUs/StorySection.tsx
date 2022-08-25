import React from "react";

import { Box, Paper, Typography } from "@mui/material";

const StorySection = () => {
    return (
        <>
            <Paper sx={styles.bgSection}>
                <Typography sx={styles.bgTitle}>Helping each other</Typography>
                <Typography sx={styles.bgText}>/ DEV PREP /</Typography>
            </Paper>
            <Box>
                <Typography sx={styles.storyTitle}>OurStory</Typography>
                <Typography sx={styles.storyText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Typography>
            </Box>
        </>
    );
};

export default StorySection;

const styles = {
    bgSection: {
        width: "100%",
        height: "250px",
        mt: 2,
        bgcolor: {
            // bg color will changes after site palette is determined
            backgroundColor: "paper",
        },
    },

    bgTitle: {
        fontSize: "40px",
        textAlign: "center",
        mt: 8,
        // Text color will changes after site palette is determined
        color: "main",
    },
    bgText: {
        fontSize: "35px",
        textAlign: "center",
        fontFamily: "fantasy",
        // Text color will changes after site palette is determined
        color: "main",
    },
    storyTitle: {
        fontSize: "30px",
        fontFamily: "Cursive ",
        textAlign: "center",
    },
    storyText: {
        textAlign: "center",
        mt: 4,
    },
};
