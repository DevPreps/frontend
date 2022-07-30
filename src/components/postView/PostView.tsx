import React from "react";

//mui style
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Stack/Typography";

//import Post content and comments list files
import Comments from "../comment/Comments";
import PostCard from "./postComponents/PostCard";

const PostView = () => {
    return (
        <>
            <Typography variant="h3">
                Post View (This title will be delete)
            </Typography>
            <Grid container>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <Stack spacing={2} sx={styles.postContent}>
                        <PostCard />
                        <Comments />
                        <Button>Load More</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={4}></Grid>
            </Grid>
        </>
    );
};
export default PostView;

const styles = {
    postContent: {
        mt: 12,
    },
};
