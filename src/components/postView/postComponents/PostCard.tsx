import React from "react";

// MUI icons
import { BookmarkAddOutlined, FavoriteBorder } from "@mui/icons-material";
// MUI UI/UX styles
import {
    IconButton,
    Avatar,
    Box,
    Card,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";

import AddComment from "../../comment/AddComment";

// Defined an interface properites
export interface PostDetail {
    postDetail: {
        imageUrl: string;
        username: string;
        date: string;
        jobTitle: string;
        content: string;
    };
}

const PostCard = () => {
    // It is dummy data and will change
    const postDetail: PostDetail["postDetail"] = {
        imageUrl:
            "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&dpr=1",
        username: "Username",
        date: "July/2022",
        jobTitle: "Post Title",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    };

    return (
        <Box>
            <Card sx={styles.postCard}>
                <Stack sx={styles.cardLayout} spacing={2}>
                    <Box sx={styles.avatarBox}>
                        <Avatar
                            src={postDetail.imageUrl}
                            alt="avatar"
                            sx={styles.avatar}
                        />
                        <Box>
                            <CardContent sx={styles.cardContent}>
                                {postDetail.username}
                            </CardContent>
                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={styles.titleText}>
                            {postDetail.jobTitle}
                        </Typography>
                        <Typography sx={styles.dateText}>
                            {postDetail.date}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={styles.contentText}>
                            {postDetail.content}
                        </Typography>
                    </Box>
                    <Box sx={styles.iconsBtnBox}>
                        <IconButton>
                            <BookmarkAddOutlined />
                        </IconButton>
                        <IconButton>
                            <FavoriteBorder />
                        </IconButton>
                        <AddComment />
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
};

export default PostCard;

const styles = {
    postCard: {
        m: 0,
        elevation: 0,
    },
    cardLayout: {
        m: 2,
    },
    avatarBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    avatar: {
        width: 56,
        height: 56,
        mt: 1,
    },
    cardContent: {
        mt: 1,
        fontSize: 18,
    },
    titleText: {
        fontSize: 30,
    },
    dateText: {
        fontSize: 12,
    },
    contentText: {
        fontFamily: "revert",
        fontSize: 20,
    },
    iconsBtnBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 1,
    },
};
