import React from "react";

//import MUI components
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

// import MUI Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import AddCommentIcon from "@mui/icons-material/AddComment";

// import MUI colors
import { grey, red } from "@mui/material/colors";

interface PostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

const PostListItem = () => {
    const post: PostProps["post"] = {
        date: "22-07-2022",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit odio culpa dignissimos earum sint, placeat veritatis vel fuga nisi quas rerum ut voluptatem! Nisi odio quidem dolorum distinctio magnam aperiam.",
        image: "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_960_720.jpg",
        imageLabel: "image text",
        title: "Post Title",
    };

    return (
        // <Grid item xs={12}>
        <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h5" fontWeight="700">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color={grey[700]}>
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Avatar
                            sx={{ bgcolor: red[500], mx: 2 }}
                            aria-label="Post Item"
                        >
                            R
                        </Avatar>
                        <Typography>Username</Typography>
                        <IconButton
                            aria-label="add to favorites"
                            sx={{ ml: "auto" }}
                        >
                            <AddCommentIcon />
                        </IconButton>

                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <BookmarkAddIcon />
                        </IconButton>
                    </CardActions>
                </Box>
                <CardMedia
                    component="img"
                    sx={{
                        width: 240,
                        display: { xs: "none", sm: "block" },
                    }}
                    image={post.image}
                    alt={post.imageLabel}
                />
            </Card>
        </CardActionArea>
        // </Grid>
    );
};

export default PostListItem;
