import React from "react";

// import MUI components
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SortMenu from "./postListComponents/SortMenu";
import PostListItem from "./postListComponents/PostListItem";
import Button from "@mui/material/Button";
import { AuthorCardActions } from "./postListComponents/CardActions";

const MyPostList = () => {
    const posts = [1, 2, 3];
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h5">
                Published Posts (This title will be deleted)
            </Typography>
            {/* sortMenu  */}
            <Stack direction="row">
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts.map((post) => (
                <PostListItem key={post}>
                    <AuthorCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default MyPostList;
