import React from "react";

// import create post modal
import PostListItem from "./postListComponents/PostListItem";
import SortMenu from "./postListComponents/SortMenu";
import { UserCardActions } from "./postListComponents/CardActions";
// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const RecommendPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Recommend Post List (This title will be deleted)
            </Typography>
            {/* compose button and sort menu */}
            <Stack direction="row">
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts?.map((post) => (
                <PostListItem key={post.postId} post={post}>
                    <UserCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
        </Stack>
    );
};

export default RecommendPostList;
