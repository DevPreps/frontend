import React from "react";
import { SubmitHandler } from "react-hook-form";

// import ContactForm and form data interface
import ContactForm from "../forms/contactForm";
import { IContactFormInputs } from "../forms/IFormInputs";

// import MUI component
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";

// import MUI icons
import BugReport from "@mui/icons-material/BugReport";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
    // handle form submission
    const onSubmit: SubmitHandler<IContactFormInputs> = (
        data: IContactFormInputs
    ) => {
        console.log("data", data);
    };
    return (
        <Grid container sx={styles.grid}>
            <Grid item xs={12} md={6} sx={styles.left}>
                <Typography variant="h1" sx={styles.title}>
                    Contact Us
                </Typography>
                <Typography variant="subtitle1" sx={styles.subtitle}>
                    Dev Prep would love to hear from you
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <Typography variant="subtitle1">
                            <Button variant="text" href="mailto:devprep@outlook.com.au" target="blank" sx={styles.button}>
                                devprep@outlook.com.au
                            </Button>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <BugReport />
                        </ListItemIcon>
                        <Typography variant="body1">
                            To report a bug, please create
                            <Button
                                variant="text"
                                target="blank"
                                href="https://github.com/DevPreps/frontend/issues"
                            >
                                a bug report
                            </Button>{" "}
                            in our GitHub repository
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <Button
                            variant="text"
                            target="blank"
                            href="https://github.com/DevPreps"
                            sx={styles.button}
                        >
                            https://github.com/DevPreps
                        </Button>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <Typography variant="body1">
                            Send us a message using the form on this page
                        </Typography>
                    </ListItem>
                </List>
            </Grid>
            <ContactForm onSubmit={onSubmit} />
        </Grid>
    );
};

const styles = {
    button: {
        pl: 0,
    },
    grid: {
        py: 3,
    },
    left: {
        pt: 4,
    },
    title: {
        fontSize: 36,
        fontWeight: 500,
        pl: 2,
        pb: 2,
    },
    subtitle: {
        px: 2,
        pb: 3,
    },
};
export default Contact;
