import React from "react";

// import post list components
import { AuthorCardActions } from "./postListComponents/CardActions";
import SortMenu from "./postListComponents/SortMenu";
import PostListItem from "./postListComponents/PostListItem";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const MyPostList = () => {
    return (
        <Stack spacing={2}>
            {/* TODO - the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h5">
                Published Posts (This title will be deleted)
            </Typography>
            {/* sortMenu  */}
            <Stack direction="row">
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts.map((post) => (
                <PostListItem key={post.id} post={post}>
                    <AuthorCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default MyPostList;
