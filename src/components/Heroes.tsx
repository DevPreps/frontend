import React from "react";

// import MUI components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Heroes = () => {
    return (
        <Container maxWidth="xl" sx={styles.container}>
            <Typography variant="h2" sx={styles.title} data-testid="hero-title">
                <Box component="span" sx={styles.span}>
                    &lt;h1&gt;
                </Box>
                Devs Help Devs
                <Box component="span" sx={styles.span}>
                    &lt;/h1&gt;
                </Box>
            </Typography>
            {/* TODO - the content needs to be changed later */}
            <Typography
                variant="h6"
                sx={styles.subTitle}
                data-testid="hero-subtitle"
            >
                <Box component="span" sx={styles.span}>
                    &lt;p&gt;
                </Box>
                This is a place where developers share their learning tips and
                interview experience to help each other grow, gain new skills
                and get more job offers
                <Box component="span" sx={styles.span}>
                    &lt;/p&gt;
                </Box>
            </Typography>
            <Stack direction="row" spacing={2} sx={styles.links}>
                <Link
                    variant="subtitle1"
                    underline="none"
                    href="/posts/learn"
                    sx={styles.learn}
                >
                    Learn Tips
                </Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link
                    variant="subtitle1"
                    underline="none"
                    href="/posts/interview"
                    sx={styles.interview}
                >
                    Interview Questions
                </Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link
                    variant="subtitle1"
                    underline="none"
                    href="/posts/project"
                    sx={styles.project}
                >
                    Open Source Projects
                </Link>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Link
                    variant="subtitle1"
                    underline="none"
                    href="/posts/general"
                    sx={styles.general}
                >
                    Discussions
                </Link>
            </Stack>
        </Container>
    );
};

const styles = {
    container: {
        backgroundColor: "neutral.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 5, md: 10 },
        mx: 0,
    },
    general: {
        color: "success.main",
    },
    interview: {
        color: "info.main",
    },
    learn: {
        color: "error.main",
    },
    links: {
        display: {
            xs: "none",
            sm: "flex",
        },
    },
    project: {
        color: "warning.main",
    },
    span: {
        color: "success.main",
        fontSize: {
            xs: "12px",
            md: "20px",
        },
    },
    subTitle: {
        color: "white",
        width: "85%",
        display: {
            xs: "none",
            md: "block",
        },
        pb: 2,
    },
    title: {
        color: "white",
        fontWeight: 500,
        fontSize: {
            xs: "30px",
            sm: "60px",
        },
        pb: 3,
    },
} as const;
export default Heroes;
