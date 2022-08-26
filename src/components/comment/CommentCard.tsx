import React from "react";

// MUI Icons
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
// MUI UI/UX style
import {
    IconButton,
    Avatar,
    Box,
    Card,
    CardContent,
    Typography,
} from "@mui/material";

// import new comment file
import AddComment from "./AddComment";

// Defined an interface properites
export interface CommentProps {
    commentItem: {
        avatar: string;
        u_username: string;
        date: string;
        c_content: string;
    };
}

const CommentCard = () => {
    // It is dummy data and will change
    const commentItem: CommentProps["commentItem"] = {
        avatar: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        u_username: "Sammi",
        date: "July/2022",
        c_content: "Thanks for share.",
    };

    return (
        <Box sx={styles.cardContainer}>
            <Card>
                <Box sx={styles.cardBox}>
                    <Box sx={styles.userBox}>
                        <Avatar
                            src={commentItem.avatar}
                            alt="avatar"
                            sx={styles.avatar}
                        />
                        <CardContent>{commentItem.u_username}</CardContent>
                        <CardContent>{commentItem.date}</CardContent>
                    </Box>
                    <Box>
                        <Typography>{commentItem.c_content}</Typography>
                    </Box>
                    <Box sx={styles.btnBox}>
                        <AddComment />
                        <IconButton>
                            <ReportProblemIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default CommentCard;

const styles = {
    cardContainer: {
        display: "flex",
        flexDirection: "column",
    },
    cardBox: {
        m: 1,
    },
    userBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    avatar: {
        width: 30,
        height: 30,
        mt: 1,
        ml: 1,
    },
    btnBox: {
        ml: "70%",
        display: "flex",
        flexDirection: "row",
    },
};
