import React from "react";

//import Post content and comments list files
import { Button, Grid, Stack, Typography } from "@mui/material";

import Comments from "../comment/Comments";
import PostCard from "./postComponents/PostCard";

const PostView = () => {
    return (
        <>
            <Typography>Post View (This title will be delete)</Typography>
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
