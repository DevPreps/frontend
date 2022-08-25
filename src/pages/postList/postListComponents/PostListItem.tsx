import React from "react";

import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

// import post data interface
import { IPost } from "./IPost";

interface PostProps {
    post: IPost;
}

const PostListItem: React.FC<PostProps> = ({ children, post }) => {
    return (
        <CardActionArea component="a" href="#">
            <Card sx={styles.card}>
                <Box sx={styles.box}>
                    <CardContent sx={styles.cardContent}>
                        <Typography
                            variant="h5"
                            sx={styles.title}
                            data-testid="post-title"
                        >
                            {post.title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={styles.date}
                            data-testid="post-date"
                        >
                            {post.date}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            paragraph
                            data-testid="post-content"
                        >
                            {post.content}
                        </Typography>
                    </CardContent>
                    {children}
                </Box>
                <CardMedia
                    component="img"
                    sx={styles.image}
                    image={post.image}
                    alt={post.imageLabel}
                />
            </Card>
        </CardActionArea>
    );
};

const styles = {
    box: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    card: {
        display: "flex",
    },
    cardContent: {
        flex: 1,
    },
    date: {
        color: "text.secondary",
    },
    image: {
        width: 240,
        display: {
            xs: "none",
            sm: "block",
        },
    },
    title: {
        fontWeight: 700,
    },
} as const;

export default PostListItem;
