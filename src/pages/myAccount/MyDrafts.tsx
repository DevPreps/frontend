import React from "react";

// import post list components
import { AuthorCardActions } from "../postList/postListComponents/CardActions";
import SortMenu from "../postList/postListComponents/SortMenu";
import PostListItem from "../postList/postListComponents/PostListItem";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

const MyDrafts = () => {
    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            {/* TODO - the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h5">
                My Drafts (This title will be deleted)
            </Typography>
            {/* sortMenu  */}
            <Stack direction="row">
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts?.map((post) => (
                <PostListItem key={post.postId} post={post}>
                    <AuthorCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default MyDrafts;
