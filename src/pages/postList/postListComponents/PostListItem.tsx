import React from "react";

//import MUI components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import MUI colors
import { grey } from "@mui/material/colors";

interface PostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

const PostListItem: React.FC<PostProps> = ({ children, post }) => {

    return (
        <CardActionArea component="a" href="#">
            <Card sx={style.card}>
                <Box sx={style.box}>
                    <CardContent sx={style.cardContent}>
                        <Typography variant="h5" sx={style.title} data-testid="post-title">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={style.date} data-testid="post-date">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph data-testid="post-description">
                            {post.description}
                        </Typography>
                    </CardContent>
                    {children}
                </Box>
                <CardMedia
                    component="img"
                    sx={style.image}
                    image={post.image}
                    alt={post.imageLabel}
                />
            </Card>
        </CardActionArea>
    );
};

const style = {
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
        color: grey[700],
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
