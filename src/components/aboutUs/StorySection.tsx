import React from "react";

//MUI styles
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StorySection = () => {
    return (
        <>
            <Box sx={styles.bgSection}>
                <Typography sx={styles.bgTitle}>Helping each other</Typography>
                <Typography sx={styles.bgText}>/ DEV PREP /</Typography>
            </Box>
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
        bgcolor: "#e8e8e8",
        mt: 2,
    },

    storySection: {},

    bgTitle: {
        fontSize: "40px",
        textAlign: "center",
        mt: 8,
        color: "#52a0a8",
    },
    bgText: {
        fontSize: "35px",
        textAlign: "center",
        fontFamily: "fantasy",
        color: "#050a30",
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
