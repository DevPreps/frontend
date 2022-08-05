import React from "react";

// import Post List components
import CreateGeneralPost from "./composePost/CreateGeneralPost";
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

const GeneralPostList = () => {
    return (
        <Stack spacing={2}>
            {/* the following title just show which page is rendered, will be deleted later */}
            <Typography variant="h3">
                General Post List (This title will be deleted)
            </Typography>
            {/* search bar */}
            <SearchBar />
            {/* compose button and sort menu */}
            <Stack direction="row">
                <CreateGeneralPost />
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

export default GeneralPostList;
