import React from "react";

// MUI UI/UX styles
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";

const Footer = () => {
    return (
        <footer>
            <Box sx={styles.footerBox}>
                <Container sx={styles.container}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={3}>
                            <ImageListItem sx={styles.logo}>
                                <img
                                    src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
                                    alt="devprep-logo"
                                />
                            </ImageListItem>
                        </Grid>
                        <Grid item xs={12} sm={3} lineHeight={2}>
                            <Box sx={styles.bottomLine}>ABOUT US</Box>
                            <Box>
                                <Box>Our Story</Box>
                            </Box>
                            <Box>Team members</Box>
                        </Grid>
                        <Grid item xs={12} sm={3} lineHeight={2}>
                            <Box sx={styles.bottomLine}>CONTACT</Box>
                            <Box>Email: devprep@outlook.com.au</Box>
                            <Box>
                                <Link
                                    href="https://github.com/DevPreps"
                                    color="inherit"
                                >
                                    Github
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} lineHeight={2}>
                            <Box sx={styles.bottomLine}>HELP</Box>
                            <Box>Support</Box>
                            <Box>Terms</Box>
                            <Box>Privary</Box>
                        </Grid>
                    </Grid>
                    <Box sx={styles.cp_box}>
                        Copyright &reg; {new Date().getFullYear()} Devprep, Inc.
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;

const styles = {
    footerBox: {
        px: {
            xs: 3,
            sm: 5,
        },
        py: {
            xs: 5,
            sm: 5,
        },
        bgcolor: "#4dabf5",
        color: "white",
    },
    container: {
        maxWidth: "lg",
    },
    logo: {
        width: "62px",
        height: "62px",
    },
    bottomLine: {
        borderBottom: 1,
    },
    cp_box: {
        textAlign: "center",
        pt: {
            xs: 5,
            sm: 5,
        },
        pb: {
            xs: 5,
            sm: 0,
        },
        color: "black",
    },
};
