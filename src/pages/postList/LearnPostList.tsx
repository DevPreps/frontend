import React from "react";

// import Post List components
import CreateLearnPost from "./composePost/CreateLearnPost";
import PostListItem from "./postListComponents/PostListItem";
import SearchBar from "./postListComponents/SearchBar";
import SortMenu from "./postListComponents/SortMenu";
import Typography from "@mui/material/Typography";
import { UserCardActions } from "./postListComponents/CardActions";

// TODO - posts will be changed to used state and fetched from backend.
import { posts } from "../../data";

// import MUI components
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LearnPostList = () => {
    return (
        <Stack spacing={2}>
            {/* TODO - the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                Learn Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            <Stack direction="row">
                <CreateLearnPost />
                <SortMenu />
            </Stack>
            {/* post list */}
            {posts?.map((post) => (
                <PostListItem key={post.id} post={post}>
                    <UserCardActions />
                </PostListItem>
            ))}
            {/* load more button */}
            <Button>Load More</Button>
            {/* load more button */}
        </Stack>
    );
};

export default LearnPostList;
