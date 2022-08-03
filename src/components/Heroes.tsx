import React from "react";

// import MUI components
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// import MUI colors
import {
    blue,
    grey,
    lightGreen,
    purple,
    red,
    yellow,
} from "@mui/material/colors";

const Heroes = () => {
    return (
        <Container maxWidth="xl" sx={style.container}>
            <Typography variant="h2" sx={style.title} data-testid="hero-title">
                <span style={style.span}>&lt;h1&gt;</span>
                Devs Help Devs
                <span style={style.span}>&lt;/h1&gt;</span>
            </Typography>
            {/* TODO - the content needs to be changed later */}
            <Typography
                variant="h6"
                sx={style.subTitle}
                data-testid="hero-subtitle"
            >
                <span style={style.span}>&lt;p&gt;</span>We are a place where
                developer share their learning tips and interview experience to
                help each other grow skills and get job offers
                <span style={style.span}>&lt;/p&gt;</span>
            </Typography>
            <Stack direction="row" spacing={2}>
                <Typography variant="subtitle1" sx={style.learn}>
                    Learn Tips
                </Typography>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={style.divider}
                />
                <Typography variant="subtitle1" sx={style.interview}>
                    Interview Questions
                </Typography>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={style.divider}
                />
                <Typography variant="subtitle1" sx={style.project}>
                    Open Source Projects
                </Typography>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={style.divider}
                />
                <Typography variant="subtitle1" sx={style.general}>
                    Discussions
                </Typography>
            </Stack>
        </Container>
    );
};

const style = {
    container: {
        background: grey[900],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 5, md: 10 },
    },
    divider: {
        borderColor: "white",
    },
    span: {
        color: lightGreen["A700"],
        fontSize: "20px",
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
            xs: "35px",
            md: "60px",
        },
        pb: 3,
    },

    learn: {
        color: red[600],
    },
    interview: {
        color: blue[200],
    },
    project: {
        color: yellow[600],
    },
    general: {
        color: purple["A100"],
    },
} as const;
export default Heroes;
