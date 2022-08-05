import React from "react";

// import Post List components
import CreateProjectPost from "./composePost/CreateProjectPost";
import PostListItem from "./postListComponents/PostListItem";
import SearchBar from "./postListComponents/SearchBar";
import SortMenu from "./postListComponents/SortMenu";
import { UserCardActions } from "./postListComponents/CardActions";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProjectPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Project Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            <Stack direction="row">
                <CreateProjectPost />
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

export default ProjectPostList;
