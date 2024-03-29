import React from "react";

import { Box, Container, Grid, ImageListItem, Paper } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Paper sx={styles.footerBox}>
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
                                <RouteLink
                                    style={styles.routeLink}
                                    to="/about-us"
                                >
                                    About Us
                                </RouteLink>
                            </Box>
                            {/* <Box>
                                <RouteLink to="/about-us">
                                    Team members
                                </RouteLink>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} sm={3} lineHeight={2}>
                            <Box sx={styles.bottomLine}>CONTACT</Box>
                            <Box>
                                <RouteLink
                                    to="/contact"
                                    style={styles.routeLink}
                                >
                                    Contact Us
                                </RouteLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} lineHeight={2}>
                            <Box sx={styles.bottomLine}>HELP</Box>
                            <Box>
                                {/* // TODO - the url will be update later. */}
                                <RouteLink style={styles.routeLink} to="/">
                                    Support
                                </RouteLink>
                            </Box>
                            <Box>
                                {/* // TODO - the url will be update later. */}
                                <RouteLink style={styles.routeLink} to="/">
                                    Terms
                                </RouteLink>
                            </Box>
                            <Box>
                                {/* // TODO - the url will be update later. */}
                                <RouteLink style={styles.routeLink} to="/">
                                    Privacy
                                </RouteLink>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={styles.cp_box}>
                        Copyright &reg; {new Date().getFullYear()} Devprep, Inc.
                    </Box>
                </Container>
            </Paper>
        </footer>
    );
};

export default Footer;

const styles = {
    footer: {
        zIndex: 1205,
    },
    footerBox: {
        px: {
            xs: 3,
            sm: 5,
        },
        py: {
            xs: 5,
            sm: 5,
        },
        bgcolor: {
            // bg color will changes after site palette is determined
            backgroundColor: "paper",
        },
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
    },
    routeLink: {
        textDecoration: "none",
    },
};
