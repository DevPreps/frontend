import React from "react";

//MUI styles
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

// Defined an interface properites
export interface TeamDetailProps {
    teamDetail: {
        avatar: string;
        devActualName: string;
        position: string;
        description: string;
    };
}

const TeamDetail = () => {
    // It is dummy data and will change
    const teamDetail: TeamDetailProps["teamDetail"] = {
        avatar: "TM",
        devActualName: "TM",
        position: "Web Developer",
        description:
            "Good at full stack web development, Front-end technologies",
    };

    return (
        //  Display bios of team members
        <Box sx={styles.childBox}>
            <Card sx={styles.cardContainer}>
                <Avatar sx={styles.avatar}>{teamDetail.avatar}</Avatar>
                <Typography sx={styles.titleText}>
                    {teamDetail.devActualName}.{teamDetail.position}
                </Typography>
                <CardContent sx={styles.cardContent}>
                    <Typography>{teamDetail.description}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TeamDetail;

const styles = {
    childBox: {
        flex: "0 0 30%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
    },
    cardContainer: {
        width: 280,
        height: 380,
        m: 2,
    },
    avatar: {
        // bg color will changes after site palette is determined
        bgcolor: "main",
        width: 185,
        height: 185,
        m: 5,
        ml: 6,
    },
    titleText: {
        textAlign: "center",
        // Text color will changes after site palette is determined
        color: "main",
    },
    cardContent: {
        width: "100%",
        textAlign: "center",
    },
};